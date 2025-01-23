const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: '/syllabus',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dataservicedesign.github.io/syllabus',
        port: '',
        pathname: '/',
        search: '',
      },
    ],
  },
};
