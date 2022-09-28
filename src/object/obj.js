const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
}
function orderByProps(obj, [key] {
    for(const prop in obj) {
        const m = obj.sort((prev, next) => prev - next);
        return `${property}: ${object[property]}`;
    }
    if(!obj[key]) {
        return m;
    }
}
orderByProps(obj,["name", "level"]);

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