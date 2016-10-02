let mocha = require('mocha');
let should = require('should');

// Lib
let NeoVFS = require(`${__dirname}/../index`);
// Neo4j driver, you must have active database
let neo4j = require('neo4j-driver').v1;

describe('Neovfs', () => {
    it ('should build', () => {
        var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
        let neofvs = new NeoVFS(driver);
        should(neofvs).be.instanceOf(NeoVFS);
    });
});