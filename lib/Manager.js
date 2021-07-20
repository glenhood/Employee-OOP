// import Employee class
const Employee = require("./Employee")
// create Manager which extends Employee
class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
      super(employeeName, id, email);
      this.officeNumber = officeNumber;
    }

//create a constructor function that takes in name, id, email, officeNumber
//use super method to pass name, id, email
// and sets them as properties of employee 
//such as this.officeNumber= officeNumber
getRole() {
    this.constructor.name;
}
getOfficeNumber() {
    this.officeNumber;
}
}
module.exports = Manager;