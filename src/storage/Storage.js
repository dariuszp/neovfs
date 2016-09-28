class Storage
{
    constructor() {
        if (this.constructor === Repository) {
            throw new Error("Can't instantiate abstract class!");
        }
    }
}

module.exports = Storage;