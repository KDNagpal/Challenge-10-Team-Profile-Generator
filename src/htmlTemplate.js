const generateManager = (team) => {
    const generateManagerCard = (manager) =>
        `<div class="column wbox m-1 p-4 manager">
        <h2 class='name'>${manager.empName}</h2>
        <h4 class='title'>${manager.title}</h4>
        <p>ID: ${manager.empId}</p>
        <p>Email: ${manager.empEmail}</p>
        <p>Office Number: ${manager.officeNum}</p>
        </div>`;
    const htmlInfo = [];
    htmlInfo.push(
        team.filter((employee) => employee.getTitle() === 'Manager')
            .map((manager) => generateManagerCard(manager)).join(''))
    return htmlInfo.join('');
};




const generateTeam = (team) => {

    const generateEngineerCard = (engineer) =>
        `<div class="column wbox m-1 p-4 engineer">
        <h2 class='name'>${engineer.empName}</h2>
        <h4 class='title'>${engineer.title}</h4>
        <p>ID: ${engineer.empId}</p>
        <p>Email: ${engineer.empEmail}</p>
        <p>Github: ${engineer.githubUsername}</p>
        </div>`;

    const generateInternCard = (intern) =>
        `<div class="column wbox m-1 p-4 intern">
        <h2 class='name '>${intern.empName}</h2>
        <h4 class='title'>${intern.title}</h4>
        <p>ID: ${intern.empId}</p>
        <p>Email: ${intern.empEmail}</p>
        <p>School: ${intern.schoolName}</p>
        </div>`;

    const htmlInfo = [];
    htmlInfo.push(
        team.filter((employee) => employee.getTitle() === 'Engineer')
            .map((engineer) => generateEngineerCard(engineer)).join('')),
        htmlInfo.push(
            team.filter((employee) => employee.getTitle() === 'Intern')
                .map((intern) => generateInternCard(intern)).join(''))
    return htmlInfo.join('');
};

const generateWebpage = (team) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="./styles.css">
    <title>Team Info</title>
    </head>
    <body>
        <div class="columns m-4 p-4 is-centered">
            <h1 class="meet" > Meet the Team!!</h1>
        </div>
        <div class="columns m-4 p-4 is-centered">
            <div class="column is-half">
            ${generateManager(team)}
            </div>
        </div>
        
            <div class="columns m-0 p-1 team">
                ${generateTeam(team)}
            </div>
        
        </div>
      <script src="./script.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    </body>
    </html>`;

module.exports = generateWebpage;