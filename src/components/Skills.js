"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sword } from 'lucide-react'
import { skills, skillCategories } from '../data/skills'

const categoryDesc = {
    "Frontend":       "Interfaces de usuario modernas y responsivas",
    "Backend":        "APIs REST y lógica de servidor",
    "Bases de Datos": "Diseño, consultas y optimización SQL",
    "Herramientas":   "Flujo de desarrollo y control de versiones",
    "Metodologías":   "Trabajo ágil en equipo",
    "Experiencia":    "Habilidades adquiridas en logística real",
}

export default function Skills() {
    const [active, setActive] = useState("Frontend")
    const filtered = skills.filter(s => s.category === active)

    return (
        <section id="skills" className="relative py-14 overflow-hidden">
            <div className="section-divider" />
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="chapter-label"><Sword size={12} />Capítulo II</span>
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)' }}>
                        El{' '}
                        <span className="text-grad">Arsenal</span>
                    </h2>
                    <p className="mt-4 text-base" style={{ color: 'var(--text-muted)' }}>
                        Herramientas que fui adquiriendo en el camino
                    </p>
                </motion.div>

                {/* Category tabs */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                    {skillCategories.map((cat) => {
                        const isActive = active === cat
                        return (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-105"
                                style={{
                                    background: isActive ? 'var(--accent-sub)' : 'var(--bg-surface)',
                                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                                    color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                                    boxShadow: isActive ? '0 0 12px var(--accent-glow)' : 'none',
                                }}
                            >
                                {cat}
                                {cat === 'Experiencia' && (
                                    <span className="ml-1.5 text-[10px] opacity-70">★ Real</span>
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Category description */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={active}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3 }}
                        className="text-center text-sm mb-8"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {categoryDesc[active]}
                    </motion.p>
                </AnimatePresence>

                {/* Skills grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {filtered.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                    whileHover={{ y: -4, scale: 1.03 }}
                                    className="card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default"
                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)'}
                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
                                >
                                    <span className="text-3xl">{skill.icon}</span>
                                    <h3 className="font-semibold text-sm text-center" style={{ color: 'var(--text)' }}>
                                        {skill.name}
                                    </h3>

                                    {/* Barra de nivel */}
                                    <div className="w-full">
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                                                {skill.level < 50 ? 'Aprendiendo' : skill.level < 70 ? 'Intermedio' : 'Avanzado'}
                                            </span>
                                            <span className="text-[10px] font-bold" style={{ color: 'var(--accent)' }}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--accent-sub)' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: i * 0.07, ease: 'easeOut' }}
                                                className="h-full rounded-full"
                                                style={{ background: 'linear-gradient(to right, var(--accent), var(--accent-lt))' }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Nota honesta */}
                {active === 'Experiencia' && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 p-5 rounded-2xl text-center"
                        style={{ background: 'var(--accent-sub)', border: '1px solid var(--border)' }}
                    >
                        <p className="text-sm" style={{ color: 'var(--text-sec)' }}>
                            <span className="font-bold" style={{ color: 'var(--accent)' }}>💡 Dato importante:</span>{' '}
                            Estas habilidades vienen de 4 años en logística real — gestión de flotas, GPS, rutas de carga pesada.
                            Son el fundamento que me diferencia de otros desarrolladores junior.
                        </p>
                    </motion.div>
                )}
            </div>
            <div className="section-divider mt-14" />
        </section>
    )
}
