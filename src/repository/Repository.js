let Storage = require(`${__dirname}/../storage/Storage`);

class Repository
{
    constructor(storage) {
        if (this.constructor === Repository) {
            throw new Error("Can't instantiate abstract class!");
        }

        if (!(storage instanceof Storage)) {
            throw new Error('Invalid storage');
        }

        this.storage = storage;
    }

    getStorage() {
        return this.storage;
    }
}