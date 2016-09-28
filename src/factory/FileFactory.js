let Repository = require(`${__dirname}/../repository/Repository.js`);

class FileFactory
{
    constructor(repository) {
        if (!(repository instanceof Repository)) {
            throw new Error('Invalid repository');
        }

        this.repository = repository;
    }

    create(name, type, ownerId, parent) {
        
    }
}