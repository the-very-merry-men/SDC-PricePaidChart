const cluster = require('cluster');
const os = require('os');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const postgresDb = require('../database/dbPostgres.js');


if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {

  const app = express();

  const getIncrements = (req, res) => {
  
    var stockId = req.params.stock;
  
    postgresDb.query(`SELECT stocks.week52high, stocks.week52low, stocks.average_price, stocks.current_price, increments.pia, increments.pppi, increments.pip FROM increments, stocks WHERE increments.stockId= ${stockId} AND stocks.id = ${stockId}`, (err, result)=> {
      if (err) {
        res.status(400);
        res.send();
  
      } 

      res.status(200);
      res.send(result.rows);

    });
  };


  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({ extended: true })); // parse application/json
  app.use(bodyParser.json());
  app.use(cors());


  /* GET /api/stocks/1 returns stock price paid 30 that points;
*/
  app.get('/api/stocks/:stock/', (req, res) => {
  //console.log('inside api/stocks/:stock');
    getIncrements(req, res);
    //console.log(req.params.stock);
  
  });


  app.post('/api/increments/', (req, res) => {

    const increment = req.body;

    var str = '(' + increment.stockId + ',' + increment.pip + ',' + increment.pia + ',' + increment.pppi + ')';


    postgresDb.query(`INSERT INTO increments(stockid,pip,pia,pppi) VALUES ${str}`, (err, result)=> {
      if (err) {
        res.status(400);
        res.send();

      } 
      res.status(202);
      res.send(result);
    });
  });


 
  const port = process.env.PORT || 3030;

  app.listen(port);

  console.log('app is running on port', port);
}

cluster.on('exit', (worker) => {
  console.log('mayday! mayday! worker', worker.id, ' is no more!');
  cluster.fork();
});