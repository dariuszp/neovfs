let FileType = require(`${__dirname}/FileType`);

class Link extends FileType
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'link';
        super(name, ownerId);
    }
}