//require Employee
const Employee = require("../lib/Employee.js")

// create test for employee
describe("Employee", () => {
    it('should return an object containing "employeeName, id, email" property when called with the "new" keyword', () => {
        const newEmployee = new Employee();
        expect("employeeName" in newEmployee).toEqual(true);
        expect("id" in newEmployee).toEqual(true);
        expect("email" in newEmployee).toEqual(true);
    })
    it("Can initiate an new employee", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });
    it("Can set name via constructor", () => {
        const testName = "Troy";
        const newEmployee = new Employee(testName)
        expect(newEmployee.employeeName).toBe(testName)
    });
    it("Can set id via contructor", () => {
        const testId = 1;
        const newEmployee = new Employee("Troy", testId);
        expect(newEmployee.id).toBe(testId);
    });
    it("Can set email via contructor", () => {
        const testEmail = "test@test.com";
        const newEmployee = new Employee("Troy", 1, testEmail);
        expect(newEmployee.email).toBe(testEmail);
    });
    it("See if getName returns value", () => {
        const testValue = "Emmitt";
        const newEmployee = new Employee(testValue);
        expect(newEmployee.getName()).toBe(testValue);
    });
    it("See if getId returns value", () => {
        const testValue = 1;
        const newEmployee = new Employee("Emmitt", testValue);
        expect(newEmployee.getId()).toBe(testValue);
    });
    it("See if getEmail returns value", () => {
        const testValue = "test@test.com";
        const newEmployee = new Employee("Emmitt", 1, testValue);
        expect(newEmployee.getEmail()).toBe(testValue);
    });
    it("See if getRole returns employee", () => {
        const testValue = "Employee";
        const newEmployee = new Employee(testValue);
        expect(newEmployee.getRole()).toBe("Employee");
    });
    
      
})

// test to see if type of new employee is an object

// test if can set name via constructor

// test if can set id via constructor

// test if can set email via constructor

//test to see if getName() returns name test value

//test to see if getId() returns id test value

//test to see if getEmail() returns email test value

//test to see if getRole() returns "Employee"