import path from 'path'
import { Configuration, IgnorePlugin } from 'webpack'
import Dotenv from 'dotenv-webpack'
import nodeExternals from 'webpack-node-externals'

const dirPath = path.resolve(path.join(process.cwd(), 'backend'))
const functionsPath = path.resolve(path.join(process.cwd(), 'backend/dist'))
const testFilePattern = '\\.(test|spec)\\.?'

const config: Configuration = {
  mode: 'production',
  resolve: {
    extensions: ['.ts'],
    mainFields: ['module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)?$/,
        exclude: new RegExp(
          `(node_modules|bower_components|${testFilePattern})`,
        ),
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            babelrc: true
          },
        },
      },
    ],
  },
  context: dirPath,
  entry: {
    test: './test.ts',
  },
  plugins: [
    new IgnorePlugin({ contextRegExp: /vertx/, resourceRegExp: /vertx/ }),
    new Dotenv(),
  ],
  externals: [nodeExternals()],
  target: 'node',
  output: {
    path: functionsPath,
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  optimization: {
    nodeEnv: process.env.NODE_ENV || 'production',
  },
  bail: true,
  devtool: false,
  stats: {
    colors: true,
  }
}

export default config
