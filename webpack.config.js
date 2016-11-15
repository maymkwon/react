var webpack = require('webpack'),
    path    = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path : DIST_DIR + "/app",
        filename : "bundle.js",
        publicPath : "/app/"
    },
    devServer:{
        inline:true,
        port:3333,
        historyApiFallback: true
    },
    module:{
        loaders :[
            {
                test : /\.js?/,
                include : SRC_DIR,
                loader : "babel",
                query:{
                    presets:[
                        "react",
                        "es2015",
                        "stage-2"
                    ]
                }

            },
            {
                test   : /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};

module.exports = config;
