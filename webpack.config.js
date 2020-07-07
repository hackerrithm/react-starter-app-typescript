const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const dotenv = require('dotenv').config();

module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            // filename: "./index.html"
        }),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'static' // can modify `static` to another name or get it from `process`
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        // Port
        port: 5000,
        host: 'localhost',
        // Automatically open page
        open: true,
        // Serves index.html (contains 404 page in react-router) in place of any 404 responses
        historyApiFallback: true,
        // Shows a full-screen overlay when there are compiler errors
        overlay: true,
    }
};