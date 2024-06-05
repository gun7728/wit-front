/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  rewrites: async () => ([
    {
      source: '/api/:path*',
      destination:
        process.env.NODE_ENV === 'development'
          ? 'http://127.0.0.1:5328/:path*'
          : '/api/',
    }, {
      source: '/tourApi/:path*',
      destination: 'https://apis.data.go.kr/B551011/KorService1/:path*',
    }]),
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ];
  },

  compiler: {
    styledComponents: true,
  },

};

export default nextConfig;