var webpack=require("webpack");
var OpenBrowserPlugin=require("open-browser-webpack-plugin");

module.exports={
	entry:__dirname+"/app/main.js",
	output:{
		path:__dirname+"/public",
		filename:"bundle.js",
		publicPath:"/"
	},
	module:{
		loaders:[
			{
				test:/\.json$/,
				loader:"json"
			},
			{
				test:/\.css$/,
				loader:"style!css!postcss"
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel",
			},
			{
				test:/\.(png|jpg|woff|woff2|eot|svg|ttf)$/,
				loader:"url-loader?limit=8192"
			}
		]
	},
	postcss:[
		require("autoprefixer")
	],
	plugins:[
		new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({
			url:'http://localhost:8080'
		})
	]
	// ,
	// devServer:{
	// 	contentBase:"./public",
	// 	colors:true,
	// 	histtoryApiFallback:true,
	// 	inline:true,
	// 	hot:true
	// }
	
}