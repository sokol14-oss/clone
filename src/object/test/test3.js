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

test('show options for special attacks', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const result = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  expect(showAttacks(character)).toEqual(result);
});