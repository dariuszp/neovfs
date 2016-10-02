let Storage = require(`${__dirname}/storage/Storage`);
let Neo4jStorage = require(`${__dirname}/storage/Neo4jStorage`);
let Repository = require(`${__dirname}/repository/Repository`);
let FileRepository = require(`${__dirname}/repository/FileRepository`);
let Directory = require(`${__dirname}/type/Directory`);

/**
 * NeoVFS - neo4j virtual file system
 * 
 * @class NeoVFS
 */
class NeoVFS
{
    /**
     * Creates an instance of NeoVFS.
     * 
     * @param {any} driver
     * 
     * @memberOf NeoVFS
     */
    constructor(driver) {
        if (!(driver instanceof Object)) {
            throw new Error('Missing neo4j driver');
        }
        
        let storage = new Neo4jStorage(driver);
        this.repository = new FileRepository(storage);
    }

    /**
     * Returns Repository
     * 
     * @returns Repository
     * 
     * @memberOf NeoVFS
     */
    getRepository() {
        return this.repository;
    }

    createDirectory(name, ownerId, parent = false) {
        return this.repository.create(name, Directory, ownerId, parent);
    }
}

module.exports = NeoVFS;