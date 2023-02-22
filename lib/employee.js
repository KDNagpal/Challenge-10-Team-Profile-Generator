class Employee {

    constructor(empName, empId, empEmail){
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail
        this.title = "Employee"
    };

    getEmpName() {
        return this.empName
    };

    getEmpId() {
        return this.empId
    };
    getEmpEmail() {
        return this.empEmail
    };
    getTitle() {
        return this.title
    };
}

module.exports = Employee;