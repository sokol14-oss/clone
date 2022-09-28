export class Validator {
    constructor(name) {
        this.name = name;
    }
    validateUsername(name) {
        return /^[^\d_-]+([^\d{0,3}])*[^\d_-]+$/.test(name);
    }
}
