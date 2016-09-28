let FileType = require(`${__dirname}/FileType.js`);

class Directory extends FileType
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'directory';
        super(name, ownerId);
    }
}