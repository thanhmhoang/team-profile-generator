// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor (name, id, email, title, school) {
        super(name, id, email, title)
        this.title = "Intern";
        this.school = school;
    }

    getTitle() {
        return this.title;
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;