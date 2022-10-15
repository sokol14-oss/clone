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
        user.forEach(item => user.team.add(item));
    }
    toArray(){
   return Array.from(this.members);
    }
}