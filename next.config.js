module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/api/:path*',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/_error',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}
