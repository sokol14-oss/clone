export default class ErrorRepository {
    constructor(code,description) {
     this.error = new Map(code,description);
    }
    translate(code) {
        if(!this.error.has(code)) {
           return  "Unknown error";
        }
        return this.error.get(this).code;
    }
}