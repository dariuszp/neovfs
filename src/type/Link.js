let FileType = require(`${__dirname}/FileType`);

class Link extends FileType
{
    constructor(id ,name = '', ownerId = false, parent = false) {
        this.type = 'link';
        super(id ,name, ownerId, parent);
    }
}