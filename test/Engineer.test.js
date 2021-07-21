const Engineer = require("../lib/Engineer.js");
describe("Engineer", () => {
    it('should return an object containing "employeeName, id, email, github" property when called with the "new" keyword', () => {
        const newEngineer = new Engineer();
        expect("employeeName" in newEngineer).toEqual(true);
        expect("id" in newEngineer).toEqual(true);
        expect("email" in newEngineer).toEqual(true);
        expect("github" in newEngineer).toEqual(true);
    })
    it("See if github returns value", () => {
        const testValue = "emmitt";
        const newEngineer = new Engineer("Emmitt", 1, 1, testValue);
        expect(newEngineer.github).toBe(testValue);
    });
    it("See if getRole returns Engineer", () => {
        const testValue = "Engineer";
        const newEngineer = new Engineer(testValue);
        expect(newEngineer.getRole()).toBe("Engineer");
    });
    it("See if getGithub returns employee", () => {
        const testValue = "emmitt";
        const newEngineer = new Engineer("Emmitt", 1, 1, testValue);
        expect(newEngineer.getGithub()).toBe(testValue);
    });
})
