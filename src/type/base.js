class Base
{
    constructor() {
        if (!this.type) {
            throw new Error('File must have type property specified. Set "this.type" before calling super constructor in extended class.');
        }
    }

    getType() {
        return this.type;
    }
}