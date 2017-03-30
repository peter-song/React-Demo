let webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        'fileName': __dirname + "/src/App.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
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
        new webpack.BannerPlugin("Welcome to Peter's home.")//添加版权声明
    ],

};
