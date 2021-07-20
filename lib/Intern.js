// import Employee class
const Employee = require("./Employee")
// create Intern which extends Employee
class Intern extends Employee {
    constructor(employeeName, id, email, school) {
      super(employeeName, id, email);
      this.school = school;
    }

//create a constructor function that takes in name, id, email, school
//use super metheod to pass name, id, email
// and sets them as properties of employee 
//such as this.school= school
getRole() {
    return this.constructor.name;
}
getSchool() {
    return this.school;
}
}
module.exports = Intern;