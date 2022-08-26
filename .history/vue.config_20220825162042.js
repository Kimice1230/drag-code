const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					javascriptEnabled: true,
				},
			},
		},
	},
	module: {
		test: /\.(js|mjs|jsx|ts|tsx)$/,
		include: paths.appSrc,
		loader: require.resolve("babel-loader"),
		options: {
			customize: require.resolve(
				"babel-preset-react-app/webpack-overrides"
			),

			plugins: [
				[
					require.resolve("babel-plugin-named-asset-import"),
					{
						loaderMap: {
							svg: {
								ReactComponent:
									"@svgr/webpack?-prettier,-svgo![path]",
							},
						},
					},
				],
				["import", { libraryName: "antd", style: true }],
			],
			// This is a feature of `babel-loader` for webpack (not Babel itself).
			// It enables caching results in ./node_modules/.cache/babel-loader/
			// directory for faster rebuilds.
			cacheDirectory: true,
			// Don't waste time on Gzipping the cache
			cacheCompression: false,
		},
	},
});
