
const express = require('express');
const path = require('path');

const app = express();


const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query("SELECT * FROM public.\"Users\"", (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))