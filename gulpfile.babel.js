import gulp from "gulp";
import gutil from "gulp-util";
import eslint from "gulp-eslint";
import del from "del";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import WebpackDevServer from "webpack-dev-server";
import WebpackDevConfig from "./webpack.config.babel";
import clearConsole from "react-dev-utils/clearConsole";
import openBrowser from "react-dev-utils/openBrowser";
import { choosePort, createCompiler, prepareUrls } from "react-dev-utils/WebpackDevServerUtils";

gulp.task("default", ["dev"]);

gulp.task("dev", ["clean"], () => {
    const { host, port } = WebpackDevConfig.devServer;
    const urls = prepareUrls("http", host, port);
    const compiler = createCompiler(webpack, WebpackDevConfig, "kurtishardy.dev", urls, true);

    return new WebpackDevServer(compiler, WebpackDevConfig.devServer)
        .listen(port, host, (err) => {
            if (err)
                throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", `http://${host}:${port}`);

            const isInteractive = process.stdout.isTTY;
            if (isInteractive) {
                clearConsole();
            }
            console.log("Starting the development server...\n");
            openBrowser(urls.localUrlForBrowser);

        });
});

gulp.task("clean", () => del("dist/*"));

gulp.task("lint", () =>
    gulp.src(["src/**/*.js", "src/**/*.jsx"])
        .pipe(eslint(".eslintrc"))
        .pipe(eslint.failAfterError())
);

const build = config =>
    gulp.src("./src/Boot/index.jsx")
        .pipe(webpackStream(config, webpack))
        .on("error", (e) => {
            gutil.log(e);
            process.exit(1);
        })
        .pipe(gulp.dest("./dist/"));

gulp.task("build", ["clean"], () => build(WebpackDevConfig.build));

gulp.task("build:stats", ["clean"], () => build(WebpackDevConfig.buildWithStats));
