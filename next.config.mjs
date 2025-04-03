/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['scontent.flim23-1.fna.fbcdn.net'],
        unoptimized: true,
    },
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/mi-portafolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/mi-portafolio/' : '',
};

export default nextConfig;
