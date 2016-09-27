let FileTypeFile = require(`${__dirname}/type/file.js`);
let FileTypeDirectory = require(`${__dirname}/type/directory.js`);
let FileTypeLink = require(`${__dirname}/type/link.js`);

class NeoVFS
{
    constructor(driver) {
        this.driver = driver;
    }

    getDriver() {
        return this.driver;
    }
}

module.exports = NeoVFS;