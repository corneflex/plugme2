const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    port: 3003,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({extensions: [".ts", ".tsx", ".js"]})]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.tsx?$/,
        use: {
            loader:'ts-loader',
            options: {
                projectReferences: true,
            }
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'CommonComponents',
      filename: 'remoteEntry.js',
      exposes: {
        './Toto': './src/components/Toto.tsx',
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
          eager:true
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true, // only a single version of the shared module is allowed
          eager:true
        },
        '@corneflex/core':{
            singleton: true,
            eager: true,
            requiredVersion: '^0.0.6' 
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};