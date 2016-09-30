let mocha = require('mocha');
let should = require('should');
let neovfs = require(`${__dirname}/../index`);

describe('Example', () => {
    it ('should pass', () => {
        should(neovfs).be.type('function');
        should(true).be.ok();
    });
});