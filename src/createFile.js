const { fs } = require("fs");




function createFile(data) {
  return`  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div>Something Random is here</div>
  </body>
  </html>
  `
};

module.exports = createFile;