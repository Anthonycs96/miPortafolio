import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-5" />
            {/* Fondo inclinado superior */}


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                    Sobre Mí
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Columna Izquierda: Imagen y Descripción */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative aspect-[4/3] w-full group mb-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl -rotate-6 opacity-20 group-hover:rotate-3 transition-all duration-300" />
                            <div className="absolute inset-0 bg-[var(--background-secondary)] rounded-2xl rotate-3 group-hover:-rotate-3 transition-all duration-300" />
                            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                                <Image
                                    src="https://scontent.flim23-1.fna.fbcdn.net/v/t39.30808-6/486374655_24087523600850011_3334554782783614825_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEheDIjIEMyEGbxSYbncCCHZrEpMa9L5glmsSkxr0vmCfBhr6l_Hzl2j4P76wI6rxaKtgjyVKRs7Urso9n69P4R&_nc_ohc=7DsDSQl9a40Q7kNvwF8K1Gl&_nc_oc=Adlz0dZdqgGu9VV0nAUiGTFmDldwqEEM180DdrLjR9YsgNX6c3uT0R7kSYpnArX3Kf4M2j7Lr2hfss4vnqxmLgsR&_nc_zt=23&_nc_ht=scontent.flim23-1.fna&_nc_gid=54H_-BvBSuXs8kyRx3XzTg&oh=00_AYHZ5qOlDMNXJijOTemLHqekN_lDTBweXPq-mQ2sGtnVIA&oe=67F5C3F1"
                                    alt="Perfil profesional"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    className="object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-all duration-300"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="bg-[var(--background-secondary)] p-6 rounded-xl shadow-lg border border-[var(--border)]">
                            <p className="text-lg text-[var(--foreground)] leading-relaxed">
                                Soy estudiante de Ingeniería en Software, buscando mi primera oportunidad profesional como desarrollador.
                                Me apasiona aprender nuevas tecnologías y contribuir al desarrollo
                                de soluciones innovadoras.
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha: Educación y Experiencia */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Educación */}
                        <div className="bg-[var(--background-secondary)] p-6 rounded-xl shadow-lg border border-[var(--border)]">
                            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                                Educación
                            </h3>
                            <div className="space-y-4">
                                {educationData.map((edu, index) => (
                                    <div key={index} className="p-4 bg-[var(--background)] rounded-xl hover:shadow-md transition-all duration-300 border border-[var(--primary)/20]">
                                        <h4 className="text-lg font-bold text-[var(--primary)]">{edu.institution}</h4>
                                        <p className="text-base text-[var(--foreground)]">{edu.degree}</p>
                                        <p className="text-sm text-[var(--foreground)/80]">{edu.period}</p>
                                        <p className="text-sm text-[var(--foreground)/80]">{edu.location}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experiencia */}
                        <div className="bg-[var(--background-secondary)] p-6 rounded-xl shadow-lg border border-[var(--border)]">
                            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                                Experiencia
                            </h3>
                            <div className="space-y-4">
                                {experienceData.map((exp, index) => (
                                    <div key={index} className="p-4 bg-[var(--background)] rounded-xl hover:shadow-md transition-all duration-300 border border-[var(--primary)/20]">
                                        <span className="text-sm text-[var(--foreground)/70] italic">{exp.type}</span>
                                        <h4 className="text-lg font-bold text-[var(--primary)]">{exp.title}</h4>
                                        <p className="text-sm text-[var(--foreground)/80]">{exp.period}</p>
                                        <p className="text-sm text-[var(--foreground)] mt-2">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Datos de educación y experiencia
const educationData = [
    {
        institution: "Instituto IDAT",
        degree: "Desarrollo de Sistemas de la Información",
        period: "Julio 2017 - Diciembre 2022",
        location: "Ate, Lima, Perú"
    },
    {
        institution: "Universidad Tecnológica del Perú (UTP)",
        degree: "Ingeniería en Software",
        period: "Marzo 2024 - En proceso",
        location: "Ate, Lima, Perú"
    }
]

const experienceData = [
    {
        type: "Proyecto personal",
        title: "Desarrollador Full Stack – Sistema de Gestión para Veterinarias",
        period: "2024 - Actual",
        description: "Proyecto completo con Next.js, Node.js, Express y MySQL. Incluye autenticación, gestión de citas médicas, servicios adicionales y roles personalizados para usuarios."
    },
    {
        type: "Proyecto personal",
        title: "Desarrollador Frontend – Portafolio Web Personal",
        period: "2023",
        description: "Creación de un portafolio responsivo con Next.js y Tailwind CSS. Incluye animaciones suaves, modo oscuro, secciones dinámicas, y despliegue automático."
    }
]

export default About