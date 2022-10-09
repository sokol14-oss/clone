import {obj,orderByProps}  from "../obj.js";
test("orderByProps", ()=> {
    expect(orderByProps(obj,["name", "level"])).toBe([
        {key: "name", value: "мечник"}, // порядок взят из массива с ключами
        {key: "level", value: 2}, // порядок взят из массива с ключами
        {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
        {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
        {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
      ]);
})