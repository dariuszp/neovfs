let Storage = require(`${__dirname}/storage/Storage`);
let Neo4jStorage = require(`${__dirname}/storage/Neo4jStorage`);
let Repository = require(`${__dirname}/repository/Repository`);
let FileRepository = require(`${__dirname}/repository/FileRepository`);
let Directory = require(`${__dirname}/type/Directory`);
let File = require(`${__dirname}/type/File`);
let Link = require(`${__dirname}/type/Link`);

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

    create(name, Type, ownerId, parent = false) {
        return this.repository.create(name, Type, ownerId, parent);
    }

    createDirectory(name, ownerId, parent = false) {
        return this.create(name, Directory, ownerId, parent);
    }

    createFile(name, ownerId, parent = false) {
        return this.create(name, File, ownerId, parent);
    }

    createLink(name, ownerId, parent = false) {
        return this.create(name, Link, ownerId, parent);
    }
}

module.exports = NeoVFS;