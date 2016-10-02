

class Storage
{
    constructor() {
        if (this.constructor === Storage) {
            throw new Error("Can't instantiate abstract class!");
        }
    }
}

module.exports = Storage;