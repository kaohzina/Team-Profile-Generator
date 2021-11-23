const createManager = function (Manager) {
  return `
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${Manager.name} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Manager.id}</li>
      <li class="list-group-item">EMAIL: ${Manager.email}</li>
      <li class="list-group-item">OFFICE NUMBER: ${Manager.officeNumber}</li>
    </ul>
  </div>
</div>`
}
const createEngineer = function (Engineer) {
  return `
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <p class="card-text">Name: ${Engineer.name} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Engineer.id}</li>
      <li class="list-group-item">EMAIL: ${Engineer.email}</li>
      <li class="list-group-item">Github: ${Engineer.github}</li>
    </ul>
  </div>
</div>`
}
const createIntern = function (Intern) {
  return `
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <p class="card-text">Name: ${Intern.name} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Intern.id}</li>
      <li class="list-group-item">EMAIL: ${Intern.email}</li>
      <li class="list-group-item">School: ${Intern.school}</li>
    </ul>
  </div>
</div>`
}

// push array to page
generateHTML = (data) => {
  pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerProfile = createManager(employee);
      pageArray.push(managerProfile)
    } 
  
    if (role === 'Engineer') {
      const engineerProfile = createEngineer(employee);
      pageArray.push(engineerProfile)

    } 
    if (role  === 'Intern') {
      const internProfile = createIntern(employee);
      pageArray.push(internProfile)
    }
  }
  const cards = pageArray.join('')
  const profile = createFile(cards)
  return profile;
}

const createFile = function (cards) {
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
        
        ${cards}
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
