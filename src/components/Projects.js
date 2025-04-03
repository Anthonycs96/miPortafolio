"use client"
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import DetailModal from './DetailModal'
import { projects } from '../data/projects'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className="relative py-32 bg-[var(--background)]">
            {/* Patrón de fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-y-0 -left-1/2 w-[200%] bg-[var(--background-secondary)] transform -skew-y-12 opacity-50" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                        Mis Proyectos
                    </h2>
                    <div className="mt-4">
                        <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
                            Explora algunos de mis trabajos más destacados en desarrollo web y aplicaciones
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                {/* Decoración inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />

                {selectedProject && (
                    <DetailModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    )
}

export default Projects