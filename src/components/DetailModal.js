"use client"
import { useEffect } from 'react'

const DetailModal = ({ project, onClose }) => {
    if (!project) return null;

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-[var(--background)] rounded-lg max-w-3xl w-full p-6 shadow-xl border border-[var(--border)]">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">{project.title}</h2>

                    <div className="prose max-w-none mb-6 text-[var(--foreground)]">
                        <p className="whitespace-pre-line">{project.description}</p>
                    </div>

                    {project.features && (
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-[var(--foreground)]">Características:</h3>
                            <ul className="list-disc pl-5 space-y-1 text-[var(--muted-foreground)]">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 mb-6">
                        <div>
                            <h3 className="font-semibold text-[var(--foreground)]">Tipo:</h3>
                            <p className="text-[var(--muted-foreground)]">{project.type}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--foreground)]">Estado:</h3>
                            <p className="text-[var(--muted-foreground)]">{project.estado}</p>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded hover:bg-[var(--primary-hover)] transition-colors"
                            >
                                Ver Código
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded hover:bg-[var(--secondary-hover)] transition-colors"
                            >
                                Ver Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailModal