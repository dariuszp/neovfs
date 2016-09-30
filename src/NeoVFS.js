let File = require(`${__dirname}/type/File`);
let Directory = require(`${__dirname}/type/Directory`);
let Link = require(`${__dirname}/type/Link`);

class NeoVFS
{
    constructor(driver) {
        if (!(driver instanceof Object)) {
            throw new Error('Missing neo4j driver');
        }
        
        this.driver = driver;
    }

    getDriver() {
        return this.driver;
    }
}

module.exports = NeoVFS;