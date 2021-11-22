// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer')
// const Intern = require('../lib/Intern')


const createManager = function (Manager) {
  return `
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${Manager.getName()} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Manager.getId()}</li>
      <li class="list-group-item">EMAIL: ${Manager.getEmail()}</li>
      <li class="list-group-item">OFFICE NUMBER: ${Manager.getOfficeNumber()}</li>
    </ul>
  </div>
</div>`;
};

const createEngineer = function (engineer) {
  return `
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <p class="card-text">Name: ${engineer.name} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">EMAIL: ${engineer.email}</li>
      <li class="list-group-item">Github: ${engineer.github}</li>
    </ul>
  </div>
</div>`;
};

const createIntern = function (intern) {
  return `
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <p class="card-text">Name: ${intern.name} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">EMAIL: ${intern.email}</li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>
</div>`;
};

// push array to page 
generateHTML = (data) => {
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      if (role === 'Manager') {
          const ManagerCard = createManager(employee);
          pageArray.push(ManagerCard);
      }
      if (role === 'Engineer') {
          const engineerCard = createEngineer(employee);
          pageArray.push(engineerCard);
      }

      if (role === 'Intern') {
          const internCard = createIntern(employee);
          pageArray.push(internCard);
      }
  }
  const employeeCards = pageArray.join('')

  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

const createFile = function (employeeCards) {
  return `  
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Team Profile Generator </title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<main>
<div class="container">
    <div class="row justify-content-center m-4" id="team-cards">
        
        ${employeeCards}
    </div>
</div>
</main>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>  
  `;
};

module.exports = createFile;
