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
		rules: [
			{
				test: /\.less$/i,
				loader: [
					// compiles Less to CSS
					"style-loader",
					"css-loader",
					"less-loader",
				],
			},
		],
	},
});
