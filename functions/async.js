require("babel-polyfill");
let mysql = require('async-mysql');


const test = async function() {
    connection = await mysql.connect({
        host: "127.0.0.1",
        database: "sakila",
        user: "root",
        password: "*()890Davidfarley",
        port: "3306"
        // host: "database-1.ctdcnhqdkf2p.us-west-1.rds.amazonaws.com",
        // database: "innodb",
        // user: "admin",
        // password: "Mybffjill1#",
        // port: "3306"
      });
//    await connection.connect(function(err) {
//     if (err) {
//       console.error("Error connecting: " + err.stack);
//       return;
//     }
//     console.log("Connected as id " + connection.threadId);
//   });
  let q = "this should not get printed";
  try {
    rows = await connection.query('SELECT * FROM sakila.actor;');
    console.log(3)
    console.log(rows[0])
    console.log(4)
    }
    
  catch (error) {
    console.log(error);
    console.log(error.stack);
  }
};
test();

// require("babel-polyfill");
// const mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "127.0.0.1",
//   database: "sakila",
//   user: "root",
//   password: "*()890Davidfarley",
//   port: "3306"
//   // host: "database-1.ctdcnhqdkf2p.us-west-1.rds.amazonaws.com",
//   // database: "innodb",
//   // user: "admin",
//   // password: "Mybffjill1#",
//   // port: "3306"
// });

// const test = async function() {
//    connection.connect(function(err) {
//     if (err) {
//       console.error("Error connecting: " + err.stack);
//       return;
//     }
//     console.log("Connected as id " + connection.threadId);
//   });
//   let q = "this should not get printed";
//   try {
//      connection.query("SELECT * FROM sakila.actor;", function(
//       error,
//       results,
//       fields
//     ) {
//       if (error) throw error;

//       // results.forEach(result => {
//       //   console.log(result);
//       // });
//       console.log(results[0]);
//       connection.end();
//     }).then( a => console.log('then' + a));
//     console.log('afterthe hign')
//   } catch (error) {
//     console.log(error);
//     console.log(error.stack);
//   }
// };
// test();