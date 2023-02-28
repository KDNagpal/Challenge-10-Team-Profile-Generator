const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const teammanagerPrompt = require('./src/teammanagerprompt');
const Manager = require('./lib/teammanager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const members = [];
const generateWebpage = require('./src/htmlTemplate');
const dist_dir = path.resolve(__dirname, 'dist');
const output = path.join(dist_dir, 'teamInfo.html')

const nextStep = () => {
    inquirer.prompt([
        {
            name: 'nextStep',
            type: 'list',
            message: 'Pick what you would like to do:',
            choices:['Add an Engineer', 'Add an Intern', 'Finish set up'],
        },
    ])
    .then((input) => {
        if (input.nextStep === 'Add an Engineer') {
            engineerPrompt();
        } else if (input.nextStep === 'Add an Intern') {
            internPrompt();
        }else {
            console.log('Bye');
            createHTML();
        }
    })
}

const promptManager = () => {
    inquirer.prompt(teammanagerPrompt)
        .then((input) =>{
            const manager  = new Manager(input.managerName, input.managerEmpId, input.managerEmail, input.managerOfficeNum)
            members.push(manager);
            nextStep()
        })
};

const engineerPrompt = () => {
    inquirer.prompt([
        {
            name: 'engineerName',
            type: 'input',
            message:'What is the engineers name?',
        },
        {
            name: 'engineerId',
            type: 'input',
            message:'What is the engineers employee ID?',
        },
        {
            name: 'engineerEmail',
            type: 'input',
            message:'What is the engineers email?',
        },
        {
            name: 'engineerGithub',
            type: 'input',
            message:'What is the engineers Github username?',
        },
    ])
    .then((input) => {
        const engineer = new Engineer(input.engineerName, input.engineerId, input.engineerEmail, input.engineerGithub);
        members.push(engineer);
        nextStep();
    })
}

const internPrompt = () => {
    inquirer.prompt([
        {
        name: 'internName',
        type: 'input',
        message: 'What is the interns name?',
        },
        {
        name: 'internId',
        type: 'input',
        message: 'What is the interns employee ID?',
        },
        {
        name: 'internEmail',
        type: 'input',
        message: 'What is the interns Email?',
        }, 
        {
        name: 'internSchool',
        type: 'input',
        message: 'Where did the intern attend school?',
        },
    ])
        .then((input) => {
            const intern = new Intern(input.internName, input.internId, input.internEmail, input.internSchool);
            members.push(intern);
            nextStep();
        })
}
promptManager()

const createHTML = () => {
    if (!fs.existsSync(dist_dir)) {
        fs.mkdirSync(dist_dir);
    } else {
        fs.writeFileSync(output, generateWebpage(members), 'utf-8');
        console.log('Check the dist folder for your teams info!');
    }
}