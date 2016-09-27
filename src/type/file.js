let Base = require(`${__dirname}/base.js`);

class File extends Base
{
    constructor() {
        this.type = 'file';
        super();
    }
}