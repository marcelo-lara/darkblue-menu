FROM node:16
WORKDIR /usr/src/app

## build server
COPY ./package*.json ./
RUN npm install
COPY . .

## build client

## run
EXPOSE 5010
CMD [ "node", "server.js" ]