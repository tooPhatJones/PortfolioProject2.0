const Pool = require('pg').Pool;

const dataconfig = {
  host: 'db-postgresql-sfo2-52096-do-user-6398077-0.db.ondigitalocean.com',
  user: 'doadmin',
  password: 'grrctjs755fayjlt',
  database: 'defaultdb',
  port: '25060',
  ssl: true
}
exports.handler = function(event, context, callback) {

let pool = new Pool(dataconfig);
    const bod = '';
    pool.query("SELECT * FROM public.mytable", (err, res) => {
        if (err) throw err;
        bod = res.rows;
        //response.send(res.rows);
      
      })

callback(null, {
statusCode: 200,
body: bod
});
}