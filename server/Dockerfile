FROM node:16
WORKDIR /usr/src/app

## build
COPY package*.json ./
RUN npm install
COPY . .

## run
EXPOSE 8080
CMD [ "node", "server.js" ]