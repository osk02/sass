module.exports = {
    // define entry point
    entry: [
        './assets/js/index.js',
        './assets/sass/index.scss',
    ],

    // define output point
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
            ]}
        ]
    }
};