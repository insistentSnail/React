// 1 配置ant css 按需引入具体的修改规则
 const { override, fixBabelImports,addLessLoader  } = require('customize-cra');
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
    //  自定义主题色 需要写在lessOptions里，另外 less-loader版本不能过高
     lessOptions:{
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
     }
    }),
 );