'use strict';

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');//生成html
let ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

//常用路径
const ROOT_PATH = path.resolve(__dirname, '../');
const APP_PATH = path.resolve(ROOT_PATH, './src');
const ASSETS_PATH = path.resolve(ROOT_PATH, './static/dist');

const config = require('../src/config');

module.exports = {

  devtool: 'eval-source-map',
  context: ROOT_PATH,

  // 文件入口
  entry: {
    main: [
      // 'webpack-hot-middleware/client',
      path.resolve(APP_PATH, './App.js'), //_dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    ],
  },

  // 打包文件出口
  output: {
    path: ASSETS_PATH, //打包后文件存放位置
    filename: '[name]-[hash].js', //打包后文件名（'name'为entry定义的key值，本例为main）
    chunkFilename: '[name].[chunkhash:5].min.js',
    // publicPath: 'http://' + config.host + ':' + (config.port + 1) + '/dist/'//编译好的文件，在服务器的路径,这是静态资源引用路径
  },

  // 模块
  module: {
    // 各种加载器（转换器）
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/, //一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
        exclude: /node_modules/,//手动添加必须处理的文件（文件夹）(include) 或屏蔽不需要处理的文件（文件夹）(exclude)（可选）
        loader: 'babel-loader',//loader的名称（babel为js解码器）（必须）
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
          publicPath: '../',
        }),
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=10240&name=images/[hash:8].[name].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader?limit=10240&name=images/[hash:8].[name].[ext]',
      },
    ],
  },

  // 解决方案
  resolve: {

    // 路径别名，可以在此定义相关路径，在组件使用的时候就可以不必写入相对路径
    alias: {
      component: path.resolve(__dirname, '../src/component/'),
    },

    // 省略扩展名, 加载组建市，如果没有文件后缀，自动补全一下后缀进行路径查找
    extensions: ['.css', '.json', '.js', '.jsx'],

    modules: [
      path.resolve(__dirname, 'node_modules'), // 指定当前目录下的 node_modules 优先查找
      'node_modules', // 如果有一些类库是放在一些奇怪的地方，可以添加自定义的路劲或目录
    ],

  },

  // 插件
  plugins: [
    new webpack.BannerPlugin('Welcome to Peter\'s code.'), //添加版权声明
    new HtmlWebpackPlugin({
      title: 'ReactDemo', //文件标题
      fileName: 'index.html', //文件名称，默认index.html
      template: path.resolve(__dirname, '../index.tmpl.html'), //模板文件，会根据此文件生成加入了引用打包文件的html文件
      hash: true,
    }), //依据一个简单的模板，生成最终的html5文件，这个文件中自动引用了你打包后的JS文件。每次编译都在文件中插入一个不同的嘻哈值。
    new ExtractTextPlugin({
      filename: 'css/[name]-[hash].css', //避免缓存问题，加入hash值
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(), //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并未它们分配最小的ID
    new webpack.optimize.UglifyJsPlugin(), //压缩JS代码
    new webpack.HotModuleReplacementPlugin(), //热加载插件
  ],

  // 开发服务器（webpack-dev-server）
  devServer: {
    historyApiFallback: true, //依赖于HTML5 history API，设置为true，所有的跳转将指向
    // contentBase: './public', //本地服务器所加载的页面所在的目录 ？？
    // port: 8080, //监听端口，默认为8080，省略后如果8080被占用，会替换别的端口，控制台会打印
    inline: true, //当源文件改变时会自动刷新页面
    hot: true, //允许在修改组件代码后，自动刷新实时预览修改后的结果
  },

};
