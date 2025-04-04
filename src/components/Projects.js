"use client"
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import DetailModal from './DetailModal'
import { projects } from '../data/projects'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className="py-20 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                    Mis Proyectos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

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