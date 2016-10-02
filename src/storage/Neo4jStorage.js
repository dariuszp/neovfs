let Storage = require(`${__dirname}/Storage`);
let FileType = require(`${__dirname}/../type/FileType`);
// Errors
let FileAlreadyExistsError = require(`${__dirname}/../error/FileAlreadyExistsError`);

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
        let parent = fileType.getParent();

        let session = this.getDriver().session();
        
        if (!parent) {
            session.run(`MATCH (d:directory { name: {name} }) WHERE NOT (()-[:HAS_FILE]->(d)) RETURN d;`, {
                name: name
            }).then((result) => {
                if (result.records.length) {
                    throw new FileAlreadyExistsError('File with same name already exists');
                }
                session.run(`CREATE (ft:${type} { name: {name}, owner: {owner} }) RETURN toInt(ID(ft)), ft.name, ft.owner;`, {
                    name: name,
                    owner: ownerId
                }).then((result) => {
                    let fields = result.records[0]._fields;
                    fileType.setId(fields[0].low);
                    fileType.setName(fields[1]);
                    fileType.setOwnerId(fields[2]);
                    callback(false, fileType);
                }).catch((error) => {
                    callback(error, false);
                })
            }).catch((error) => {
                callback(error, false);
            });
        }        
    }
}

module.exports = Neo4jStorage;