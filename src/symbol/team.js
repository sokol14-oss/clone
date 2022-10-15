import Person from "./person";
export default class Team {
    constructor() {
        this.players = [];
    }
    add(player) {
        if(player instanceof Person) {
            this.players.push(player);
        }
        else {
            throw new Error ("Ошибка");
        }
    }
    addAll(...players) {
        this.players.push(players);
    }
    *[Symbol.iterator]() {
      const current = 0;
      return {
        next() {
            if(current < this.players.length) {
                current++; 
                return {
                    value: this.players[current],
                    done: false
                }
        
            };
            return {
              value: undefined,
              done: true
            };
        }
      }
    }
  
  }