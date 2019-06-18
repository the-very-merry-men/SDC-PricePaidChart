const Pool = require('pg').Pool;

// const postgresDb = new Pool( {
//   user: 'marbocheng',
//   host: 'localhost',
//   database: 'robinhood',
//   password: 'mapo',
//   port: 5432,
// });

const postgresDb = new Pool( {
  user: 'postgres',
  host: 'ec2-18-223-156-234.us-east-2.compute.amazonaws.com',
  database: 'postgres',
  password: 'password',
  port: 5432,
});



module.exports = postgresDb;
