"use client"
import { useState } from 'react'
import { Mail, Phone, MessageCircle, Github, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

const phoneNumber = '51978488900'

const contactItems = [
    {
        icon: <Mail size={18} />,
        label: 'Email',
        value: 'anthonycs.dev@gmail.com',
        href: 'mailto:anthonycs.dev@gmail.com',
        note: 'Respondo en menos de 24h',
    },
    {
        icon: <Phone size={18} />,
        label: 'WhatsApp',
        value: '+51 978 488 900',
        href: `https://wa.me/${phoneNumber}?text=Vengo de tu pagina ...!`,
        note: 'Lima, Perú (GMT-5)',
    },
    {
        icon: <Github size={18} />,
        label: 'GitHub',
        value: 'github.com/Anthonycs96',
        href: 'https://github.com/Anthonycs96?tab=repositories',
        note: 'Proyectos y código abierto',
    },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, message } = form
        const encoded = encodeURIComponent(`Hola!, soy ${name}\vVengo de tu pagina, ${message}.`)
        window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank')
        setSent(true)
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <section id="contact" className="relative py-14 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <span className="chapter-label"><Navigation size={12} />Capítulo IV</span>
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)' }}>
                        El Próximo{' '}
                        <span className="text-grad">Destino</span>
                    </h2>
                    <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
                        Cada gran aventura comienza con un mensaje. ¿Tienes una oportunidad?
                        ¿Un proyecto? Escríbeme — estoy listo para el próximo capítulo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card rounded-2xl p-8 flex flex-col gap-6"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                                Hablemos
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                Busco mi primera oportunidad formal como desarrollador.
                                También disponible para proyectos freelance, prácticas o colaboraciones.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {contactItems.map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group block"
                                    style={{ background: 'var(--accent-sub)', border: '1px solid var(--border)' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent)'
                                        e.currentTarget.style.boxShadow = '0 0 16px var(--accent-glow)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border)'
                                        e.currentTarget.style.boxShadow = ''
                                    }}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                        style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', color: 'var(--accent)' }}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                                        <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>{item.value}</p>
                                        <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{item.note}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Quote */}
                        <div className="p-4 rounded-xl"
                            style={{ background: 'var(--accent-sub)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)' }}>
                            <p className="text-xs italic leading-relaxed" style={{ color: 'var(--text-sec)' }}>
                                "Empecé supervisando 40 toneladas en rutas de Lima.
                                Ahora construyo apps. El camino siempre sigue."
                            </p>
                            <p className="text-[11px] mt-2 font-semibold" style={{ color: 'var(--accent)' }}>— Anthony, 2025</p>
                        </div>
                    </motion.div>

                    {/* Formulario */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="card rounded-2xl p-8 flex flex-col gap-5"
                    >
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                            Enviar mensaje
                        </h3>

                        {[
                            { id: 'name', label: 'Tu nombre', placeholder: 'Ej: Juan García', type: 'text' },
                        ].map(({ id, label, placeholder, type }) => (
                            <div key={id} className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                    {label}
                                </label>
                                <input
                                    type={type}
                                    name={id}
                                    value={form[id] || ''}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    required
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                                    style={{
                                        background: 'var(--accent-sub)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text)',
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)' }}
                                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = '' }}
                                />
                            </div>
                        ))}

                        <div className="flex flex-col gap-1.5 flex-1">
                            <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                Tu mensaje
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hola Anthony, me gustaría hablar sobre..."
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300"
                                style={{
                                    background: 'var(--accent-sub)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text)',
                                }}
                                onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)' }}
                                onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = '' }}
                            />
                        </div>

                        <button type="submit"
                            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                            style={{
                                background: sent ? '#22c55e' : 'var(--accent2)',
                                color: '#fff',
                                boxShadow: sent ? '0 8px 24px rgba(34,197,94,0.3)' : '0 8px 24px rgba(255,87,34,0.3)',
                            }}>
                            {sent ? (
                                <>✓ ¡Abriendo WhatsApp!</>
                            ) : (
                                <><MessageCircle size={18} />Enviar por WhatsApp</>
                            )}
                        </button>

                        <p className="text-[11px] text-center" style={{ color: 'var(--text-muted)' }}>
                            Al enviar se abrirá WhatsApp con tu mensaje precargado.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
