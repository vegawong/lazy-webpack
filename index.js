
/**
 *
 * @module
 * @author vega <vegawong@126.com>
 **/

/* eslint-disable no-use-before-define,no-prototype-builtins */

const merge = require('webpack-merge');

const getBaseConfig = require('./src/baseConfig');
const defaultOpts = require('./src/defaultOptions');

const loadPresets = require('./src/loadPresets');
// const getLoaderSetting = require('./src/loaderSetting');


module.exports = function (opts) {
  checkRequired(opts);
  const spec = merge(defaultOpts, opts);
  let config = getBaseConfig(spec);
  config = loadPresets(config, spec.presets);

  return config;
};


function checkRequired(opts) {
  const props = ['out', 'in'];
  if (!opts || !props.every(prop => opts.hasOwnProperty(prop))) {
    throw new Error('Must pass in options object with `in` and `out` properties');
  }
  if (typeof opts.out !== 'object') {
    throw new Error('`options.out` must be an object');
  }
  if (!opts.out.path) {
    throw new Error('`options.out.path` must be set');
  }
}
