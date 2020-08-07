const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            './src/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname,'bundle'),
        filename: "src/js/app.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name].[ext][query]',
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/asset/fonts/',
                            publicPath: '../asset/fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
            meta: {
                viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
            },
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'app.bundle.css'
        })
    ],
    resolve: {
        alias: {
            Fonts: path.resolve(__dirname,'src/asset/fonts'),
            Img: path.resolve(__dirname,'src/asset/img'),
            Components: path.resolve(__dirname,'src/components'),
            vue$: 'vue/dist/vue.runtime.esm.js'
        }
    }
}
