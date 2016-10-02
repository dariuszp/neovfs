let ExtendableError = require(`${__dirname}/ExtendableError`);

class FileAlreadyExistsError extends ExtendableError {

    constructor(message) {   
        super(message);
    }

}

module.exports = FileAlreadyExistsError;