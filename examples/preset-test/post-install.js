const processChild = require('child_process');
const fs = require('fs');
const path = require('path');

const presetRoot = path.join(__dirname, '../../presets');


fs.readdir(path.join(__dirname, '../../presets'), (e, pathItems) => {
  pathItems.forEach(pathItem => {
    processChild.exec(`cd ${__dirname} && npm link ${pathItem}`, (err, std, stderr) => {
      console.log(std);
    });
  });
});

