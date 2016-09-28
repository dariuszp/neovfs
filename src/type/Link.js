let FileType = require(`${__dirname}/fileType.js`);

class Link extends FileType
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'link';
        super(name, ownerId);
    }
}