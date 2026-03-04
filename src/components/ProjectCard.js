import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, onClick }) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="card rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => onClick(project)}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 32px var(--accent-glow)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
        >
            {/* Imagen */}
            <div className="relative h-48 overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 60%)' }} />

                {/* Estado badge */}
                {project.estado && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5"
                        style={{
                            background: 'var(--bg-surface)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid var(--border)',
                            color: project.estado === 'Completado' ? '#34d399' : '#f59e0b',
                        }}>
                        <span className="w-1.5 h-1.5 rounded-full"
                            style={{ background: project.estado === 'Completado' ? '#34d399' : '#f59e0b' }} />
                        {project.estado}
                    </div>
                )}

                {/* Tipo badge */}
                {project.type && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                        style={{
                            background: 'var(--accent-sub)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid var(--border)',
                            color: 'var(--accent)',
                        }}>
                        {project.type}
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                    {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {project.shortDescription}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                        <span key={i}
                            className="px-2.5 py-1 text-[11px] rounded-full font-medium"
                            style={{
                                background: 'var(--accent-sub)',
                                border: '1px solid var(--border)',
                                color: 'var(--accent-lt)',
                            }}>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer de la card */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                        Ver detalles →
                    </span>
                    <div className="flex gap-3">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="transition-all duration-200 hover:scale-110"
                                style={{ color: 'var(--text-muted)' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                                <Github size={16} />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="transition-all duration-200 hover:scale-110"
                                style={{ color: 'var(--text-muted)' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
