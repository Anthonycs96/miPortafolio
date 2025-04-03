import Image from 'next/image'

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]" />

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

                        <p className="text-lg mb-8 leading-relaxed text-white/80">
                            Buscando mi primera oportunidad profesional como desarrollador.
                            Me apasiona aprender nuevas tecnologías y contribuir al desarrollo
                            de soluciones innovadoras.
                        </p>

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
                                src="https://scontent.flim23-1.fna.fbcdn.net/v/t39.30808-6/487811228_24080685984867106_3627444449675481581_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFIROPXxiZ3zNmjvxWyo6NNDuqsUbpPQGgO6qxRuk9AaEGSElVKdKrxZCLDx1aJlGn1nb8zqWUsyMizBUodCjwl&_nc_ohc=Bo72fbjDTKIQ7kNvgEJa2EF&_nc_oc=Adkm70RxSzvex5NZySM8Kg7KWBcWXCy_dcVHKqyGGtXIrV-zUWqBWJMEucFWQzbkygt9X5uvchgpyXDG04Aue6tP&_nc_zt=23&_nc_ht=scontent.flim23-1.fna&_nc_gid=fgvUhFhlNZxyOXegEz4r3g&oh=00_AYEBWrJO18F77_T_dL1iS9LWy1rb2vNonhbq2l31qFgF3Q&oe=67F494D7"
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