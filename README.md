# easy-webpack-plus
easy to setup for webpack

## USAGE:
```javascript
// webpack.config.js
const getConfig = require('lazy-webpack');
let config = getConfig({
  in: {
    app: 'src/main.js'
  },
  out: {
    path: 'dist',
    publicPath: 'http://localhost:3000/dist/'
  },
  presets: ['babel', 'sass']
});
module.exports = config;
```
