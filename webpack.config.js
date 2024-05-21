const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of the application
  entry: './client/src/index.js', // Adjust this path to where your React app's entry file is located

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true, // This is important for single-page applications
    proxy: {
      '/api': 'http://localhost:3000' // Assuming Express server is running on port 3000
    }
  },

  // Module rules
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html', // Adjust this path to where your HTML template is located
      filename: 'index.html',
      inject: 'body'
    })
  ],

  // Resolve extensions
  resolve: {
    extensions: ['.js', '.jsx'] // Add '.jsx' if you are using JSX files
  }
};
