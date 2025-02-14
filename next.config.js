const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'standalone',
  basePath: '/syllabus',
  trailingSlash: true,
};
