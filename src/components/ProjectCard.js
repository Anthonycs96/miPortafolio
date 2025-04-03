import Image from 'next/image'

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            className="bg-[var(--background-secondary)] rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 border border-[var(--border)] hover:border-[var(--primary)]"
            onClick={() => onClick(project)}
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                    {project.title}
                </h3>
                <p className="text-[var(--muted-foreground)] mb-4">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-[var(--accent)] text-[var(--accent-foreground)] text-sm rounded-full transition-colors duration-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard