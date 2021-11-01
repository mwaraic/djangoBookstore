const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const wwwPath = path.join(__dirname, 'www');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  return{
  mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    
      {
        test: /\.(gif|png|svg|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          }]}],
   
  }, resolve: {
        extensions: ['.js', '.jsx','.json', '.svg'],
      },
  optimization: {
    minimize: true,
  },
  plugins: [

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(mode),
      },
    }),]
  }
};