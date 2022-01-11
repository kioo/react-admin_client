const CracoLessPlugin = require('craco-less');
module.exports = {
  devServer: {
    // host: 'localhost', //ip地址
    // hot: true, //热加载
    // port: 3000, //端口
    // https: false, //false关闭https，true为开启
    // open: true, //自动打开浏览器
    proxy: {
      '/app': {
        target: 'http://localhost:8080',
        // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api/xxx即可
        //   '^/api': '/'
        // }
      },
    }
 },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};