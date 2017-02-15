const getConfig = require('lazy-webpack');

const util = require('util');


// alternative shortcut


const config = getConfig({
  in: './src/index.js',
  out: {
    path: 'dist'
  },
  presets: ['babel', {
    name: 'sass',
    options: {
      extract: true,
      postcss: [
        require('autoprefixer')
      ]
    }
  }, 'img', 'icon']
});

// console.log(util.inspect(config, false, null, true));

module.exports = config;
