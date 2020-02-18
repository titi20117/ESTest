const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        //polyfill: "babel-polyfill",
        app: "./app/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
};