let FileType = require(`${__dirname}/FileType`);

class File extends FileType
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'file';
        super(name, ownerId);
    }
}