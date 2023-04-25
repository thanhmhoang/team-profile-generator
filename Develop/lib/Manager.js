// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, title, officeNumber) {
        super(name, id, email, title)
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }

    getTitle() {
        return this.title;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;