const path = require('path');

module.exports = {
  entry: {
    app: './src/assets/js/app.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require.resolve("sass")
            }
          },
        ],
      },
    ],
  },
};