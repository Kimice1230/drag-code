module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "lib",
        style: "css",
      },
    ],
  ],
}

作者：Cyborg赛博格
链接：https://juejin.cn/post/7071819263962513415
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}
