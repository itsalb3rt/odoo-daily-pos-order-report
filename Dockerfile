FROM node:12.21.0-alpine3.11

RUN apk update

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn && yarn build

EXPOSE 80

CMD ["yarn", "start"]