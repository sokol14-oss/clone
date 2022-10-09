import Math from "../ArrayBuffer/math.js";
export default class Daemon extends Math {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
        this.attack = 10;
        this.defence = 40;
}
}