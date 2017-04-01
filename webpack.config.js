let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    // 文件入口
    entry: {
        'main': path.resolve(__dirname, "./src/App.js") //_dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    },

    // 打包文件出口
    output: {
        path: path.resolve(__dirname, "./public"), //打包后文件存放位置
        filename: "[name]-[hash].js" //打包后文件名（'name'为entry定义的key值，本例为main）
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
                // exclude: /node_modules/,
                loader: 'babel-loader'//js转码器
            },
            {
                test: /\.css$/,
                // 添加对样式表的处理，感叹号的作用在于使同一文件能够使用不同类型的loader;
                // modules实现按模块记载css
                loader: 'style-loader!css-loader?modules!postcss-loader'
            }
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
            title: 'React-Demo', //页面标题元素，模板文件中通过title获取
            fileName: 'index.html', //输出的 HTML 文件名，默认是 index.html
            template: __dirname + "/index.tmpl.html" //模板文件，会根据此文件生成加入了引用打包文件的html文件
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
