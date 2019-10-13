FROM node:lts-alpine

RUN mkdir -p /srv/app/fr-shohin-admin-server
WORKDIR /srv/app/fr-shohin-admin-server

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]