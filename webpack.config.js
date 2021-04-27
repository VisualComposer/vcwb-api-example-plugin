const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Add your plugins here
    // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
}
