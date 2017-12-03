import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CaseSensitivePathsPlugin from"case-sensitive-paths-webpack-plugin";
import StyleLintPlugin from "stylelint-webpack-plugin";
import { extractSassPlugin } from "./configs/modules";
import rules from "./configs/modules";

export default {
    entry: [
        "babel-polyfill",
        "index",
    ],
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".js", ".jsx"],
    },
    devServer: {
        noInfo: true,
        hot: true,
        inline: true,
        port: 9876,
        host: "127.0.0.1",
        disableHostCheck: true,
        compress: true,
        overlay: false,
        historyApiFallback: {
            disableDotRule: true,
        },
        watchOptions: {
            ignored: /node_modules/,
        },
        stats: {
            colors: true,
            chunks: false,
            modules: true,
            assets: false,
            errors: false,
            children: false,
            moduleTrace: false,
        },
    },
    module: {
        rules: [...rules]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
            },
        }),
        new StyleLintPlugin({
            configFile: ".stylelintrc",
            failOnError: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "body"
        }),
        extractSassPlugin,
        // Add module names to factory functions so they appear in browser profiler.
        new webpack.NamedModulesPlugin(),
        // Watcher doesn"t work well if you mistype casing in a path so we use
        // a plugin that prints an error when you attempt to do this.
        // See https://github.com/facebookincubator/create-react-app/issues/240
        new CaseSensitivePathsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
