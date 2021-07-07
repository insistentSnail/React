const proxy = require("http-proxy-middleware")

module.exports = function(app){
  app.use(
    proxy('/api1',{
      target:"http://localhost:5000",
      changeOrigin:true,//控制服务器收到的请求头中host的值 为target地址 骗一下服务器
      pathRewrite:{"^/api1":""}
    }),
    proxy('/api2',{
      target:"http://localhost:5001",
      changeOrigin:true,
      pathRewrite:{"^/api2":""}
    })
  )
}