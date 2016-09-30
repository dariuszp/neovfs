let Repository = require(`${__dirname}/../repository/Repository`);

/**
 * Construct files
 * 
 * @class FileFactory
 */
class FileFactory
{
    /**
     * Creates an instance of FileFactory.
     * 
     * @param {Repository} repository
     * 
     * @memberOf FileFactory
     */
    constructor(repository) {
        if (!(repository instanceof Repository)) {
            throw new Error('Invalid repository');
        }

        this.repository = repository;
    }

    /**
     * Create file
     * 
     * @param {string} name - name of the file
     * @param {object} type - type of the file
     * @param {any} ownerId - owner of the file
     * @param {Directory} parent - parent of the file (Directory)
     * 
     * @memberOf FileFactory
     */
    create(name, type, ownerId, parent) {
        
    }
}