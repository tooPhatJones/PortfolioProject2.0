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
    connection.query("SELECT Title, Author,  DateRecorded,  NumberOfPages, YearPublished, MyRating, AverageRating, Finished ,Publisher FROM innodb.Goodreads where CONCAT(Title,Author) like '%"+event.val+"%' order by DateRecorded desc;", 
    function (error, results, fields) {
      // And done with the connection.
      connection.release();
      console.log('testing');
      console.log(results);
      // Handle error after the release.
      if (error) callback(error);
      else callback(null,results);
    });
  });
};
