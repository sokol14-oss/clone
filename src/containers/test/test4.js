import Team from "../set.js";
import ErrorRepository from "../map";
test("Set add", ()=> {
    const user1 = new Team("Ivan","Bowman",30,30);
    add(user1);
    expect(add(user1)).toBe(Error("Ошибка"));
})

test("Set add all", ()=> {
    const user1 = new Team("Ivan","Bowman",30,30);
    const user2 = new Team("Oleg","Bowman",50,30);
    addAll(user1,user2);
    addAll(user1,user2);
    expect(add(user1)).toBe(Error("Ошибка"));
})

test("Error", ()=> {
    const map = new ErrorRepository();
    map.set(44,"not found");
    map.set(101,"Error");
    expect(translate(30)).toBe("Unknown error");
})