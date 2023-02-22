const Employee = require('./employee');

class Engineer extends Employee {
    constructor(empName, empId, empEmail, githubUsername) {
        super(empName, empId, empEmail);
        this.githubUsername = githubUsername;
        this.title = "Engineer";
    };

    getGitHubUser() {
        return this.githubUsername
    };
}

module.exports = Engineer;