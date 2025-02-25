/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['@packages/ui'],
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF 우선 사용
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jqgpbrgixpusvdqreynb.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'docs.material-tailwind.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  experimental: {
    serverActions: true
  },
  headers: async () => [
    {
      source: '/api/auth/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store, max-age=0'
        }
      ]
    }
  ]
}
export default nextConfig
