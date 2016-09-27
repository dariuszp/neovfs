let Base = require(`${__dirname}/base.js`);

class Directory extends Base
{
    constructor() {
        this.type = 'directory';
        super();
    }
}