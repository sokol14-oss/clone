import Character from "../class/main.js";

export default class Math extends Character {
    constructor(name, type, attack, defence) {
        super (name, type, attack, defence);
        this.stoned = false;
        this.damage = false;
        this.distance = false;
    }
    set distance(value) {
      distance = Number(distance);
      if(isNaN(distance)) {
        return 'Not a Number!';
      }
      this._distance = value;
    }
    get distance() {
      return this.distance;
    }
  set stoned(value) {
    if(typeof value != Boolean) {
      return "Только true или false";
    }
    this._stoned = value;
  }
  get stoned() {
    return this.stoned;
  }
  set attack(value) {
    this._attack = value;
  }
  get attack() {
    this._damage = (100-distance) + 1 ;
    this.attack = this.attack * this.damage / 100;
    if(this.stoned) {
      this.attack =  Math.log2(this.distance) * 5;
    }
    return this.attack;
  }
}