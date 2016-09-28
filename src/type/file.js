let Base = require(`${__dirname}/base.js`);

class File extends Base
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'file';
        super(name, ownerId);
    }
}