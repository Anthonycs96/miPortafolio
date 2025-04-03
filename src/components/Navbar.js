"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { Home, Folder, Star, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("#about");
    const [showMore, setShowMore] = useState(false);

    //console.log("Rol en navbar:", rol);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showMore && !event.target.closest(".mobile-nav-container")) {
                setShowMore(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [showMore]);

    //CLIENTE
    const miQuickAccessLinks = [
        { name: "Sobre mí!!", href: "#about", icon: Home },
        { name: "Proyectos", href: "#projects", icon: Folder },
        { name: "Habilidades", href: "#skills", icon: Star },
        { name: "Contacto", href: "#contact", icon: Mail },
    ];

    return (
        <>
            <nav className="bg-[var(--background)] shadow-lg fixed w-full z-50 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link href="/" className="flex-shrink-0 flex items-center">
                                Mi Portfolio
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#about" className="hover:text-indigo-600">Sobre mí</Link>
                            <Link href="#projects" className="hover:text-indigo-600">Proyectos</Link>
                            <Link href="#skills" className="hover:text-indigo-600">Habilidades</Link>
                            <Link href="#contact" className="hover:text-indigo-600">Contacto</Link>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                <span className="sr-only">Abrir menu</span>
                                {isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600">Sobre mí</Link>
                            <Link href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600">Proyectos</Link>
                            <Link href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600">Habilidades</Link>
                            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600">Contacto</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Navigation - WhatsApp Style */}
            <div className="max-sm:block sm:hidden fixed left-1/2 -translate-x-1/2 bottom-4 z-50 mobile-nav-container">
                <div className="flex items-center gap-4 bg-[var(--background-secondary)] text-[var(--foreground)] backdrop-blur-xl shadow-sm rounded-xl px-3 py-2">
                    {miQuickAccessLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                                setActiveLink(link.name);
                                if (link.onClick) link.onClick();
                            }}
                            className={`flex flex-col items-center p-2 rounded-xl transition-all group w-13 h-13 ${activeLink === link.name
                                ? "bg-[var(--button-hover)] text-[var(--navbar-cuarto-text)]"
                                : "text-[var(--navbar-cuarto-text)]"
                                } hover:text-[var(--navbar-cuarto-text)]`}
                        >
                            <link.icon size={20} />
                            <span className="text-xs mt-1">{link.name}</span>
                        </Link>
                    ))}

                </div>

            </div>

        </>
    )
}

export default Navbar