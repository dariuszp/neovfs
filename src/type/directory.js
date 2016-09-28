let Base = require(`${__dirname}/base.js`);

class Directory extends Base
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'directory';
        super(name, ownerId);
    }
}