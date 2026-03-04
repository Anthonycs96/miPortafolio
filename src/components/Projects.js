"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import ProjectCard from './ProjectCard'
import DetailModal from './DetailModal'
import { projects } from '../data/projects'

export default function Projects() {
    const [selected, setSelected] = useState(null)

    return (
        <section id="projects" className="relative py-14 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <span className="chapter-label"><Trophy size={12} />Capítulo III</span>
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)' }}>
                        Las{' '}
                        <span className="text-grad">Conquistas</span>
                    </h2>
                    <p className="mt-4 text-base" style={{ color: 'var(--text-muted)' }}>
                        Proyectos construidos en el camino — cada uno, una batalla ganada
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <ProjectCard project={project} onClick={setSelected} />
                        </motion.div>
                    ))}
                </div>

                {/* Nota de estado */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 text-center"
                >
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        🔨 Más proyectos en construcción mientras avanzo en la jornada...
                    </p>
                </motion.div>

                {selected && <DetailModal project={selected} onClose={() => setSelected(null)} />}
            </div>
            <div className="section-divider mt-14" />
        </section>
    )
}
