// create Employee class
class Employee {
    constructor (employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

//create a constructor function that takes in name, id, email
// and sets them as properties of employee 
//such as this.name= name
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return this.constructor.name;
}
}




// Employee.getName();
// Employee.getId();
// Employee.getEmail();
// Employee.getRole();

module.exports = Employee;