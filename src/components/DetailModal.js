"use client"
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

export default function DetailModal({ project, onClose }) {
    useEffect(() => {
        const onEsc = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onEsc)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onEsc)
            document.body.style.overflow = ''
        }
    }, [onClose])

    if (!project) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50">
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0"
                    style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="relative h-full flex items-end md:items-center justify-center md:p-6">
                    <motion.div
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative w-full md:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-2xl p-6 shadow-2xl"
                        style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border)',
                            boxShadow: '0 -4px 60px var(--accent-glow)',
                        }}
                    >
                        {/* Handle mobile */}
                        <div className="flex justify-center mb-4 md:hidden">
                            <div className="w-10 h-1 rounded-full" style={{ background: 'var(--border)' }} />
                        </div>

                        {/* Close */}
                        <button onClick={onClose}
                            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-200"
                            style={{ background: 'var(--accent-sub)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
                            <X size={14} />
                        </button>

                        {/* Tipo + título */}
                        {project.type && (
                            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                                style={{ background: 'var(--accent-sub)', color: 'var(--accent)' }}>
                                {project.type}
                            </span>
                        )}
                        <h2 className="text-2xl font-bold mt-3 mb-1 pr-8" style={{ color: 'var(--text)' }}>
                            {project.title}
                        </h2>
                        {project.estado && (
                            <p className="text-sm mb-4 flex items-center gap-1.5" style={{ color: project.estado === 'Completado' ? '#34d399' : '#f59e0b' }}>
                                <span className="w-1.5 h-1.5 rounded-full inline-block"
                                    style={{ background: project.estado === 'Completado' ? '#34d399' : '#f59e0b' }} />
                                {project.estado}
                            </p>
                        )}

                        {/* Descripción */}
                        <div className="mb-5 p-4 rounded-xl" style={{ background: 'var(--accent-sub)', border: '1px solid var(--border)' }}>
                            <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-sec)' }}>
                                {project.description}
                            </p>
                        </div>

                        {/* Features */}
                        {project.features && (
                            <div className="mb-5">
                                <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--accent)' }}>
                                    ✦ Características
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {project.features.map((f, i) => (
                                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg text-xs"
                                            style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', color: 'var(--text-sec)' }}>
                                            <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tech stack */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--accent)' }}>
                                ✦ Stack técnico
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((t, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{ background: 'var(--accent-sub)', border: '1px solid var(--border)', color: 'var(--accent-lt)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 justify-end">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                                    style={{ background: 'var(--accent-sub)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                                    <Github size={15} /> Código
                                </a>
                            )}
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                                    style={{ background: 'var(--accent2)', color: '#fff', boxShadow: '0 4px 16px rgba(255,87,34,0.3)' }}>
                                    <ExternalLink size={15} /> Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    )
}
