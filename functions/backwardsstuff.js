"use strict";
require("babel-polyfill");
const mysql = require("mysql");


exports.handler = async function(event, context, callback) {
  var connection = mysql.createConnection({
  host: "database-1.ctdcnhqdkf2p.us-west-1.rds.amazonaws.com",
  database: "innodb",
  user: "admin",
  password: "Mybffjill1#",
  port: "3306"
});

  connection.connect(function(err) {
    if (err) {
      console.error("Error connecting: " + err.stack);
      return;
    }
    console.log("Connected as id " + connection.threadId);
  });
let res = 'this text should never sho'

 await connection.query(
      "SELECT * FROM innodb.sakila where idsakila between  " +
        event.min +
        " and " +
        event.max +
        ";",
      function(error, results, fields) {
        if (error) throw error;

     
        console.log('after res is assinged')
        
        results.forEach(result => {
          console.log(result);
        });
  res = results;
           connection.end();
      }
    );
 console.log('logging res ' +res)
 
   callback(null, {
    statusCode: 200,
          //body: "testing text",
           body: JSON.stringify('teststring'),
          json: true
        });
 
};
