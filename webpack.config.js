const path = require("path");

const config = {
  target: "web",
  entry: {
    entry: './src/index.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    publicPath: ''
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader',
    }, ],
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  resolve: {
    extensions: [".js"],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
  } else if (argv.mode === "production") {
  } else {
    throw new Error("Specify env");
  }

  return config;
};
