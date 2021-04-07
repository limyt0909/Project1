const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://3.36.115.7/',
      changeOrigin: true,
    }),
  );
};
