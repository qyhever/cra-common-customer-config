const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://qyhever.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
