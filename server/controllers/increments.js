const postgresDb = require('../../database/dbPostgres.js');


const getIncrements = (stockId, req, res) => {
  console.log('inside getincrements: stockId=', stockId);
  postgresDb.query(`SELECT * FROM increments, stocks WHERE increments.stockId = ${stockId} AND stocks.id=${stockId}`, (err, result)=> {
    if (err) {
      res.status(400);
      res.send();

    } 
    //console.log(result.rows);
    res.status(200);
    res.send(result.rows);
    //callback(null, result.rows[0]);
    //res.status(200).json(result.rows);
  });
};

module.exports = {
  getIncrements: getIncrements,
    
};