"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_TOKEN

export default function SpotifyTracks() {
    const [tracks, setTracks] = useState([])
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState('idle') // idle | loading | ok | error

    useEffect(() => {
        if (!TOKEN) return
        setStatus('loading')
        fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5', {
            headers: { Authorization: `Bearer ${TOKEN}` }
        })
            .then(r => r.json())
            .then(data => {
                if (data.items?.length) {
                    setTracks(data.items)
                    setStatus('ok')
                } else {
                    setStatus('error')
                }
            })
            .catch(() => setStatus('error'))
    }, [])

    // No renderizar si no hay token o falló
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
                className="glass flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 group"
                style={{ boxShadow: '0 4px 20px var(--shadow)' }}
            >
                {/* Icono Spotify SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#1DB954" />
                    <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75a1.1 1.1 0 1 1-.64-2.1C9.15 6.5 15.1 6.7 18.85 8.85a1.1 1.1 0 1 1-1 1.95l.05.1zm-.1 2.9a.9.9 0 0 1-1.25.3c-2.65-1.65-6.7-2.1-9.85-1.15a.9.9 0 0 1-.5-1.73c3.6-1.1 8.1-.55 11.2 1.3a.9.9 0 0 1 .4 1.28zm-1.1 2.8a.72.72 0 0 1-1 .24C13.4 15.5 10.45 15.1 7 15.9a.72.72 0 0 1-.32-1.4c3.8-.87 7.1-.5 9.8 1.2a.72.72 0 0 1 .22.9z" fill="white" />
                </svg>
                <span className="text-xs font-medium hidden sm:inline" style={{ color: 'var(--text-muted)' }}>
                    {status === 'loading' ? 'Cargando...' : 'Mi top'}
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
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#1DB954" />
                                <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75a1.1 1.1 0 1 1-.64-2.1C9.15 6.5 15.1 6.7 18.85 8.85a1.1 1.1 0 1 1-1 1.95l.05.1zm-.1 2.9a.9.9 0 0 1-1.25.3c-2.65-1.65-6.7-2.1-9.85-1.15a.9.9 0 0 1-.5-1.73c3.6-1.1 8.1-.55 11.2 1.3a.9.9 0 0 1 .4 1.28zm-1.1 2.8a.72.72 0 0 1-1 .24C13.4 15.5 10.45 15.1 7 15.9a.72.72 0 0 1-.32-1.4c3.8-.87 7.1-.5 9.8 1.2a.72.72 0 0 1 .22.9z" fill="white" />
                            </svg>
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                Mi top 5 de siempre
                            </span>
                        </div>

                        <div className="space-y-2">
                            {tracks.map((track, i) => (
                                <a
                                    key={track.id}
                                    href={track.external_urls.spotify}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-2 rounded-xl transition-all duration-200 group/track"
                                    style={{ background: 'var(--accent-sub)' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-raised)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-sub)'}
                                >
                                    {/* Número */}
                                    <span className="text-[10px] font-bold w-4 text-center flex-shrink-0"
                                        style={{ color: 'var(--accent)' }}>
                                        {i + 1}
                                    </span>

                                    {/* Imagen del álbum */}
                                    {track.album?.images?.[2] && (
                                        <img
                                            src={track.album.images[2].url}
                                            alt={track.album.name}
                                            width={32}
                                            height={32}
                                            className="rounded-md flex-shrink-0"
                                        />
                                    )}

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold truncate" style={{ color: 'var(--text)' }}>
                                            {track.name}
                                        </p>
                                        <p className="text-[10px] truncate" style={{ color: 'var(--text-muted)' }}>
                                            {track.artists.map(a => a.name).join(', ')}
                                        </p>
                                    </div>

                                    {/* Link icon */}
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        className="flex-shrink-0 opacity-0 group-hover/track:opacity-100 transition-opacity"
                                        style={{ color: 'var(--text-muted)' }}>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        <p className="text-[9px] mt-3 text-center" style={{ color: 'var(--text-muted)' }}>
                            Top histórico · Spotify
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
