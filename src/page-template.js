const createManager = function(manager) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Manager</h3></div>
    <div class="card-body text-dark">
    <h5 class="card-title">Name: ${manager.employeeName}</h5>
    <p class="card-text">ID: ${manager.id}<br><a href="mailto:${manager.email}">Contact Me!</a><br> Office Number: ${manager.officeNumber}</p>
    </div>
</div>`
}

const createIntern = function(intern) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Intern</h3></div>
    <div class="card-body text-dark">
    <h5 class="card-title"> Name: ${intern.employeeName}</h5>
    <p class="card-text"> ID: ${intern.id}<br><a href="mailto:${intern.email}">Contact Me!</a><br> School: ${intern.school}</p>
    </div>
</div>`
}

const createEngineer = function(engineer) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Engineer</h3></div>
    <div class="card-body text-dark">
    <h5 class="card-title"> Name: ${engineer.employeeName}</h5>
    <p class="card-text"> ID: ${engineer.id}<br><a href="mailto:${engineer.email}">Contact Me!</a><br><a href=https://github.com/${engineer.github}>Github</a></p>
    </div>
</div>`
}


function generateHTML(allEmployees) {

    const managerArray = [];
    const internArray = [];
    const engineerArray = [];

    for (let i = 0; i < allEmployees.length; i++) {
        let employee = allEmployees[i];
        let role = employee.getRole();

        switch (role) {
            case "Manager":
                managerArray.push(createManager(employee))
                break;

            case "Intern":
                internArray.push(createIntern(employee))
                break;

            case "Engineer":
                engineerArray.push(createEngineer(employee))
                break;
        }
    }

    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Team List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
    <h1>My Team</h2>
</header>
<section>
    ${engineerArray.join('')}
    ${managerArray.join('')}
    ${internArray.join('')}
</section>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateHTML;