let Repository = require(`${__dirname}/../repository/Repository`);
let FileType = require(`${__dirname}/../type/FileType`);
let Directory = require(`${__dirname}/../type/Directory`);

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
     * @param {any} name
     * @param {any} type
     * @param {boolean} [ownerId=false]
     * @param {boolean} [parent=false]
     * 
     * @memberOf FileFactory
     */
    create(fileType, parent = false) {
        if (!(fileType instanceof FileType)) {
            throw new Error('Invalid file type');
        }
    }
}