# d3-sql

A hacky attempt to make a d3-like function to query from sqlite files.

To run a query on a sqlite file:

```js
d3.sql("/path/to/db.sqlite", query).then(function(data) {
    console.log(data); // [{"Hello": "world"}, ...]
});
```

*sql-wasm.js* and *sql-wasm.wasm* from [https://github.com/kripken/sql.js](https://github.com/kripken/sql.js), *Chinook_Sqlite.sqlite* from [https://github.com/lerocha/chinook-database/](https://github.com/lerocha/chinook-database/)