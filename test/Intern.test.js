const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    it('should return an object containing "employeeName, id, email, school" property when called with the "new" keyword', () => {
        const newIntern = new Intern();
        expect("employeeName" in newIntern).toEqual(true);
        expect("id" in newIntern).toEqual(true);
        expect("email" in newIntern).toEqual(true);
        expect("school" in newIntern).toEqual(true);
    })
    it("See if school returns value", () => {
        const testValue = "UT";
        const newIntern = new Intern("Emmitt", 1, 1, testValue);
        expect(newIntern.school).toBe(testValue);
    });
    it("See if getRole returns Intern", () => {
        const testValue = "Intern";
        const newIntern = new Intern(testValue);
        expect(newIntern.getRole()).toBe("Intern");
    });
    it("See if getSchool returns Intern", () => {
        const testValue = "Intern";
        const newIntern = new Intern("Emmitt", 1, 1, testValue);
        expect(newIntern.getSchool()).toBe(testValue);
    });
})
