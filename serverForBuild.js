const express = require("express");
const path = require("path");

const app = express();

const { Pool } = require("pg");
const dataconfig = {
  host: "localhost",
  user: "postgres",
  password: "Mybffjill1#",
  database: "postgres"
};

let pool = new Pool(dataconfig);

app.use(express.static(__dirname + "/dist"));

app.get("/postgres", (req, response) => {
  console.log("inside server for build postgress");

  pool.query('SELECT * FROM public."Users"', (err, res) => {
    if (err) throw err;
    response.send(res.rows);
    //pool.end();
  });
});

// send the user to index html page inspite of the url
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist/index.html'));
// });

var dateFormat = require('dateformat');
var now = new Date();


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`serverForBuild.js listening on port ${port}! And the tIme is `+ dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")));
