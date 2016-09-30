let Storage = require(`${__dirname}/Storage`);

class Neo4jStorage extends Storage
{
    constructor(driver) {
        super();

        if (!(driver instanceof Object)) {
            throw new Error('Missing neo4j driver');
        }

        this.driver = driver;
    }
}

module.exports = Neo4jStorage;