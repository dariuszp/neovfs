let FileType = require(`${__dirname}/FileType`);

class Directory extends FileType
{
    constructor(id ,name = '', ownerId = false, parent = false) {
        this.type = 'directory';
        super(id ,name, ownerId, parent);
    }
}