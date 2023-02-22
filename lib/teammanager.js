const Employee = require('./employee');

class Manager extends Employee {
    constructor(empName, empId, empEmail, officeNum) {
        super(empName, empId, empEmail);
        this.officeNum = officeNum;
        this.title = "Manager";
    };

    getOfficeNum() {
        return this.officeNum
    };
}

module.exports = Manager;