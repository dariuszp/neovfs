let Repository = require(`${__dirname}/Repository.js`);
let File = require(`${__dirname}/../type/File.js`);
let Directory = require(`${__dirname}/../type/Directory.js`);
let Link = require(`${__dirname}/../type/Link.js`);

class FileRepository extends Repository
{

    createDirectory(name, owner, parent = false) {
        if (parent && !(parent instanceof Directory)) {
            throw new Error('File can be only a parent of a Directory');
        }
    }

    createFile(name, owner, parent = false) {
        if (!(parent instanceof Directory)) {
            throw new Error('File can be only a parent of a Directory');
        }
    }

    createLink(name, owner, parent = false) {
        if (parent && !(parent instanceof Directory)) {
            throw new Error('File can be only a parent of a Directory');
        }
    }
}

module.exports = FileRepository;