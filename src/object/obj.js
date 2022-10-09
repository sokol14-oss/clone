export const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
}
export function orderByProps(obj,arrKey) {
  const keys = Object.keys(obj);
  const  keys1 = keys.filter(key => key === arrKey[0] || key === arrKey[1] );
  const keys2 = keys.sort((a,b) => a > b);
  const keys3 = keys1.concat(keys2);
  keys3.map((key) => {
      return `key:${key}`;
    })
}

export const character = {
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
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }
  function displaySummary({ special: [{ id, name, icon, description = 'Описание недоступно' }] }) {
    console.log([id,name,icon,description]);
    }