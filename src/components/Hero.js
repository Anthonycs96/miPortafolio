import Image from 'next/image'

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Contenido */}
                    <div className="md:w-1/2 text-center md:text-left text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Hola, soy{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400">
                                Anthony Carhuayalle
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl mb-6 text-white/90">
                            Desarrollador Junior | Estudiante de Ingeniería en Software
                        </h2>

                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="#projects"
                                className="bg-white text-[var(--primary)] px-8 py-3 rounded-lg 
                                    font-semibold hover:bg-yellow-50 transition-colors">
                                Ver Proyectos
                            </a>
                            <a href="#contact"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg 
                                    font-semibold hover:bg-white/10 transition-colors">
                                Contactar
                            </a>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl" />
                            <Image
                                src="https://raw.githubusercontent.com/Anthonycs96/miPortafolio/refs/heads/main/assets/imagen1.jpg"
                                alt="Anthony Carhuayalle"
                                fill
                                className="rounded-full object-cover border-4 border-white/20"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero