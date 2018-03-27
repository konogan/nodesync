FROM node:slim

WORKDIR /var/www/synctest

COPY package*.json ./

RUN npm install --only=production

RUN npm install -g nodemon

COPY ./ ./

EXPOSE 3004

# USER node

CMD [ "node", "./app/app.js" ]
