const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const $ = require("jquery");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(scss|sass)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/,
                loader: "file-loader",
                options: {
                    name: "./assets/images/[name].[ext]",
                },
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                loader: "file-loader",
                options: {
                    name: "./assets/fonts/[name].[ext]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: [/node_modules/],
                use: ["babel-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? "style.css" : "style.[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
};
