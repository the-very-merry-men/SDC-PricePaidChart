const Pool = require('pg').Pool;

const postgresDb = new Pool( {
  user: 'marbocheng',
  host: 'localhost',
  database: 'robinhood',
  password: 'mapo',
  port: 5432,
});

module.exports = postgresDb;
