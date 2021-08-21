const path = require("path")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            title: 'Development',
        }),
    ],
    output: {
        filename : 'main.js',
        path : path.resolve(__dirname,'dist'),
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader','css-loader','sass-loader'],
            },
        ],
    },
    performance: {
        hints:false,
    },
};