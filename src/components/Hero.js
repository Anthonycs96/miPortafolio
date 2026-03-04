"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'

const phrases = [
    'Estudiante de Ing. en Software',
    'Aprendiendo desarrollo web',
    'Next.js · Node.js · MySQL',
    'En camino a ser desarrollador',
]

const fu = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
    const [idx, setIdx] = useState(0)
    const [text, setText] = useState('')
    const [forward, setForward] = useState(true)

    useEffect(() => {
        const target = phrases[idx]
        let t
        if (forward) {
            if (text.length < target.length) {
                t = setTimeout(() => setText(target.slice(0, text.length + 1)), 60)
            } else {
                t = setTimeout(() => setForward(false), 2200)
            }
        } else {
            if (text.length > 0) {
                t = setTimeout(() => setText(text.slice(0, -1)), 32)
            } else {
                setIdx((i) => (i + 1) % phrases.length)
                setForward(true)
            }
        }
        return () => clearTimeout(t)
    }, [text, forward, idx])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 md:pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">

                    {/* ── Texto ── */}
                    <div className="md:w-1/2 text-center md:text-left">

                        {/* Badge honesto */}
                        <motion.div {...fu(0)}
                            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-medium"
                            style={{
                                background: 'var(--accent-sub)',
                                border: '1px solid var(--border)',
                                color: 'var(--accent)',
                            }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                            Buscando mi primera oportunidad · Lima, Perú
                        </motion.div>

                        <motion.h1 {...fu(0.08)}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3"
                            style={{ color: 'var(--text)' }}>
                            Hola, soy{' '}
                            <span className="text-grad">Anthony</span>
                        </motion.h1>

                        {/* Typing */}
                        <motion.div {...fu(0.16)}
                            className="text-lg md:text-xl font-medium mb-5 min-h-[1.75rem]"
                            style={{ color: 'var(--text-sec)' }}>
                            {text}<span className="typing-cursor" />
                        </motion.div>

                        <motion.p {...fu(0.24)}
                            className="text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0"
                            style={{ color: 'var(--text-muted)' }}>
                            Vengo del mundo de la logística y la gestión de flotas.
                            Hoy estudio Ingeniería en Software y construyo mis primeros proyectos.
                            Esta página cuenta ese camino.
                        </motion.p>

                        <motion.div {...fu(0.32)} className="flex gap-3 justify-center md:justify-start flex-wrap">
                            <a href="#about"
                                className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                                style={{ background: 'var(--accent2)', color: '#fff', boxShadow: '0 4px 16px rgba(255,87,34,0.3)' }}>
                                Ver mi historia
                            </a>
                            <a href="#projects"
                                className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid var(--accent)',
                                    color: 'var(--accent)',
                                }}>
                                Proyectos
                            </a>
                        </motion.div>

                        {/* Stats — honestos */}
                        <motion.div {...fu(0.4)} className="flex gap-8 mt-10 justify-center md:justify-start">
                            {[
                                { n: '4+', l: 'años en logística' },
                                { n: '2', l: 'proyectos propios' },
                                { n: '2024', l: 'inicio en software' },
                            ].map((s) => (
                                <div key={s.l} className="text-center md:text-left">
                                    <p className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{s.n}</p>
                                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.l}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Avatar ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="relative" style={{ width: 'clamp(200px, 22vw, 280px)', height: 'clamp(200px, 22vw, 280px)' }}>
                            <div className="avatar-ring absolute inset-0" />
                            <div className="absolute inset-[3px] rounded-full overflow-hidden"
                                style={{ background: 'var(--bg-surface)' }}>
                                <Image
                                    src="https://raw.githubusercontent.com/Anthonycs96/miPortafolio/refs/heads/main/assets/imagen2.jpg"
                                    alt="Anthony Carhuayalle"
                                    fill
                                    className="rounded-full object-cover"
                                    priority
                                />
                            </div>

                            {/* Badge flotante */}
                            <motion.div
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
                                style={{
                                    background: 'var(--card-bg)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-sec)',
                                    boxShadow: 'var(--card-shadow)',
                                }}>
                                🎓 Estudiante de Software
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="hidden md:flex flex-col items-center gap-2 mt-14"
                >
                    <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                        Explorar
                    </span>
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ArrowDown size={14} style={{ color: 'var(--text-muted)' }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
