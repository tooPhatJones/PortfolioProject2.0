const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        // new CopyPlugin([
        //     {
        //       from: './_redirects',
        //       to: 'dist/_redirects'
        //     }
        //   ]),
       // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'PortfolioServer',
            template: require('html-webpack-template'),
            inject: true,
            appMountId: 'root',
            favicon: "src/images/gif.gif"
        })
    ],
    optimization: {
        minimize: false
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
               
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};