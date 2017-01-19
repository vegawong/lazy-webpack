const path = require('path');
module.exports = function (name) {
  if (name === 'babel-loader') {
    console.log(require.resolve(name));
  }
  try {
    require.resolve(name);
    return true;
  } catch (e) {
    return false;
  }
};
