let FileType = require(`${__dirname}/FileType.js`);

class File extends FileType
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'file';
        super(name, ownerId);
    }
}