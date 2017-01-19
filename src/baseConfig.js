
module.exports = function (opts) {
  const conf = {
    entry: opts.entry,
    output: opts.output,
    module: {
      loaders: [],
      preLoaders: [],
      postLoaders: [],
      noParse: []
    },
    resolve: {
          // alias: {},
          // root: [],
          // modulesDirectories: ['web_modules', 'node_modules'],
          // fallback: '',
      extensions: ['', '.webpack.js', '.web.js', '.js', '.coffee', '.es6', '.ts', '.vue'],
          // packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
          // packageAlias: '',
          // unsafeCache: []
    },
    resolveLoader: {    // like resolve but for loader
      moduleTemplates: ['*-webpack-loader', '*-web-loader', '*-loader', '*'],  // That’s a resolveLoader only property.
      modulesDirectories: ['web_loaders', 'web_modules', 'node_loaders', 'node_modules'],
      extensions: ['', '.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
      packageMains: ['webpackLoader', 'webLoader', 'loader', 'main']
    },
    externals: [],
    target: 'web',
      // bail: '',
      // profile: '',
      // cache: '',
      // debug: false,
      // devtool: '',
    devServer: opts.devServer || {},
    node: {                 // Include polyfills or mocks for various node stuff:
      console: false,
      global: true,
      process: true,
      Buffer: true,
      __filename: 'mock',
      __dirname: 'mock',
      setImmediate: true
    },
      // amd: {},
      // loader: {},          // Custom values available in the loader context.
    plugins: [],

      // optional
    postcss: opts.postcss || [],
    vue: {}
  };

  return conf;
};
