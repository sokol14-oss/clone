export class Character {
    constructor(name, type, health, level, attack, defence) {
    this.name = name;
    if(this.name.length < 2 || this.name.length > 10) {
        throw new Error("Значение не валидно");
    }
    if(this.type !== "Bowman" || this.type !== "Swordsman" || this.type !== "Magician" || this.type !== "Daemon" || this.type !== "Undead" || this.type !== "Zombie") {
        throw new Error("Значение не валидно");
    }

    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
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

 export class Bowerman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
        this.attack = 25;
        this.defence = 25;
}
}
export class Swordsman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
        this.attack = 40;
        this.defence = 10;
}
}
export class Magician extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
        this.attack = 10;
        this.defence = 40;
}
}
export class Undead extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
        this.attack = 25;
        this.defence = 25;
}
}
export class Zombie extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
        this.attack = 40;
        this.defence = 10;
}
}
export class Daemon extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
        this.attack = 10;
        this.defence = 40;
}
}

export const daemon = new Daemon("Jim","Daemon", 0, 2);
console.log(daemon.levelUp());
