var mysql = require('mysql');

var pool  = mysql.createPool({
    host: "127.0.0.1",
    database: "sakila",
    user: "root",
    password: "*()890Davidfarley",
    port: "3306"
  });
// exports.handler =  (event, context, callback) => {
//   //prevent timeout from waiting event loop
//   context.callbackWaitsForEmptyEventLoop = false;
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('SELECT * FROM sakila.actor;', function (error, results, fields) {
      // And done with the connection.
      connection.release();
      console.log(results)
      // Handle error after the release.
    //   if (error) callback(error);
    //   else callback(null,results[0].emp_name);
    });
  });
