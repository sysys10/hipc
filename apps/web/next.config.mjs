/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['@packages/ui'],
  images: {
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
  }
}
export default nextConfig
