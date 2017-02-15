const processChild = require('child_process');
const fs = require('fs');
const path = require('path');

const presetRoot = path.join(__dirname, '../../presets');


fs.readdir(path.join(__dirname, '../../presets'), (e, pathItems) => {
  pathItems.forEach(pathItem => {
    const presetPath = path.join(presetRoot, pathItem);
    processChild.exec(`cd ${presetPath} && npm link`, (err, std, stderr) => {
      console.log(std);
    });
  });
});

