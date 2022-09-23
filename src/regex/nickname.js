export class Validator {
    constructor(name) {
        this.name = name;
    }
    validateUsername(name) {
        return /[^\.\d\s\W]+\d{3}\w+[\.\d\s\W]$/.test(name);
    }
}
export const user = new Validator("11@jim");
validateUsername(user);