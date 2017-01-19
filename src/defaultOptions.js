const rucksack = require('rucksack-css');
const autoprefixer = require('autoprefixer');

module.exports = {
  in: null,   // can be string/array/object
  out: null,  // string  the folder for built bundles
  // configFile: null,
  isDev: false,
  hash: true, // use hash for built bundles but useful when isDev is true   Number/Boolen
  package: null, // can set a json string or a path string for package.json
  replace: null,
  // https: false,
  // port: 3000,
  // hostname: 'localhost',
  // html: true,
  urlLoaderLimit: 10000,
  clearBeforeBuild: false,
  // serveCustomHtmlInDev: true,
  devServer: {},
  uglify: {
    compress: {
      warnings: false
    },
    output: {
      comments: false
    },
    sourceMap: false
  },
  postcss: [
    rucksack(),
    autoprefixer({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
      }),
  ]
};
