FROM node:lts-alpine

RUN mkdir -p /srv/app/fr-shohin-admin-client
WORKDIR /srv/app/fr-shohin-admin-client

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm", "start" ]