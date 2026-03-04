export const projects = [
    {
        id: 1,
        title: "Sistema de Eventos",
        shortDescription: "Plataforma full-stack de gestión de eventos con tiempo real y WhatsApp",
        description: `Aplicación completa para gestionar eventos con actualizaciones en tiempo real vía WebSockets. El backend incluye integración con WhatsApp Web.js para enviar notificaciones e invitaciones directamente por WhatsApp. Exportación a Excel, integración con Google Maps y efectos de confetti para celebraciones.`,
        image: "https://opengraph.githubassets.com/1/Anthonycs96/frontend-eventos",
        technologies: [
            "Next.js 15",
            "Node.js",
            "Express",
            "Socket.io",
            "PostgreSQL",
            "Supabase",
            "WhatsApp Web.js",
            "Google Maps",
            "XLSX",
            "JWT"
        ],
        features: [
            "Tiempo real con WebSockets (Socket.io)",
            "Notificaciones vía WhatsApp automáticas",
            "Integración con Google Maps",
            "Exportación de datos a Excel",
            "Autenticación JWT con roles",
            "Generación de QR para eventos"
        ],
        type: "Proyecto Personal",
        estado: "En desarrollo",
        githubUrl: "https://github.com/Anthonycs96/frontend-eventos"
    },
    {
        id: 2,
        title: "VetListo+ — Frontend",
        shortDescription: "Panel de administración veterinaria moderno (Next.js + Tailwind)",
        description: `Frontend de un sistema de gestión para clínicas veterinarias. Dashboard interactivo multi-rol con autenticación JWT, gestión de citas, pacientes (mascotas) y perfiles. Diseño completamente responsive con modo oscuro/claro. Construido con Radix UI para accesibilidad y Framer Motion para animaciones.`,
        image: "https://raw.githubusercontent.com/Anthonycs96/app_frontpet/refs/heads/main/assets/imagedashboard.png",
        technologies: [
            "Next.js 15",
            "React 19",
            "Tailwind CSS v4",
            "Framer Motion",
            "Radix UI",
            "JWT",
            "Axios",
            "Zod"
        ],
        features: [
            "Dashboard multi-rol (admin, vet, recepción)",
            "Gestión de citas y pacientes",
            "Sistema de notificaciones",
            "Soporte móvil con Capacitor",
            "Autenticación con JWT",
            "Validación de formularios con Zod"
        ],
        type: "Proyecto Personal",
        estado: "En desarrollo",
        githubUrl: "https://github.com/Anthonycs96/app_frontpet"
    },
    {
        id: 3,
        title: "VetListo+ — Backend",
        shortDescription: "API REST segura para sistema veterinario (Node.js + MySQL)",
        description: `Backend REST completo para VetListo+. Arquitectura modular con Express, seguridad con Helmet, rate limiting, logging con Morgan y cobertura de tests con Jest. Autenticación con JWT + bcrypt y ORM Sequelize sobre MySQL.`,
        image: "https://opengraph.githubassets.com/1/Anthonycs96/app_Backendpet",
        technologies: [
            "Node.js",
            "Express",
            "MySQL",
            "Sequelize ORM",
            "JWT",
            "bcrypt",
            "Jest",
            "Helmet"
        ],
        features: [
            "Arquitectura modular y escalable",
            "Rate limiting y seguridad Helmet",
            "Tests con Jest + Supertest",
            "Sistema de roles y permisos",
            "Logging con Morgan",
            "Validación de inputs"
        ],
        type: "Proyecto Personal",
        estado: "En desarrollo",
        githubUrl: "https://github.com/Anthonycs96/app_Backendpet"
    },
    {
        id: 4,
        title: "TransportApp Web",
        shortDescription: "App de gestión de transporte y flotas (Next.js + FullCalendar)",
        description: `Aplicación web para gestión de transporte inspirada en mi experiencia como supervisor de flotas. Integra FullCalendar para visualización de rutas y horarios, Socket.io para actualizaciones en tiempo real, NextAuth para autenticación y manejo de archivos Excel (XLSX). Combina mi background en logística con lo que estoy aprendiendo en desarrollo.`,
        image: "https://opengraph.githubassets.com/1/Anthonycs96/transportapp-web",
        technologies: [
            "Next.js 15",
            "NextAuth",
            "FullCalendar",
            "Socket.io",
            "Tailwind CSS v4",
            "React Hook Form",
            "Zod",
            "XLSX"
        ],
        features: [
            "Calendario de rutas con FullCalendar",
            "Actualizaciones en tiempo real",
            "Autenticación con NextAuth",
            "Importación/exportación Excel",
            "Validación con Zod",
            "Inspirado en logística real"
        ],
        type: "Proyecto Personal",
        estado: "En desarrollo",
        githubUrl: "https://github.com/Anthonycs96/transportapp-web"
    },
    {
        id: 5,
        title: "CICSA App",
        shortDescription: "Sistema web para empresa CICSA — proyecto académico/laboral",
        description: `Aplicación full-stack desarrollada para CICSA, la empresa donde trabajo actualmente como Auxiliar de Liquidaciones. Backend con Node.js, Express y MySQL. Usa Husky y lint-staged para mantener calidad de código con hooks de Git. Incluye documentación en PDF y presentación del proyecto.`,
        image: "https://opengraph.githubassets.com/1/Anthonycs96/CICSA",
        technologies: [
            "Node.js",
            "Express",
            "MySQL",
            "Sequelize",
            "JWT",
            "Helmet",
            "Husky",
            "ESLint"
        ],
        features: [
            "Sistema para empresa real (CICSA)",
            "Autenticación y roles",
            "Calidad de código con Husky + lint-staged",
            "Base de datos MySQL",
            "Seguridad con Helmet + Joi",
            "Documentación incluida"
        ],
        type: "Proyecto Académico",
        estado: "Completado",
        githubUrl: "https://github.com/Anthonycs96/CICSA"
    }
]
