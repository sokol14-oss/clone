import {Validator } from "../nickname.js"
test("Valid name", ()=> {
    const user = new Validator("11@jim");
    expect(validateUsername(user)).toBe(false);
})