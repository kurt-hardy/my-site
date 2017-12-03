import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export const extractSassPlugin = new ExtractTextPlugin({
    filename: "[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

export default [
    {
        test: /\.jsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
            configFile: path.join(process.cwd(), ".eslintrc"),
            failOnError: false,
            emitWarning: true,
            failOnWarning: false,
        },
    },
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ["env", "react", "stage-2"],
            plugins: ["transform-class-properties"]
        },
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSassPlugin.extract({

            fallback: "style-loader",
            use: [
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        minimize: true,
                        sourceMap: true,
                        importLoaders: 1,
                        localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
                    },
                },
                {
                    loader: "sass-loader",
                    options: {
                        includePaths: [path.join(process.cwd(), "src", "Styles")],
                    },
                }
            ],
        })
    },
    {
        test: /\.jpg/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
            name: "[hash].[ext]",
        },
    },
    {
        test: /\.png/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
            name: "[hash].[ext]",
        },
    },
];