module.exports = {
  reactStrictMode: true,
  env: {
    YOUTUBE_API_SECRET: 'AIzaSyDOdyTilZkCtA9M-rvzCpI76FpDmMFzeLo',
    EMAILJS_API_USER: 'user_frb365CzjooTXckt7YGmh',
    EMAILJS_API_TEMPLATE: 'template_s1ellw7',
    EMAILJS_API_SERVICE: 'service_qqkyqp5',
  },
  async redirects() {
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
