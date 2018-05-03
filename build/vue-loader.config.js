// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true, //处理vue文件中template中的空格
    extractCSS: !isDev,  //将vue文件中的CSS样式单独打包到一个文件中去
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false, 根据环境自动生成
    // loaders:{
    //   'docs': docsLoader
    // },
    // preLoader:{ //在使用指定的loader解析之前用这个解析
    // },
    // postLoader:{  //使用指定的loader解析完之后再用这个解析
    // }
  }
}
