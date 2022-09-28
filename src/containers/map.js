class ErrorRepository {
    constructor(code,description) {
     this.error = new Map(code,description);;
    }
    translate(code) {
        return this.error.get(this).code;
    }
}