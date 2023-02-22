const Employee = require('./employee');

class Intern extends Employee {
    constructor(empName, empId, empEmail, schoolName) {
        super(empName, empId, empEmail);
        this.schoolName = schoolName;
        this.title = "Intern";
    };

    getInternSchool() {
        return this.schoolName
    };
}

module.exports = Intern;