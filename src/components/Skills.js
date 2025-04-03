"use client"
import { skills } from '../data/skills'

const Skills = () => {
    return (
        <section id="skills" className="relative py-24 overflow-hidden">
            {/* Fondo con degradado sutil similar a About */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--accent)]/5 to-[var(--secondary)]/5" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Título con el mismo estilo que About y Projects */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                        Mis Habilidades
                    </h2>
                    <div className="mt-4">
                        <p className="text-[var(--muted-foreground)] text-lg">
                            Tecnologías y herramientas que manejo
                        </p>
                    </div>
                </div>

                {/* Grid de habilidades */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name}
                            className="group p-6 bg-[var(--background)] rounded-xl 
                                border border-[var(--border)] hover:border-[var(--primary)]
                                transition-all duration-300
                                dark:bg-[var(--background-secondary)]
                                hover:shadow-lg hover:shadow-[var(--primary)]/10">
                            <div className="flex flex-col items-center space-y-4">
                                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </span>
                                <h3 className="font-medium text-[var(--foreground)]">
                                    {skill.name}
                                </h3>
                                <div className="w-full h-2 bg-[var(--accent)]/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;