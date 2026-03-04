"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_TOKEN

export default function SpotifyTracks() {
    const [tracks, setTracks] = useState([])
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState('idle')
    const [playing, setPlaying] = useState(null) // track.id en reproducción
    const [progress, setProgress] = useState(0)  // 0-100
    const audioRef = useRef(null)
    const rafRef = useRef(null)

    useEffect(() => {
        if (!TOKEN) return
        setStatus('loading')
        fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5', {
            headers: { Authorization: `Bearer ${TOKEN}` }
        })
            .then(r => r.json())
            .then(data => {
                if (data.items?.length) { setTracks(data.items); setStatus('ok') }
                else setStatus('error')
            })
            .catch(() => setStatus('error'))
    }, [])

    // Cleanup al desmontar
    useEffect(() => {
        return () => {
            cancelAnimationFrame(rafRef.current)
            audioRef.current?.pause()
        }
    }, [])

    const playTrack = (track) => {
        if (!track.preview_url) return

        // Si ya está sonando este track → pausar
        if (playing === track.id) {
            audioRef.current?.pause()
            cancelAnimationFrame(rafRef.current)
            setPlaying(null)
            setProgress(0)
            return
        }

        // Parar el anterior
        audioRef.current?.pause()
        cancelAnimationFrame(rafRef.current)

        const audio = new Audio(track.preview_url)
        audioRef.current = audio
        audio.volume = 0.6

        const tick = () => {
            if (!audio.paused && audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100)
                rafRef.current = requestAnimationFrame(tick)
            }
        }

        audio.play()
        setPlaying(track.id)
        setProgress(0)
        rafRef.current = requestAnimationFrame(tick)

        audio.onended = () => {
            setPlaying(null)
            setProgress(0)
            cancelAnimationFrame(rafRef.current)
        }
    }

    if (!TOKEN || status === 'error') return null

    return (
        <div className="fixed bottom-20 left-4 z-50 md:bottom-6">
            {/* Botón flotante */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                onClick={() => setOpen(o => !o)}
                title="Mi top en Spotify"
                className="glass flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300"
                style={{ boxShadow: '0 4px 20px var(--shadow)' }}
            >
                <SpotifyIcon size={18} />
                {playing && (
                    <motion.div
                        className="flex items-end gap-[3px] h-5"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                    >
                        {[1, 2, 3, 4].map(n => (
                            <span key={n} className={`eq-bar-${n} w-[3px] rounded-full`}
                                style={{ display: 'block', minHeight: '4px', background: '#1DB954' }} />
                        ))}
                    </motion.div>
                )}
                <span className="text-xs font-medium hidden sm:inline" style={{ color: 'var(--text-muted)' }}>
                    {status === 'loading' ? 'Cargando...' : playing ? 'Spotify' : 'Mi top'}
                </span>
            </motion.button>

            {/* Panel de tracks */}
            <AnimatePresence>
                {open && status === 'ok' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-14 left-0 w-72 glass rounded-2xl p-4"
                        style={{ boxShadow: '0 8px 32px var(--shadow)' }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <SpotifyIcon size={14} />
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                Mi top 5 de siempre
                            </span>
                        </div>

                        <div className="space-y-1.5">
                            {tracks.map((track, i) => {
                                const isPlaying = playing === track.id
                                const hasPreview = !!track.preview_url
                                return (
                                    <div key={track.id}>
                                        <button
                                            onClick={() => playTrack(track)}
                                            disabled={!hasPreview}
                                            className="w-full flex items-center gap-3 p-2 rounded-xl transition-all duration-200 text-left group/track"
                                            style={{
                                                background: isPlaying ? 'rgba(29,185,84,0.12)' : 'var(--accent-sub)',
                                                border: isPlaying ? '1px solid rgba(29,185,84,0.3)' : '1px solid transparent',
                                                cursor: hasPreview ? 'pointer' : 'default',
                                                opacity: hasPreview ? 1 : 0.5,
                                            }}
                                        >
                                            {/* Play / número */}
                                            <div className="w-5 flex items-center justify-center flex-shrink-0">
                                                {isPlaying ? (
                                                    <PauseIcon />
                                                ) : hasPreview ? (
                                                    <span className="opacity-0 group-hover/track:opacity-100 transition-opacity">
                                                        <PlayIcon />
                                                    </span>
                                                ) : null}
                                                {!isPlaying && (
                                                    <span className={`text-[10px] font-bold ${hasPreview ? 'group-hover/track:opacity-0' : ''} transition-opacity absolute`}
                                                        style={{ color: 'var(--accent)' }}>
                                                        {i + 1}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Imagen */}
                                            {track.album?.images?.[2] && (
                                                <img
                                                    src={track.album.images[2].url}
                                                    alt={track.album.name}
                                                    width={32} height={32}
                                                    className="rounded-md flex-shrink-0"
                                                />
                                            )}

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-semibold truncate"
                                                    style={{ color: isPlaying ? '#1DB954' : 'var(--text)' }}>
                                                    {track.name}
                                                </p>
                                                <p className="text-[10px] truncate" style={{ color: 'var(--text-muted)' }}>
                                                    {track.artists.map(a => a.name).join(', ')}
                                                </p>
                                            </div>

                                            {/* Link externo */}
                                            <a
                                                href={track.external_urls.spotify}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                className="flex-shrink-0 opacity-0 group-hover/track:opacity-60 hover:!opacity-100 transition-opacity"
                                                title="Abrir en Spotify"
                                            >
                                                <ExternalIcon />
                                            </a>
                                        </button>

                                        {/* Barra de progreso */}
                                        {isPlaying && (
                                            <div className="h-0.5 mt-1 mx-2 rounded-full overflow-hidden"
                                                style={{ background: 'var(--border)' }}>
                                                <motion.div
                                                    className="h-full rounded-full"
                                                    style={{ width: `${progress}%`, background: '#1DB954' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        <p className="text-[9px] mt-3 text-center" style={{ color: 'var(--text-muted)' }}>
                            Preview 30s · Spotify
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

/* ── Iconos inline ── */
function SpotifyIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#1DB954" />
            <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75a1.1 1.1 0 1 1-.64-2.1C9.15 6.5 15.1 6.7 18.85 8.85a1.1 1.1 0 1 1-1 1.95l.05.1zm-.1 2.9a.9.9 0 0 1-1.25.3c-2.65-1.65-6.7-2.1-9.85-1.15a.9.9 0 0 1-.5-1.73c3.6-1.1 8.1-.55 11.2 1.3a.9.9 0 0 1 .4 1.28zm-1.1 2.8a.72.72 0 0 1-1 .24C13.4 15.5 10.45 15.1 7 15.9a.72.72 0 0 1-.32-1.4c3.8-.87 7.1-.5 9.8 1.2a.72.72 0 0 1 .22.9z" fill="white" />
        </svg>
    )
}

function PlayIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#1DB954' }}>
            <polygon points="5,3 19,12 5,21" />
        </svg>
    )
}

function PauseIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#1DB954' }}>
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
        </svg>
    )
}

function ExternalIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    )
}
