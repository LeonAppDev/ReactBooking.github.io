var webpack = require('webpack');
var path    = require('path');
var APP_DIR = path.resolve(__dirname, './PersonalWebsite/PersonalWebsite/src'); // thsi is the path for application

module.exports = {
    devtool: 'inline-source-map', // This will show line numbers where errors are accured in the terminal
    devServer: {
        historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
        contentBase: path.join(__dirname,'/PersonalWebsite/PersonalWebsite/wwwroot/')
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/', // Specify the local server port
        'webpack/hot/only-dev-server', // Enable hot reloading
         APP_DIR + '/index.jsx' // This is where Webpack will be looking for the entry index.js file
    ],
    output: {
        path: path.join(__dirname, './PersonalWebsite/PersonalWebsite/wwwroot'), // This is used to specify folder for producion bundle. Will not be used here, but it's a good practice to have it
        filename: 'bundle.js' // Filename for production bundle
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'], // Folders where Webpack is going to look for files to bundle together
        extensions: ['', '.js','.jsx'] // Extensions that Webpack is going to expect
    },
    module: {
        // Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps.
        loaders: [
            {
                test: /\.jsx?$/, // Here we're going to use JS for react components but including JSX in case this extension is prefered
                exclude: /node_modules/, // Speaks for itself
               loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'], // Modules that help with hot reloading and ES6 transcription
            }
        ],
        rules:[
        {test:/\.(js)$/,use:'babel-loader'},
        {test:/\.css$/,use:['style-loader','css-loader']}

    ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Hot reloading
        new webpack.NoErrorsPlugin() // Webpack will let you know if there are any errors
    ]
}
