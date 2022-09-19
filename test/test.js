const {daemon} = require("../src/index.js");
test("daemom", ()=> {
    expect(daemon.levelUp()).toBe(Error("Значение не валидно"));
})