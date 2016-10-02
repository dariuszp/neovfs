let Repository = require(`${__dirname}/Repository`);
let FileType = require(`${__dirname}/../type/FileType`);
let Directory = require(`${__dirname}/../type/Directory`);

class FileRepository extends Repository
{

    create(name, type, ownerId, parent = false) {
        if (!type instanceof FileType) {
            throw new Error('Unrecognized file type');
        }

        let file = new type(undefined, name, ownerId, parent);
    }


}

module.exports = FileRepository;