// import Employee class
const Employee = require("./Employee")
// create Engineer which extends Employee
class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
      super(employeeName, id, email);
      this.github = github;
    }

//create a constructor function that takes in name, id, email, github
//use super metheod to pass name, id, email
// and sets them as properties of employee 
//such as this.github= github

getRole() {
    return ("Engineer")
}
getGithub() {
    return this.github;
}
}
module.exports = Engineer;