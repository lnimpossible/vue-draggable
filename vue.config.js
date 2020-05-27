module.exports = {
  // outputDir:
  //   process.env.VUE_APP_TITLE === "production"
  //     ? "dist_production"
  //     : process.env.VUE_APP_TITLE === "alpha"
  //     ? "dist_alpha"
  //     : "dist_develop",
  // publicPath: process.env.NODE_ENV === "develop" ? "/appraisal" : "/",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "优佳数据大数据分析平台";
      return args;
    });
  },
  devServer: {
    disableHostCheck: true, // 跳过检查
    host: "0.0.0.0",
    proxy: {
      "/api/": {
        // target: "http://192.168.1.69:31380/yougu-app-admin", // develop
        target: "http://192.168.1.184:18088", // develop
        // target: "http://bank.vipgz2.idcfengye.com/yougu-app-admin", // 测试
        // target: "http://192.168.8.24:18088", // 顾磊
        // target: "http://192.168.8.16:18088", // 李杰
        // target: "http://192.168.1.195:18088", // 李新飘
        // target: "http://192.168.8.86:18088", // 姚志鹏
        // target: "http://192.168.1.189:18088", //于盼盼
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api/": "/" }
      }
    }
  }
};
