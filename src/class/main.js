export class Character {
    constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    }
    set name(name) {
        if(name.length < 2 || name.length > 10) {
            throw new Error("Значение не валидно");
        }
        this._name = name;
    }
    set type(type) {
        const arr = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        for( let i = 0; i < arr.length; i++) {
           const index = i;
           type = arr.includes(index);
           if (type === false) {
            throw new Error("Значение не валидно");
           }
        }
        this._type = type;
    }
    levelUp() {
        this.level++;
        this.attack = this.attack * 1.20;
        this.defence = this.defence * 1.20;
        this.health = 100;
        if(this.health != 0) {
            throw new Error("нельзя повысить левел умершего");
        }
    }
    damage(points) {
     this.health -= points * (1 - defence / 100);
    }

}
