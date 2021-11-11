# Odoo daily orders report generator


Well i have a very special clients... but here a tool for get reports from sales.

![image](https://user-images.githubusercontent.com/35310226/141217457-1d48060a-a39f-4d4e-abdb-76746c005a33.png)


# Features

- Easy to use
- Filter by date (default set the current date)
- Clean print

---

# Development

Install all dependencies

```bash
$ yarn install
```

**ENV file**

The `env` file contains a series of variables that modify the behavior of the api.

:warning: You need to set up the `AUTHORIZATION_KEY` env var, this var is a simple "token" for allowing requests to the API.

1 - Go to `.env` and generate a random key and set this to `AUTHORIZATION_KEY`
2 - Go to `http://localhost:5000/report`
3 - In the browser open the developer console and go to `application -> Local Storage` and create a key `token` and set as value the `AUTHORIZATION_KEY`


For development

```bash
$ yarn dev
```

**Build**

For created a production version
```bash
$ yarn build
```

**Run Production**

```bash
$ yarn start
```

# Docker

## Development

```bash
$ docker-compose -f docker-compose.dev.yml up --build
```

## Production

```bash
$ docker-compose up -d
```

# Web APP

```bash
http://localhost:5000/report
```

---


## Query string

**Filters**

**between**

For example for check createdAt from `2020-09-01` to `2020-09-30`.

```
api/visits?createdAt=between:2020-09-01,2020-09-30
```

**Like**

For using `like` operator you can pass `search` query string var with `where` for indicate columns.

```
api/visits?search=some&where=reasonVisit
```

This search for `some` in `reasonVisit` column.

**Limit and offset**

You can use `limit` and `offset` for pagination.

```
api/visits?limit=10&page=2
```

This example returns the records between 11 to 20

**Order**

Use `-` sign for descending while `+` for ascending, by default if sign is not presented it will automatically set to `+` sign (ex: `sort=-created_at` or `sort=+created_at`). Value can be separated by a comma if multiple sort condition is needed (ex: `sort=id,name`).

```
api/visits?sort=-created_at
```

More information: [https://github.com/perbert27/sequelize-querystring-converter](https://github.com/perbert27/sequelize-querystring-converter)
