var mysql = require('mysql');

var pool  = mysql.createPool({
    host: "database-1.cywixmpttxrs.us-east-2.rds.amazonaws.com",
    database: "innodb",
    user: "admin",
    password: "Mybffjill1#",
    port: "3306"
  });
exports.handler =  (event, context, callback) => {
  //prevent timeout from waiting event loop
  context.callbackWaitsForEmptyEventLoop = false;
  pool.getConnection(function(err, connection) {
    // Use the connection
     if (err) throw err;
     connection.query("insert into innodb.contact (name,phonenumber,message,email) values (\'"+event.name+"\',\'"+event.phonenumber+"\',\'"+event.message+"\',\'"+event.email+"\')", 
    function (error, results, fields) {
      // And done with the connection.
      connection.release();
      console.log('testing ContactUpdate');
      console.log(results);
      // Handle error after the release.
      if (error) callback(error);
      else callback(null,results);
    });
  });
};
