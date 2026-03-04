"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Folder, Star, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
    { name: "La Historia", href: "#about", icon: Home },
    { name: "Proyectos",   href: "#projects", icon: Folder },
    { name: "Habilidades", href: "#skills", icon: Star },
    { name: "Contacto",    href: "#contact", icon: Mail },
]

export default function Navbar() {
    const [active, setActive] = useState("#about")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            {/* ── Desktop ── */}
            <nav className="fixed w-full z-50 hidden md:block transition-all duration-300"
                style={{
                    background: scrolled ? 'var(--card-bg)' : 'transparent',
                    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                    boxShadow: scrolled ? 'var(--card-shadow)' : 'none',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/" className="font-bold text-base" style={{ color: 'var(--text)' }}>
                            anthony<span style={{ color: 'var(--accent)' }}>.dev</span>
                        </Link>

                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href}
                                    onClick={() => setActive(link.href)}
                                    className="relative py-1 text-sm transition-colors duration-200"
                                    style={{ color: active === link.href ? 'var(--text)' : 'var(--text-muted)', fontWeight: active === link.href ? 600 : 400 }}>
                                    {link.name}
                                    {active === link.href && (
                                        <motion.span layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                                            style={{ background: 'var(--accent)' }} />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Mobile bottom bar ── */}
            <div className="max-sm:block sm:hidden fixed left-1/2 -translate-x-1/2 bottom-4 z-50">
                <div className="flex items-center gap-1 px-2 py-2 rounded-2xl"
                    style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    }}>
                    {navLinks.map((link) => {
                        const isActive = active === link.href
                        return (
                            <Link key={link.name} href={link.href}
                                onClick={() => setActive(link.href)}
                                className="relative flex flex-col items-center p-2 rounded-xl w-14 h-14 justify-center transition-all">
                                {isActive && (
                                    <motion.div layoutId="mob-pill"
                                        className="absolute inset-0 rounded-xl"
                                        style={{ background: 'var(--accent-sub)' }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                                )}
                                <motion.div animate={{ scale: isActive ? 1.1 : 1 }}
                                    transition={{ type: 'spring', stiffness: 500 }}
                                    className="relative z-10 flex flex-col items-center gap-0.5">
                                    <link.icon size={18} style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }} />
                                    <span className="text-[9px]" style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)', fontWeight: isActive ? 600 : 400 }}>
                                        {link.name.split(' ')[0]}
                                    </span>
                                </motion.div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
