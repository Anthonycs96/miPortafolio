import { Map } from 'lucide-react'

const links = [
    { name: 'La Historia', href: '#about' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'Conquistas', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
]

const socials = [
    {
        name: 'GitHub',
        href: 'https://github.com/Anthonycs96',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/anthony-carhuayalle/',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer className="relative overflow-hidden mt-8"
            style={{
                background: 'var(--bg-surface)',
                borderTop: '1px solid var(--border)',
            }}>

            {/* Barra de acento superior */}
            <div className="h-[2px]"
                style={{ background: 'linear-gradient(to right, transparent, var(--accent), var(--accent-lt), var(--accent), transparent)' }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Marca */}
                    <div className="flex items-center gap-2">
                        <Map size={18} style={{ color: 'var(--accent)' }} />
                        <div>
                            <p className="font-bold text-lg text-grad">Anthony Carhuayalle</p>
                            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                De la logística al código · Estudiante de Ing. en Software
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        {links.map((link) => (
                            <a key={link.name} href={link.href}
                                className="text-sm transition-colors duration-200"
                                style={{ color: 'var(--text-muted)' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Redes */}
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                                title={s.name}
                                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                                style={{
                                    background: 'var(--accent-sub)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-muted)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--accent)'
                                    e.currentTarget.style.borderColor = 'var(--accent)'
                                    e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--text-muted)'
                                    e.currentTarget.style.borderColor = 'var(--border)'
                                    e.currentTarget.style.boxShadow = ''
                                }}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
                    style={{ borderTop: '1px solid var(--border)' }}>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} Anthony Carhuayalle · Lima, Perú
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        Construido con Next.js · Tailwind · Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    )
}
