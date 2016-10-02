let Storage = require(`${__dirname}/Storage`);
let FileType = require(`${__dirname}/../type/FileType`);

class Neo4jStorage extends Storage
{
    constructor(driver) {
        super();

        if (!(driver instanceof Object)) {
            throw new Error('Missing neo4j driver');
        }

        this.driver = driver;
    }

    getDriver() {
        return this.driver;
    }

    save(fileType, callback) {
        if (!(fileType instanceof FileType)) {
            throw new Error('Invalid file type');
        }

        if(!callback) {
            callback = function () {};
        }
        if(!(typeof callback === 'function')) {
            throw new Error('Invalid callback');
        }

        let type = fileType.getType();
        let name = fileType.getName();
        let ownerId = fileType.getOwnerId();

        let session = this.getDriver().session();
        return session.run(`CREATE (ft:${type} { name: {name}, owner: {owner} })`, {
            name: name,
            owner: ownerId
        }).then((result) => {
            session.close();
            callback(false, result);
        }).catch((error) => {
            callback(error, false);
        });
    }
}

module.exports = Neo4jStorage;