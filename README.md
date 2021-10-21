# Odoo daily orders report generator


Well i have a very special clients... but here a tool for get reports from sales.

---

# Development

Install all dependencies

```bash
$ npm install
```

**ENV file**

The `env` file contains a series of variables that modify the behavior of the api.


For development

```bash
$ npm run start
```

**Build**

For created a production version
```bash
$ npm run build
```

**Run Production**

```bash
$ npm run production
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
