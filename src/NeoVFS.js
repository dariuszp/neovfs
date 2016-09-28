let File = require(`${__dirname}/type/File.js`);
let Directory = require(`${__dirname}/type/Directory.js`);
let Link = require(`${__dirname}/type/Link.js`);

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