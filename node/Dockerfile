FROM node:alpine

WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./nodemon.json ./


RUN npm install
RUN npm install -g nodemon

COPY ./src/server.ts ./

CMD ["npm", "run", "dev"]