import Character from "../class/main.js";
export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(user){
        this.members.add(user);
        if(this.members.has(user)) {
            throw new Error("Ошибка");
        }

    }
    addAll(...user){
        this.team.add(user);
        if(this.members.has(user)) {
            return false;
        }
    }
    toArray(){
Array.from(this.members);
    }
}