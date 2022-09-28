import { Character } from "../class/main.js"
test("set name", ()=> {
    const user = new Character();
    expect(user.name = "I").toBe(Error("Значение не валидно"));
})
test("set type", ()=> {
    const user = new Character();
    expect(user.type = "I").toBe(Error("Значение не валидно"));
})
test("level", ()=> {
    const user = new Character("Ivan","Bowman",30,30);
    user.health = 0;
    expect(user.levelUp()).toBe(Error("Значение не валидно"));
})
