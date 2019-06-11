const Pool = require('pg').Pool;

const postgresDb = new Pool( {
  user: 'marbocheng',
  host: 'localhost',
  database: 'robinhood',
  password: 'mapo',
  port: 5432,
});

module.exports = postgresDb;
/*
const getIncrements = (req, res) => {
  pool.query('SELECT * FROM increments WHERE id = 1000', (err, result)=> {
    if (err) {
      throw err;
    } 
    console.log(result.rows[0]);
    //res.status(200).json(result.rows);
  });
};


*/