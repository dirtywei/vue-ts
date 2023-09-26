module.exports = {
  plugins: {
    // autoprefixer: {
    //   overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%'],
    //   grid: true
    // },
    'postcss-preset-env': {}, //允许开发者使用最新的 CSS 语法而不用担心浏览器兼容
    'postcss-px-to-viewport-8-plugin': {
      //配合 postcss 8.X版本
      unitToConvert: 'px',
      viewportWidth: 750, // (Number)  视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 3,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/(\/|\\)(node_modules)(\/|\\)/],
      include: [], // 例如：只转换 'src/mobile' 下的文件，/\/src\/mobile\//
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw',
      landscapeWidth: 1334 // 横屏时使用的视口宽度 568 1334 1434
    }
  }
}
