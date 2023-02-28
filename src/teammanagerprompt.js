const teamManagerPrompts = [

    {
        name:'managerName',
        type: 'input',
        message:'What is the Team Managers name?',
    },
    {
        name:'managerEmpId',
        type: 'input',
        message:'What is the Team Managers employee ID number?',
    },
    {
        name:'managerEmail',
        type: 'input',
        message:'What is the Team Managers email?',
    },
    {
        name:'managerOfficeNum',
        type: 'input',
        message:'What is the Team Managers office numner (if none enter N/A)?',
    },
]

module.exports = teamManagerPrompts;