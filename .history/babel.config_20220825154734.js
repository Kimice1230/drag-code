module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],plugins: [
    [
      "import",
      {
        libraryName: "antde",
        libraryDirectory: "lib",
        style: "css",
      },
    ],
  ],
}
