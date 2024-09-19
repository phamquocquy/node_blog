const express = require("express");
const morgan = require("morgan");
const path = require("path");
// import { engine } from 'express-handlebars';
const { engine } = require("express-handlebars");
const methodOverride = require('method-override')

const route = require('./router')
const db = require('./config/db')

db.connect();

const app = express();
const port = 3000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'))

app.engine(".hbs", engine({ extname: ".hbs", helpers: {
  sum: (a, b) => a + b
} }));
app.set("view engine", ".hbs");
console.log(__dirname);
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
