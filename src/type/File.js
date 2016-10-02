let FileType = require(`${__dirname}/FileType`);

class File extends FileType
{
    constructor(id ,name = '', ownerId = false, parent = false) {
        this.type = 'file';
        super(id ,name, ownerId, parent);
    }
}