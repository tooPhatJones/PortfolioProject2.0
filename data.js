const Pool = require('pg').Pool;

const config = {
  host: 'localhost',
  user: 'postgres',
  password: 'Mybffjill1#',
  database: 'postgres'
}

let pool = new Pool(config);