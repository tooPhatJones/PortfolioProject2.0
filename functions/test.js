require("babel-polyfill");
const Pool = require("pg").Pool;

const dataconfig = {
  host: "db-postgresql-sfo2-52096-do-user-6398077-0.db.ondigitalocean.com",
  user: "doadmin",
  password: "grrctjs755fayjlt",
  database: "defaultdb",
  port: "25060",
  ssl: true

};
exports.handler = async function(event, context, callback) {
  let pool = new Pool(dataconfig);
  pool.connect(err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully connected to host");
    }
  });
  let response = "placeholdertext";
  try {
    const qu = "SELECT * FROM public.mytable";
    response = await pool.query(qu);
    console.log(response.rows);
  } catch (error) {
    console.log(error);
    console.log(error.stack);
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.rows),
    json: true
  });
};
