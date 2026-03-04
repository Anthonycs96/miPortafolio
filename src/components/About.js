"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Truck, Code2, GraduationCap, Briefcase, MapPin, ArrowRight } from 'lucide-react'

// ─── Datos de la jornada ───────────────────────────────────────────────────
// Opacidad progresiva: pasos más antiguos = más tenue, más recientes = más sólido
const journeySteps = [
    {
        era: '2020 – 2022',
        icon: <Truck size={18} />,
        role: 'Digitador → Supervisor de Transporte',
        company: 'Transportes77 / Backus — Gepae',
        place: 'Ate, Lima',
        opacity: 0.45,
        desc: 'Empecé gestionando datos logísticos y ascendí a supervisar la cadena de transporte de Backus, coordinando flotas GPS en tiempo real.',
    },
    {
        era: 'Ene – Mar 2022',
        icon: <Truck size={18} />,
        role: 'Asistente de Monitoreo',
        company: 'LOGTRACK (Ajeper)',
        place: 'Huachipa, Lima',
        opacity: 0.55,
        desc: 'Apoyo en optimización logística de carga pesada, gestión de flotas y resolución de incidencias en tiempo real.',
    },
    {
        era: 'Feb – Jul 2023',
        icon: <Truck size={18} />,
        role: 'Asistente de Monitoreo',
        company: 'AQTRANS',
        place: 'Ate, Lima',
        opacity: 0.65,
        desc: 'Lideré implementación de sistema de gestión de flotas, reduciendo costos operativos y mejorando la seguridad de rutas.',
    },
    {
        era: 'Ago 2023 – Hoy',
        icon: <Briefcase size={18} />,
        role: 'Auxiliar de Liquidaciones',
        company: 'CICSA',
        place: 'San Isidro, Lima',
        opacity: 0.75,
        desc: 'Gestión de expedientes, órdenes de compra y liquidaciones financieras. Primer acercamiento al mundo corporativo digital.',
    },
    {
        era: 'Mar 2024 – Hoy',
        icon: <GraduationCap size={18} />,
        role: 'Estudiante de Ingeniería en Software',
        company: 'Universidad Tecnológica del Perú (UTP)',
        place: 'Ate, Lima',
        opacity: 0.9,
        desc: 'Formación formal en ingeniería de software, combinando la experiencia operativa del mundo real con fundamentos técnicos sólidos.',
        highlight: true,
    },
    {
        era: '2025 – Presente',
        icon: <Code2 size={18} />,
        role: 'Aprendiendo a programar',
        company: 'Proyectos propios — Vibe Coding',
        place: 'Lima (remoto)',
        opacity: 1,
        desc: 'Construyendo VetListo+ con Next.js, Node.js y MySQL. Uso vibe coding para aprender haciendo. Estoy en proceso — todavía no soy desarrollador, pero voy en camino.',
        highlight: true,
        current: true,
    },
]

const eduData = [
    {
        icon: '🎓',
        inst: 'Instituto IDAT',
        degree: 'Desarrollo de Sistemas de la Información',
        period: 'Jul 2017 – Dic 2022',
        place: 'Ate, Lima, Perú',
    },
    {
        icon: '🏛️',
        inst: 'Universidad Tecnológica del Perú (UTP)',
        degree: 'Ingeniería en Software',
        period: 'Mar 2024 – En proceso',
        place: 'Ate, Lima, Perú',
    },
]

export default function About() {
    return (
        <section id="about" className="relative py-14 overflow-hidden">
            <div className="section-divider" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="chapter-label"><MapPin size={12} />Capítulo I</span>
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)' }}>
                        El{' '}
                        <span className="text-grad">Viajero</span>
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                        De gestionar rutas de 40 toneladas a construir apps web —
                        cada experiencia fue un paso en el mapa.
                    </p>
                </motion.div>

                {/* Imagen + presentación */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2 flex flex-col gap-5"
                    >
                        <div className="relative aspect-[4/3] group rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 rounded-2xl -rotate-2 opacity-40"
                                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-lt))' }} />
                            <div className="relative h-full rounded-2xl overflow-hidden"
                                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                                <Image
                                    src="https://raw.githubusercontent.com/Anthonycs96/miPortafolio/refs/heads/main/assets/imagen1.jpg"
                                    alt="Anthony - Foto profesional"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Resumen personal */}
                        <div className="card p-5 rounded-2xl">
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
                                Estudiante de Ingeniería en Software con experiencia real en logística y operaciones.
                                Me adapto rápido a sistemas digitales porque ya aprendí a resolver problemas en entornos
                                de alta presión. Busco mi primera oportunidad formal como desarrollador.
                            </p>
                        </div>

                        {/* Educación */}
                        <div className="card p-5 rounded-2xl">
                            <h3 className="text-sm font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                                <GraduationCap size={16} style={{ color: 'var(--accent)' }} />
                                Formación académica
                            </h3>
                            <div className="space-y-3">
                                {eduData.map((e, i) => (
                                    <div key={i} className="flex gap-3 p-3 rounded-xl" style={{ background: 'var(--accent-sub)' }}>
                                        <span className="text-lg">{e.icon}</span>
                                        <div>
                                            <p className="font-bold text-xs" style={{ color: 'var(--text)' }}>{e.inst}</p>
                                            <p className="text-xs" style={{ color: 'var(--text-sec)' }}>{e.degree}</p>
                                            <p className="text-xs mt-0.5" style={{ color: 'var(--accent)' }}>{e.period}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline del camino */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <h3 className="text-lg font-bold mb-8 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                            <span style={{ color: 'var(--accent)' }}>🗺️</span>
                            El camino recorrido
                        </h3>

                        <div className="relative pl-6">
                            {/* Línea del camino — turquesa progresivo */}
                            <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full"
                                style={{ background: 'linear-gradient(to bottom, var(--accent-glow), var(--accent))' }} />

                            <div className="space-y-5">
                                {journeySteps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="relative pl-7"
                                    >
                                        {/* Dot — turquesa con opacidad progresiva */}
                                        <div
                                            className="absolute left-[-10px] top-3 w-4 h-4 rounded-full flex items-center justify-center border-2"
                                            style={{
                                                background: 'var(--accent)',
                                                borderColor: 'var(--bg)',
                                                opacity: step.opacity ?? 1,
                                                boxShadow: `0 0 8px var(--accent-glow)`,
                                            }}
                                        >
                                            {step.current && (
                                                <span className="w-2 h-2 rounded-full animate-ping"
                                                    style={{ background: 'var(--bg)', position: 'absolute' }} />
                                            )}
                                        </div>

                                        <div
                                            className="p-4 rounded-xl transition-all duration-300"
                                            style={{
                                                background: step.highlight ? 'var(--accent-sub)' : 'var(--card-bg)',
                                                border: '1px solid var(--border)',
                                                opacity: 0.6 + (step.opacity ?? 1) * 0.4,
                                            }}
                                        >
                                            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                                <div>
                                                    <div className="flex items-center gap-1.5">
                                                        <span style={{ color: 'var(--accent)' }}>{step.icon}</span>
                                                        <h4 className="font-bold text-sm" style={{ color: 'var(--text)' }}>
                                                            {step.role}
                                                        </h4>
                                                        {step.current && (
                                                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                                                                style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
                                                                Ahora
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-sec)' }}>
                                                        {step.company}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                                        style={{ background: 'var(--accent-sub)', color: 'var(--accent)' }}>
                                                        {step.era}
                                                    </span>
                                                    <p className="text-[10px] mt-1" style={{ color: 'var(--text-muted)' }}>
                                                        📍 {step.place}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="section-divider" />
        </section>
    )
}
