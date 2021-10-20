FROM node:12.21.0-alpine3.11

RUN apk update

WORKDIR /app

RUN npm install -g nodemon

EXPOSE 80

CMD ["yarn", "start"]