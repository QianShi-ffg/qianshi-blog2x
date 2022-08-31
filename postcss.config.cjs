module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
    // "postcss-px-to-viewport-8-plugin": {
    //   viewportWidth: 1920, // 设计稿宽度
    //   viewportHeight: 1080, // 设计稿宽度
    //   unitPrecision: 5, // px转换后的小数保留位数，有时候不能整除
    //   mediaQuery: false, // 允许在媒体查询中转换，默认为false
    //   unitToConvert: 'px', // 需要转换的单位，默认为"px"
    //   propList: ['*'], // 能转化为vw的属性列表
    //   viewportUnit: 'vw', // 希望使用的视口单位
    //   fontViewportUnit: 'vw', // 字体使用的视口单位
    //   selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
    //   minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
    //   replace: true, //  是否直接更换属性值，而不添加备用属性
    //   exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    //   include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
    //   landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    //   landscapeUnit: 'vw', // 横屏时使用的单位
    //   landscapeWidth: 1920 // 横屏时使用的视口宽度
    // },
  }
}
