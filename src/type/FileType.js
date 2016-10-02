/**
 * FileType for all file types
 * 
 * @class FileType
 */
class FileType
{
    /**
     * Creates an instance of FileType.
     * 
     * @param string [name=''] - name of the file
     * @param {any} [ownerId=false] - owner of the file
     * 
     * @memberOf FileType
     */
    constructor(id, type, name = '', ownerId = false, parent = false) {
        if (this.constructor === FileType) {
            throw new Error("Can't instantiate abstract class!");
        }

        this.id = id;

        if (!type) {
            throw new Error(`Invalid type ${type}`);
        }
        
        if (!this.isValidName(name)) {
            throw new Error(`Invalid file name ${name}`);
        }

        if (!this.isValidOwnerId(ownerId)) {
            throw new Error(`Invalid owner ID ${ownerId}`);
        }

        if (!this.isValidParent(parent)) {
            throw new Error(`Invalid parent ${parent}`);
        }

        this.type = type;
        this.name = name;
        this.ownerId = ownerId;
        this.parent = parent;
    }

    /**
     * Get ID
     * 
     * @returns
     * 
     * @memberOf FileType
     */
    getId() {
        return this.id;
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
     * Get name
     * 
     * @returns
     * 
     * @memberOf FileType
     */
    getName() {
        return String(this.name).trim();
    }

    /**
     * Return owner ID
     * 
     * @returns
     * 
     * @memberOf FileType
     */
    getOwnerId() {
        return this.ownerId;
    }

    /**
     * Return parent
     * 
     * @memberOf FileType
     */
    getParent() {
        this.parent;
    }

    /**
     * Check if file has proper name
     * 
     * @param string name
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

    /**
     * Check if parent is valid
     * 
     * @param Directory parent
     * @returns
     * 
     * @memberOf FileType
     */
    isValidParent(parent) {
        return parent === false || ((parent && parent instanceof FileType) && (parent.getType() === 'directory'));
    }
}

module.exports = FileType;