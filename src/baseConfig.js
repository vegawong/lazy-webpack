const path = require('path');

module.exports = function (opts) {
  let entry;
  // entry字段处理
  if (typeof opts.in === 'string') {
    entry = opts.in;
  } else if (Array.isArray(opts.in)) {
    entry = opts.in.map(item => path.resolve(item));
  } else if (typeof opts.in === 'object') {
    entry = {};
    Object.keys(opts.in).forEach(item => {
      entry[item] = path.resolve(opts.in[item]);
    });
  } else {
    throw new Error('options.in is inValid');
  }
  const conf = {
    entry,
    output: {
      filename: opts.out.filename || '[name].js',
      path: path.resolve(opts.out.path),
      publicPath: opts.out.publicPath || '/'
    },
    module: {
      rules: [
      ]
    },
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.js', '.coffee', '.es6', '.ts', '.vue', '.json'],
    },
    plugins: []
  };

  return conf;
};
