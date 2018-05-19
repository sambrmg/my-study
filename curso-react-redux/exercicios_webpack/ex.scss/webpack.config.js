const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
      },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { 
                        presets: ['babel-preset-env'] 
                    }
                },
                
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                  {
                    fallback: 'style-loader',
                    use: ['css-loader']
                  })
              }
            
        ]
    },
    plugins: [ 
        new ExtractTextPlugin({filename: 'style.css'})
    ]
}