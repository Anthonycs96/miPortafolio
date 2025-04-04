"use client"
import { useState } from 'react'
import { Mail, Phone, Send, User, MessageSquare, MessageCircle, Github } from 'lucide-react'

const phoneNumber = '51978488900';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleWhatsAppClick = (phoneNumber,) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=Vengo de tu pagina ...!`;
        window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, message } = formData;

        // Codificar los datos para que se puedan enviar como parámetros en la URL
        const encodedMessage = encodeURIComponent(
            `Hola!, soy ${name}\vVengo de tu pagina, ${message}.`
        );

        // Redirigir a WhatsApp con el mensaje
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
    };


    return (
        <section id="contact" className="relative py-16 overflow-hidden">
            {/* Fondo con mesh gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--primary),var(--background)_70%)] opacity-20 dark:opacity-30" />
                <div className="absolute inset-0 backdrop-blur-3xl" />
            </div>

            {/* Patrón de puntos */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Título con efecto de brillo */}
                <div className="text-center mb-16">
                    <h2 className="relative text-4xl font-bold inline-block">
                        <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-30" />
                        <span className="relative bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-transparent bg-clip-text">
                            Conectemos
                        </span>
                    </h2>
                    <p className="mt-4 text-[var(--muted-foreground)] text-lg">
                        Estoy aquí para convertir tus ideas en realidad
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Info card con efecto cristal */}
                    <div className="bg-white/5 dark:bg-gray-900/5 backdrop-blur-md 
                        rounded-2xl border border-white/10 dark:border-gray-800/10
                        shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                        p-8">
                        <h3 className="text-2xl font-semibold mb-8 text-[var(--foreground)]">
                            Información de contacto
                        </h3>
                        <div className="bg-[var(--background)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 shadow-lg">

                            <div className="space-y-6">
                                {/* Correo electrónico */}
                                <p className="flex items-center space-x-4 text-[var(--foreground)]">
                                    <Mail className="w-6 h-6 text-[var(--primary)]" />
                                    <span className="text-sm">anthonycs.dev@gmail.com</span>
                                </p>

                                {/* Número de teléfono */}
                                <p className="flex items-center space-x-4 text-[var(--foreground)]">
                                    <Phone className="w-6 h-6 text-[var(--primary)]" />
                                    <span className="text-sm" onClick={() => handleWhatsAppClick(phoneNumber)}>+51 978 488 900</span>
                                </p>

                                {/* GitHub */}
                                <p className="flex items-center gap-4">
                                    <Github className="w-6 h-6 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300" />

                                    <span className="flex flex-col">
                                        <a href="https://github.com/Anthonycs96?tab=repositories"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[var(--primary)] hover:text-[var(---button-tertiary)] font-medium">
                                            Ver mi GitHub →
                                        </a>
                                        <span className="text-sm text-[var(--muted-foreground)]">
                                            Poco a poco construyendo mi camino
                                        </span>
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Form con efecto cristal */}
                    <form onSubmit={handleSubmit}
                        className="bg-white/5 dark:bg-gray-900/5 backdrop-blur-md 
                            rounded-2xl border border-white/10 dark:border-gray-800/10
                            shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                            p-8 space-y-6">
                        {/* Input fields con fondo translúcido */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                className="w-full px-4 py-3 rounded-lg
                                    bg-white/10 dark:bg-gray-900/10
                                    border border-white/20 dark:border-gray-800/20
                                    text-[var(--foreground)]
                                    placeholder-gray-400 dark:placeholder-gray-500
                                    focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20
                                    transition-all duration-300"
                            />
                            {/* ...other inputs... */}
                        </div>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tu mensaje"
                                className="w-full px-4 py-3 rounded-lg
                                    bg-white/10 dark:bg-gray-900/10
                                    border border-white/20 dark:border-gray-800/20
                                    text-[var(--foreground)]
                                    placeholder-gray-400 dark:placeholder-gray-500
                                    focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20
                                    transition-all duration-300"
                            />
                            {/* ...other inputs... */}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-lg
                                bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]
                                text-white font-medium
                                hover:opacity-90 transition-opacity duration-300
                                shadow-lg shadow-[var(--primary)]/20"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Enviar WhatsApp
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact