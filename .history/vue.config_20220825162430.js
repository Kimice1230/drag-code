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

			
});
