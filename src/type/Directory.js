let FileType = require(`${__dirname}/FileType`);

class Directory extends FileType
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'directory';
        super(name, ownerId);
    }
}