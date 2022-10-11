export const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
}
export function orderByProps(obj,arrKey) {
   const array = [];
   const props = [];
   for (const [key, value] of Object.entries(obj2)) {
    const obj2 ={};
    obj2.key = key;
    obj2.value = value;
    array.push(obj2);
   array.sort((a,b) => a > b);
  const array2 =  array.filter(key => {
    key === arrKey[i];
    props.push(key);
  }
  const keys = props.concat(array);
  return keys;
}
const showAttacks = ({ special }) => {
  return special.map((item) => {
    const { id, name, icon, description = 'Описание недоступно' } = item;
    return { id, name, icon, description };
  });
};

export { orderByProps, showAttacks };


  

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