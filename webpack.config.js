
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	plugins: [
		new ExtractTextPlugin("styles.css")
	],
	entry : {
		main : "./main.js"
	},
	output : {
//	path : "./dits/js",
		filename : "[name]-bundle.js"
	},
	module : {
		loaders : [
//			{
//				test : /\.css$/,
//				loader : "style!css"
//			},
//			{
//				test : /\.less$/,
//				loader : "style!css!less"
//			},
//			{ 
//	      		test: /\.(css|less)$/,
//	      		loader: etp.extract("css!less") 
//	      	},
//	      	{ 
//	      		test: /\.(jpg|png)$/,
//	      		loader: "url-loader?limit=8192" 
//	      	}
			{   test: /\.(css|less)$/, 
				loader: ExtractTextPlugin.extract("css!less") 
			}
			
		]
	},
	//resolve.extensions指明程序自动补全识别哪些后缀,
	//注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
	resolve : {
		extensions : ["",".js"],//后缀
	}
	
}





