let Repository = require(`${__dirname}/Repository`);
let FileType = require(`${__dirname}/../type/FileType`);
let Directory = require(`${__dirname}/../type/Directory`);

class FileRepository extends Repository
{

    create(name, type, ownerId, parent = false) {
        if (parent && !(parent instanceof Directory)) {
            throw new Error('File can be only a parent of a Directory');
        }

        if (!type instanceof FileType) {
            throw new Error('Unrecognized file type');
        }

        name = String(name || '').trim();
        if (!name.length) {
            throw new Error('Invalid name');
        }

        if (!ownerId) {
            throw new Error('Invalid owner');
        }

        return new type(name, ownerId)
    }


}

module.exports = FileRepository;