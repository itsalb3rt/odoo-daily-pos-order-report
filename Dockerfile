FROM node:12.21.0-alpine3.11

RUN apk update

WORKDIR /app

COPY . .

RUN yarn && yarn build

EXPOSE 80

CMD ["yarn", "start"]