const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const setEnv = () => {
  const envFilePath = './environment.ts';

  if (fs.existsSync(envFilePath)) {
    console.log('O arquivo environment.ts existe na pasta raiz.');
    console.log(process.env.API_URL);
  } else {
    console.log('O arquivo environment.ts não foi encontrado na pasta raiz. Criando...');

    // Criar o conteúdo do arquivo environment.ts
    const envContent = `export const environment = {
  apiUrl: "${process.env.API_URL}",
  production: true
};`;

    // Escrever o conteúdo no arquivo
    fs.writeFileSync(envFilePath, envContent);

    console.log('Arquivo environment.ts criado com sucesso.');
  }
};

setEnv();
