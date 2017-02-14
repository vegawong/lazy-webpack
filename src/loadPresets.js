const merge = require('webpack-merge');

const prefix = 'lazy-webpack-preset-';


module.exports = function (baseConfig, presets = []) {
  let config = baseConfig;
  presets.forEach(item => {
    let presetName = '';
    let query = {};
    if (typeof item === 'string') {
      presetName = item;
      if (item.indexOf(prefix) === -1) {
        presetName = `${prefix}${item}`;
      }
    } else if (typeof item === 'object') {
      presetName = item.name;
      if (item.name.indexOf(prefix) === -1) {
        presetName = `${prefix}${item.name}`;
      }
      if (item.options || item.query) {
        query = item.options || item.query || {};
      }
    } else {
      throw new Error('lazy-webpack presets is not valid');
    }
    let getPreset;
    try {
      getPreset = require(`${process.cwd()}/node_modules/${presetName}`);
    } catch (err) {
      throw new Error(`Module not found: ${presetName}`);
    }
    const preset = getPreset(query);
    // loader
    config = merge(config, preset);
  });
  return config;
};
