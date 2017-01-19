const should = require('should');
const isInstalled = require('../src/isInstalled');

describe('isInstalled module test', () => {
  it('should be not ok', () => {
    isInstalled('undefine-module').should.not.ok();
  });
});
