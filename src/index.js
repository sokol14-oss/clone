class Character {
    constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    }
    if(this.name.length < 2 || this.name.length > 10) {
        throw new Error("Значение не валидно");
    }
    levelUp() {
        this.level++;
        this.attack = this.attack * 1.20;
        this.defence = this.defence * 1.20;
        this.health = 100;
        if(this.health > 0) {
            throw new Error("нельзя повысить левел умершего");
        }
    }
    damage(points) {
     this.health -= points * (1 - defence / 100);
    }

}

class Bowerman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
}
}
class Swordsman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
}
}
class Magician extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
}
}
class Undead extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
}
}
class Zombie extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
}
}
class Daemon extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
}
}
