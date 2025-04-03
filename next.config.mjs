/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['scontent.flim23-1.fna.fbcdn.net'],
    },
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
