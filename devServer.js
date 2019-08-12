const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.dev.js");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

const Pool = require("pg").Pool;


const mysql = require("mysql");
var connection = mysql.createConnection({
  // host: "127.0.0.1",
  // database: "sakila",
  // user: "root",
  // password: "*()890Davidfarley",
  // port: '3306'
  host: "database-1.ctdcnhqdkf2p.us-west-1.rds.amazonaws.com",
database: "innodb",
user: "admin",
password: "Mybffjill1#",
port: '3306'
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }

  console.log("Connected as id " + connection.threadId);
});
app.get("/mysql", (req, response) => {
  console.log("insidepostgresfunction devserver mysql");
  try {
    connection.query("SELECT * FROM innodb.sakila;", function(
      error,
      results,
      fields
    ) {
      if (error) throw error;
  
      // results.forEach(result => {
      //   console.log(result);
      // });
      response.send(results);
    });
  
  
  } catch (error) {
    console.log(error);
    console.log(error.stack);
  }
  
});

const dataconfig = {
  // host: 'localhost',
  // user: 'postgres',
  // password: 'Mybffjill1#',
  // database: 'postgres'
  host: "db-postgresql-sfo2-52096-do-user-6398077-0.db.ondigitalocean.com",
  user: "doadmin",
  password: "grrctjs755fayjlt",
  database: "defaultdb",
  port: "25060",
  ssl: true
};

let pool = new Pool(dataconfig);

app.get("/postgres", (req, response) => {
  console.log("insidepostgresfunction devserver postgres");
  pool.query('SELECT * FROM public."Users"', (err, res) => {
    if (err) throw err;
    response.send(res.rows);
  });
});

app.get("/post", (req, response) => {
  console.log("insidepostgresfunction devserver post");

  pool.query("SELECT * FROM public.mytable", (err, res) => {
    if (err) throw err;
    response.send(res.rows);
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

var moment = require("moment-timezone");
var time = moment()
  .tz("America/Los_Angeles")
  .format("LLLL");
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`DevSever.js listening on port ${port}! And the tIme is ` + time)
);
