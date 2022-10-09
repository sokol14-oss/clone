export class Validator {
    constructor(name) {
        this.name = name;
    }
    validateUsername(name) {
        return /^[^\d_-]([a-zA-Z\_-]+\d{0,3})+[^\d_-]+$/.test(name);
    }
}
