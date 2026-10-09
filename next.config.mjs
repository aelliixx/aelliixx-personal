/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.akamai.steamstatic.com',
                port: '',
                pathname: '/steam/apps/**',
            }
        ]
    }
};

export default nextConfig;
