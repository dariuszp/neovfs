let FileType = require(`${__dirname}/FileType`);

class Directory extends FileType
{
    constructor(id ,name = '', ownerId = false, parent = false) {
        super(id, 'directory', name, ownerId, parent);
    }
}

module.exports = Directory;