import Math from "math.js";
import Daemon from "daemon.js";
import Magician from "magician.js";
import Character from "../class/main.js";
test("Daemon test stone", ()=> {
    const daemon = new Daemon();
    this.stoned = 1;
    expect(daemon.stoned()).toBe("Только true или false");
})
test("Daemon test attack", ()=> {
    const daemon = new Daemon();
    this.damage = "y";
    expect(daemon.stoned()).toBe('Not a Number!');
})
test("Daemon test attack", ()=> {
    const daemon = new Daemon();
    this.distance = 2;
    this.attack = 100;
    expect(daemon.stoned()).toBe(85);
})
test("Magician test stone", ()=> {
    const magician = new Magician();
    this.stoned = 1;
    expect(magician.stoned()).toBe("Только true или false");
})
test("Magician test attack", ()=> {
    const magician = new Magician();
    this.damage = "y";
    expect(magician.stoned()).toBe('Not a Number!');
})
test("Magician test attack", ()=> {
    const magician = new Magician();
    this.distance = 2;
    this.attack = 100;
    expect(magician.stoned()).toBe(85);
})
