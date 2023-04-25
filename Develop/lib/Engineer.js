// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, title, github) {
        super(name, id, email, title)
        this.title = "Engineer";
        this.github = github;
    }

    getTitle() {
        return this.title;
    }

    getGitHub() {
        return this.github;
    }

}

module.exports = Engineer;