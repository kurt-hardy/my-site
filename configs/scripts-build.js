import path from "path";
import { exclude } from "./constants";

export default [
    {
        test: /\.jsx?$/,
        enforce: "pre",
        exclude,
        loader: "eslint-loader",
        options: {
            configFile: path.join(process.cwd(), ".eslintrc"),
            failOnError: true,
            emitWarning: true,
            failOnWarning: false,
            ...formatter,
        },
    },
    {
        test: /\.jsx?$/,
        exclude,
        loader: "babel-loader",
        options: {
            presets: ["es2015", "react", "stage-2"],
            plugins: ["transform-class-properties"]
        },
    },
];
