import Person from "./person"
import Team from "./team"

export const player1 = new Person ({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
})
export const player2 = new Person ({
    name: 'Стрелок',
    type: 'Shordsman',
    health: 50,
    level: 1,
    attack: 30,
    defence: 10
})

export const team = new Team();
team.add(player1,player2);
console.log(...team);