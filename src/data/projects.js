export const projects = [
    // {
    //     id: 1,
    //     title: "E-commerce App",
    //     shortDescription: "Tienda en línea completa con carrito de compras",
    //     description: "Aplicación web de comercio electrónico con funcionalidades completas incluyendo gestión de productos, carrito de compras, pagos y panel de administración.",
    //     image: "/projects/ecommerce.jpg",
    //     technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    //     requirements: [
    //         "Autenticación de usuarios",
    //         "Catálogo de productos",
    //         "Carrito de compras",
    //         "Pasarela de pagos",
    //         "Panel de administración"
    //     ],
    //     duration: "3 meses",
    //     price: "$5000",
    //     demo: "https://demo-ecommerce.com",
    //     github: "https://github.com/tuusuario/ecommerce"
    // },
    {
        id: 2,
        title: "VetListo+ Client",
        shortDescription: "Aplicación web moderna para gestión veterinaria (Frontend)",
        description: `Panel de administración veterinaria construido con Next.js 14, con énfasis en la experiencia de usuario y diseño moderno. Sistema completamente responsive con modo oscuro/claro.`,
        image: "https://raw.githubusercontent.com/Anthonycs96/app_frontpet/refs/heads/main/assets/imagedashboard.png",
        technologies: [
            "Next.js 14",
            "TailwindCSS",
            "Framer Motion",
            "Context API",
            "JWT Auth",
            "Lucide Icons"
        ],
        features: [
            "Sistema de autenticación y autorización",
            "Tema oscuro/claro personalizable",
            "Animaciones fluidas con Framer Motion",
            "Dashboard interactivo multi-rol",
            "Gestión de perfil de usuario",
            "Sistema de notificaciones"
        ],
        //duration: "2 meses",
        type: "Proyecto Personal",
        estado: "En desarrollo",
        // demoUrl: "https://vetlisto-client.vercel.app",
        githubUrl: "https://github.com/Anthonycs96/app_frontpet"
    },
    {
        id: 3,
        title: "VetListo+ API",
        shortDescription: "API REST para sistema de gestión veterinaria (Backend)",
        description: `Backend robusto construido con Node.js y Express, implementando arquitectura modular y mejores prácticas de seguridad. Sistema completo de autenticación y autorización.`,
        image: "https://raw.githubusercontent.com/Anthonycs96/app_Backendpet/refs/heads/main/assets/image.png",
        technologies: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "Sequelize ORM",
            "JWT",
            "bcrypt"
        ],
        features: [
            "Arquitectura modular y escalable",
            "Sistema de roles y permisos",
            "Auditoría de cambios",
            "Gestión de citas y pacientes",
            "Sistema de fidelización",
            "Endpoints documentados"
        ],
        //duration: "2 meses",
        type: "Proyecto Personal",
        estado: "En desarrollo",
        // demoUrl: "https://api.vetlisto.com",
        githubUrl: "https://github.com/Anthonycs96/app_Backendpet"
    }
]