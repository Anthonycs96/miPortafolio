/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Asegúrate de cambiar 'mi-portafolio' por el nombre de tu repositorio
    basePath: '/mi-portafolio',
    assetPrefix: '/mi-portafolio/',
}

module.exports = nextConfig