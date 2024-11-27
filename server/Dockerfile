FROM node:18
WORKDIR /app/server

COPY package.json package-lock.json ./

RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]