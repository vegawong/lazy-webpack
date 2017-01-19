const should = require('should');
const loaderSetting = require('../src/loaderSetting');

describe('loaderSetting module test', () => {
  it('should throw error', () => {
    (() => {
      loaderSetting({
        urlLoaderLimit: 10000
      });
    })
    .should.throw();
  });
});
