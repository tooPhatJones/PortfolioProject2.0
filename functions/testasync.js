let mysql = require('async-mysql'),
connection,
rows;

const getreturn =  async function(){

    console.log(1)
connection = await mysql.connect({
    host: "127.0.0.1",
    database: "sakila",
    user: "root",
    password: "*()890Davidfarley",
    port: "3306"
});
console.log(2)
    rows = await connection.query('SELECT * FROM sakila.actor;');
    console.log(3)
    console.log(rows[0])
    console.log(4)
    try {
    await connection.query('INVALID_QUERY');
    } catch (e) {
    e;
    // [Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INVALID_QUERY' at line 1]
    }
    console.log(5)
}


getreturn();