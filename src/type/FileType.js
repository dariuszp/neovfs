/**
 * Base for all file types
 * 
 * @class FileType
 */
class FileType
{
    /**
     * Creates an instance of FileType.
     * 
     * @param {string} [name=''] - name of the file
     * @param {any} [ownerId=undefined] - owner of the file
     * 
     * @memberOf FileType
     */
    constructor(name = '', ownerId = undefined) {
        if (this.constructor === Base) {
            throw new Error("Can't instantiate abstract class!");
        }

        if (!this.type) {
            throw new Error('File must have type property specified. Set "this.type" before calling super constructor in extended class.');
        }
        
        if (!this.isValidName(name)) {
            throw new Error(`Invalid file name ${name}`);
        }

        if (!this.isValidOwnerId(ownerId)) {
            throw new Error(`Invalid owner ID ${ownerId}`);
        }

        this.name = name;
        this.ownerId = ownerId;
    }

    /**
     * Get current type
     * 
     * @returns
     * 
     * @memberOf FileType
     */
    getType() {
        return this.type;
    }

    /**
     * Check if file has proper name
     * 
     * @param {any} name
     * @returns
     * 
     * @memberOf FileType
     */
    isValidName(name) {
        let isValid = true;
        if (typeof name !== 'string') {
            isValid = false;
        }
        name = name.trim();
        if (name.trim() === 0) {
            isValid = false;
        }
        return isValid;
    }

    /**
     * Check if owner id is not falsy value
     * 
     * @param {any} ownerId
     * @returns
     * 
     * @memberOf FileType
     */
    isValidOwnerId(ownerId) {
        return ownerId !== undefined;
    }
}

module.exports = FileType;