const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    it('should return an object containing "employeeName, id, email, office number" property when called with the "new" keyword', () => {
        const newManager = new Manager();
        expect("employeeName" in newManager).toEqual(true);
        expect("id" in newManager).toEqual(true);
        expect("email" in newManager).toEqual(true);
        expect("officeNumber" in newManager).toEqual(true);
    })
    it("See if school returns value", () => {
        const testValue = 1234;
        const newManager = new Manager("Emmitt", 1, 1, testValue);
        expect(newManager.officeNumber).toBe(testValue);
    });
    it("See if getRole returns Manager", () => {
        const testValue = "Manager";
        const newManager = new Manager(testValue);
        expect(newManager.getRole()).toBe("Manager");
    });
    it("See if getSchool returns Manager", () => {
        const testValue = 1234;
        const newManager = new Manager("Emmitt", 1, 1, testValue);
        expect(newManager.getOfficeNumber()).toBe(testValue);
    });
})
