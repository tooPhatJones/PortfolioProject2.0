const express = require('express');
const path = require('path');
const fs = require('fs')
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.js');
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

//app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
// app.get('/test', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '/index.html'));
// });

const Pool = require('pg').Pool;

const dataconfig = {
  host: 'localhost',
  user: 'postgres',
  password: 'Mybffjill1#',
  database: 'postgres'
}

let pool = new Pool(dataconfig);

app.get('/postgres', (req, response) => {
    console.log("insidepostgresfunction")
  
   standin = {};
   pool.query("SELECT * FROM public.\"Users\"", (err, res) => {
    console.log(err, res)
    standin = JSON.stringify({ x: 5, y: 6 });
    response.send(res)
    pool.end()
  
  })
  console.log(standin)
  const abc = fs.readdirSync('./')
  console.log(abc);
    return standin;
  });










const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))