let FileType = require(`${__dirname}/FileType`);

class File extends FileType
{
    constructor(id ,name = '', ownerId = false, parent = false) {
        super(id, 'file', name, ownerId, parent);
    }
}

module.exports = File;