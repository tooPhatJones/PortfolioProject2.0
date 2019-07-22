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


const Pool = require('pg').Pool;

const dataconfig = {
  host: 'localhost',
  user: 'postgres',
  password: 'Mybffjill1#',
  database: 'postgres'
}

let pool = new Pool(dataconfig);

app.get('/postgres', (req, response) => {
    console.log("insidepostgresfunction devserver")
  
   pool.query("SELECT * FROM public.\"Users\"", (err, res) => {
    if (err) throw err;
    response.send(res.rows);
    //pool.end();
  })
  });



  var moment = require('moment-timezone');
  var time = moment().tz("America/Los_Angeles").format('LLLL');
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`DevSever.js listening on port ${port}! And the tIme is `+ time));