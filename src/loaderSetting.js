const ExtractTextPlugin = require('extract-text-webpack-plugin');
const os = require('os');
const isInstalled = require('./isInstalled');


const supportBrowserList = ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'];
const baseStyleLoaders = ['style-loader', 'css-loader', 'postcss-loader'];
const baseStyleConfig = {
  dev: {
    test: /\.css$/,
    loader: 'style-loader!css-loader!postcss-loader'
  },
  production: {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
  }
};
module.exports = function (opts) {
  // 关于样式处理的loader
  const styleLoaders = [
    {
      pkg: 'stylus-loader',
      depedependencies: ['style-loader', 'css-loader', 'postcss-loader'],
      config: {
        dev: {
          test: /\.styl$/,
          loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
        },
        production: {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
        }
      }
    },
    {
      pkg: 'less-loader',
      depedependencies: ['style-loader', 'css-loader', 'postcss-loader', 'less'],
      config: {
        dev: {
          test: /\.less$/,
          loader: 'style-loader!css-loader!postcss-loader!less-loader'
        },
        production: {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
        }
      }
    },
    {
      pkg: 'sass-loader',
      depedependencies: ['style-loader', 'css-loader', 'postcss-loader', 'node-sass'],
      config: {
        dev: {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        },
        production: {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
        }
      }
    },
    {
      pkg: 'sass-loader',
      depedependencies: ['style-loader', 'css-loader', 'postcss-loader', 'node-sass'],
      config: {
        dev: {
          test: /\.sass$/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
        },
        production: {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?indentedSyntax')
        }
      }
    }
  ];

  // 其他可选loader
  const optionalLoaders = [
    {
      pkg: 'babel-loader',
      depedependencies: ['babel-core', 'babel-preset-env'],
      config: {
        test: /\.(jsx?|es6)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: os.tmpdir(),
          presets: [['env', {
            browsers: supportBrowserList
          }]]
        }
      }
    },
    {
      pkg: 'coffee-loader',
      depedependencies: ['coffee-script'],
      config: {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      }
    },
    {
      pkg: 'ts-loader',
      config: {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    },
    {
      pkg: 'vue-loader',
      config: {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    },
    {
      pkg: 'url-loader',
      depedependencies: ['file-loader'],
      config: {
        test: /\.(png|jpg|jpeg|gif)(\?\S*)?$/,
        loader: `url-loader?limit=${opts.urlLoaderLimit}`
      }
    },
    {
      pkg: 'url-loader',
      depedependencies: ['file-loader'],
      config: {
        test: /\.otf(\?\S*)?$/,
        loader: `url-loader?limit=${opts.urlLoaderLimit}`
      }
    },
    {
      pkg: 'url-loader',
      depedependencies: ['file-loader'],
      config: {
        test: /\.eot(\?\S*)?$/,
        loader: `url-loader?limit=${opts.urlLoaderLimit}`
      }
    },
    {
      pkg: 'url-loader',
      depedependencies: ['file-loader'],
      config: {
        test: /\.svg(\?\S*)?$/,
        loader: `url-loader?mimetype=image/svg+xml&limit=${opts.urlLoaderLimit}`
      }
    },
    {
      pkg: 'url-loader',
      depedependencies: ['file-loader'],
      config: {
        test: /\.ttf(\?\S*)?$/,
        loader: `url-loader?mimetype=application/octet-stream&limit=${opts.urlLoaderLimit}`
      }
    },
    {
      pkg: 'url-loader',
      depedependencies: ['file-loader'],
      config: {
        test: /\.woff2?(\?\S*)?$/,
        loader: `url-loader?mimetype=application/font-woff&limit=${opts.urlLoaderLimit}`
      }
    },
    {
      pkg: 'pug-loader',
      config: {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader'
      }
    },
    {
      pkg: 'json-loader',
      config: {
        test: /\.json$/,
        loaders: ['json-loader']
      }
    },
  ];


  const installedLoaders = [];
  // First check if any but not all of the base loaders are installed
  const someBaseLoadersInstalled = baseStyleLoaders.some(isInstalled);
  const allBaseLoadersInstalled = baseStyleLoaders.every(isInstalled);
  if (someBaseLoadersInstalled && !allBaseLoadersInstalled) {
    throw new Error(`The following loaders must all be installed together: ${baseStyleLoaders.join(', ')}`);
  } else {
    installedLoaders.push(opts.isDev ? baseStyleConfig.dev : baseStyleConfig.production);
  }

  styleLoaders.forEach(item => {
    if (isInstalled(item.pkg)) {
      if (allBaseLoadersInstalled) {
        if (item.depedependencies) {
          item.depedependencies.forEach((dep) => {
            if (!isInstalled(dep)) {
              throw new Error(`The loader ${item.pkg} needs the following module to be installed: ${dep}`);
              return;
            }
          });
        }
        installedLoaders.push(opts.isDev ? item.config.dev : item.config.production);
      } else {
        throw new Error(`The loader ${item.pkg} needs the following loaders to be installed: ${baseStyleLoaders.join(', ')}`);
      }
    }
  });

  optionalLoaders.forEach(item => {
    if (isInstalled(item.pkg)) {
      if (item.depedependencies) {
        item.depedependencies.forEach((dep) => {
          if (!isInstalled(dep)) {
            throw new Error(`The loader ${item.pkg} needs the following module to be installed: ${dep}`);
            return;
          }
        });
      }
      installedLoaders.push(item.config);
    }
  });
  return installedLoaders;
};

