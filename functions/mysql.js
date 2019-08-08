//require("babel-polyfill");
const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  database: "sakila",
  user: "root",
  password: "*()890Davidfarley",
  port: '3306'
// host: "database-1.ctdcnhqdkf2p.us-west-1.rds.amazonaws.com",
// database: "innodb",
// user: "admin",
// password: "Mybffjill1#",
// port: "3306"
});

exports.handler = function(event, context, callback) {
  connection.connect(function(err) {
    if (err) {
      console.error("Error connecting: " + err.stack);
      return;
    }
    console.log("Connected as id " + connection.threadId);
  });
  try {
      connection.query("SELECT * FROM sakila.actor;", function(
      error,
      results,
      fields
    ) {
      if (error) throw error;

      results.forEach(result => {
        console.log(result);
      });
    });


    connection.end();
  } catch (error) {
    console.log(error);
    console.log(error.stack);
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(results),
    json: true
  });

};
