const path = require('path');
// module.exports = {
//     // 1. 打包的时候是否包含map映射文件
//     productionSourceMap: false,
//     // 2.输出的文件夹配置
//     outputDir: './myDist',
//     // 3.设置所有的资源放在同一个目录中
//     assetsDir: "assets",
//     // 4.设置路径
//     publicPath: '/',
//     //publicPath : process.env.NODE_ENV !== 'production' ? "http://www.baidu.com" : "/",
//     // 5.在vue中 @代表了src    配置_v  代表views文件夹
//     chainWebpack: config => {
//         config.resolve.alias.set("_v", path.resolve(__dirname, "src/views"))
//     },
// }

const webpack = require('webpack')
module.exports = {
    devServer: {
        proxy: "http://localhost:3000/"
    },
    // chainWebpack: config => {
    //     config.module
    //         .rule("html")
    //         .test(/\.html$/)
    //         .use("html-loader")
    //         .loader("html-loader");
    // 

}