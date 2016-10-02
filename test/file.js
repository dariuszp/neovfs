let mocha = require('mocha');
let should = require('should');

// Lib
let NeoVFS = require(`${__dirname}/../index`);
// Neo4j driver, you must have active database
let neo4j = require('neo4j-driver').v1;

describe('File', () => {
    let driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
    let neovfs = new NeoVFS(driver);

    beforeEach((done => {
        driver.session().run('MATCH (n) DETACH DELETE n;').then(() => {
            done();
        }).catch((error) => {
            done(error);
        })
    }));

    it ('should create file test.js', (done) => {
        neovfs.createDirectory('test.js', 'dariuszp')
            .then((file) => {
                should(file.getName()).equal('test.js');
                should(file.getOwnerId()).equal('dariuszp');
                should(file.getType()).equal('directory');
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});