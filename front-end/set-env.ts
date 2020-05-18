const fs = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';

// file structure
const enviromentFile = `
  export const environment = {
    production: ${process.env.PRODUCTION},
    apiUrl: '${process.env.API_BASE_URL}',
    googleClientID: '${process.env.G_CLIENT_ID}'
  };
 `;

// write file
fs.writeFile(targetPath, enviromentFile, (error: any) => {
  if (error) {
    throw console.log('Error escribiendo archivo environment: ', error);
  } else {
    console.log('Archivo environment escrito correctamente');
  }
});
