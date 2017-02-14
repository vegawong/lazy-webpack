const getConfig = require('../../index');
const path = require('path');

const config = getConfig({
  in: './src/index.js',
  out: {
    path: path.join(__dirname, 'dist')
  },
  presets: ['babel']
});

module.exports = config;
