
const express = require('express');
const path = require('path');

const app = express();


const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

pool.connect();

pool.query("SELECT * FROM public.\"Users\"", (err, res) => {
  if (err) throw err;
  response.send(res)
  //pool.end();
});

app.use(express.static(__dirname + '/dist'));

app.get('/postgres', (req, response) => {
  console.log("insidepostgresfunction")

 pool.query("SELECT * FROM public.\"Users\"", (err, res) => {
  if (err) throw err;
  response.send(res.rows);
  //pool.end();
})
});

// send the user to index html page inspite of the url
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))