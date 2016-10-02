let FileType = require(`${__dirname}/FileType`);

class Link extends FileType
{
    constructor(id ,name = '', ownerId = false, parent = false) {
        super(id, 'link', name, ownerId, parent);
    }
}

module.exports = Link;