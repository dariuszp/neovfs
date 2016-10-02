let Repository = require(`${__dirname}/Repository`);
let FileType = require(`${__dirname}/../type/FileType`);
let Directory = require(`${__dirname}/../type/Directory`);

class FileRepository extends Repository
{

    create(name, Type, ownerId, parent = false) {
        if (!Type instanceof FileType) {
            throw new Error('Unrecognized file type');
        }

        let storage = this.getStorage();
        let file = new Type(undefined, name, ownerId, parent);
        return new Promise((resolve, reject) => {
            storage.save(file, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(file);
                }
            });
        });
    }


}

module.exports = FileRepository;