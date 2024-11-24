# Use uma imagem oficial do Node.js como base
FROM node:18

# Crie e defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json (se existir) para o container
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o restante do código-fonte do seu projeto para o container
COPY . .

# Execute o script npm run (substitua <script> pelo nome do script que você deseja rodar)
CMD ["npm", "run", "start"]
