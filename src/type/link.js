let Base = require(`${__dirname}/base.js`);

class Link extends Base
{
    constructor(name = '', ownerId = undefined) {
        this.type = 'link';
        super(name, ownerId);
    }
}