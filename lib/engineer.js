const Employee = require('./employee');

class Engineer extends Employee {
    constructor(empName, empId, empEmail, github) {
        super(empName, empId, empEmail);
        this.github = github;
        this.title = "Engineer";
    };

    getGitHub() {
        return this.github
    };
}

module.exports = Engineer;