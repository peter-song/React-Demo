let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');//生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

//常用路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, './src');
const BUILD_PATH = path.resolve(ROOT_PATH, './public');

module.exports = {
    devtool: 'eval-source-map',

    // 文件入口
    entry: {
        main: path.resolve(APP_PATH, "./App.js") //_dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    },

    // 打包文件出口
    output: {
        // publicPath: "/dist/", //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: BUILD_PATH, //打包后文件存放位置
        filename: "[name].js", //打包后文件名（'name'为entry定义的key值，本例为main）
        chunkFilename: '[name].[chunkhash:5].min.js',
    },

    // 模块
    module: {
        // 各种加载器
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'//js转码器
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules', 'postcss-loader'],
                    publicPath: "../"
                })
            },
        ],
    },

    // 解决方案
    resolve: {
        extensions: ['.css', '.json', '.js', '.jsx'], //省略扩展名
    },

    // 插件
    plugins: [
        //添加版权声明
        new webpack.BannerPlugin("Welcome to Peter's home."),
        //依据模板，生成最终的html5文件
        new HtmlWebpackPlugin({
            title: 'ReactDemo', //w文件标题
            //fileName: 'index.html', //文件名称，默认index.html
            template: __dirname + "/index.tmpl.html", //模板文件，会根据此文件生成加入了引用打包文件的html文件
            hash: true
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
            disable: false,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],

    // 开发服务器（webpack-dev-server）
    devServer: {
        historyApiFallback: true,
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        //port: 8080, //监听端口，默认为8080，省略后如果8080被占用，会替换别的端口，控制台会打印
        inline: true, //实时刷新,
        hot: true
    }

};
