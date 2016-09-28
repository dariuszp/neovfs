class Base
{
    constructor(name = '', ownerId = undefined) {
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

    getType() {
        return this.type;
    }

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

    isValidOwnerId(ownerId) {
        return ownerId !== undefined;
    }
}