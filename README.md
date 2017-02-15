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

## 可用的Presets

- [babel](/presets/lazy-webpack-preset-babel/README.md)

- [sass](/presets/lazy-webpack-preset-sass/README.md)

- [icon](/presets/lazy-webpack-preset-icon/README.md)

- [img](/presets/lazy-webpack-preset-img/README.md)
