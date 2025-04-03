import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="relative py-24 overflow-hidden">
            {/* Fondo con gradiente y overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-5" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                    Sobre Mí
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 bg-[var(--background-secondary)] p-8 rounded-2xl shadow-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300">
                        <p className="text-lg text-[var(--foreground)] leading-relaxed">
                            Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras.
                            Me especializo en React, Next.js y Node.js, con experiencia en el desarrollo
                            de aplicaciones web escalables y modernas.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                                Experiencia
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-4 p-4 bg-[var(--background)] rounded-lg hover:shadow-md transition-all duration-300">
                                    <span className="font-semibold text-[var(--primary)]">2022 - Actual</span>
                                    <span className="text-[var(--foreground)]">Desarrollador Full Stack en XYZ Company</span>
                                </li>
                                <li className="flex items-center space-x-4 p-4 bg-[var(--background)] rounded-lg hover:shadow-md transition-all duration-300">
                                    <span className="font-semibold text-[var(--primary)]">2020 - 2022</span>
                                    <span className="text-[var(--foreground)]">Desarrollador Frontend en ABC Tech</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-96 w-full group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl -rotate-6 opacity-20 group-hover:rotate-3 transition-all duration-300" />
                        <div className="absolute inset-0 bg-[var(--background-secondary)] rounded-2xl rotate-3 group-hover:-rotate-3 transition-all duration-300" />
                        <Image
                            src="/about-image.jpg"
                            alt="Workspace"
                            fill
                            className="object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About