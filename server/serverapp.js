require('newrelic');
const express = require('express');
const app = express();
//const mysql = require('mysql');
const bodyParser = require('body-parser');
//const path = require('path');
//const database = require('./database.js');
const cors = require('cors');

//const relic = require('newrelic');

//const postgres = require('./controllers/increments.js');
const redis = require('redis');
const client = redis.createClient();
const postgresDb = require('../database/dbPostgres.js');


//var cache = 0;
// const getStocks = (req,res) => {
//   var stockId = req.params.stock;

    
//   postgresDb.query(`SELECT  * FROM stocks WHERE id = ${stockId}`, (err, result)=> {
//     if (err) {
//       res.status(400);
//       res.send();
  
//     } 

// }

const getIncrements = (req, res) => {
  
  var stockId = req.params.stock;
  //console.log('inside getincrements: stockId=', stockId);
  //console.log(stockId); 
  //stockId = 1;
  //`SELECT * FROM stocks INNER JOIN increments ON stocks.id = increments.stockid AND stocks.id = ${stockId}`;
  // postgresDb.query(`SELECT * FROM increments, stocks WHERE increments.stockId = ${stockId} AND stocks.id=${stockId}`, (err, result)=> {
  //   if (err) {
  //     res.status(400);
  //     res.send();

  //   } 
  
  postgresDb.query(`SELECT stocks.week52high, stocks.week52low, stocks.average_price, stocks.current_price, increments.pia, increments.pppi, increments.pip FROM increments, stocks WHERE increments.stockId= ${stockId} AND stocks.id = ${stockId}`, (err, result)=> {
    if (err) {
      res.status(400);
      res.send();
  
    } 
  

    //   } 
    // }
    //console.log(result.rows);
    // Set the string-key:stockId in our cache. With the contents of the cache : bookId
    // Set cache expiration to 10 minutes (600 seconds)

    client.set(stockId, JSON.stringify(result.rows));
    res.status(200);
  
    res.send(result.rows);
    

    //callback(null, result.rows[0]);
    //res.status(200).json(result.rows);
  });
};

const getCache = (req, res) => {
  let stockId = req.params.stock;
  //console.log('inside getCache', req.params.stock);
  client.get(stockId, (err, result)=> {
    if (result) {
      //console.log('inside cache!', result);
      console.log('hit cache!', cache++);
      res.status(200);
      res.send(result);
    } else {
      //console.log('calling getIncrements inside cache');
      getIncrements(req, res);
    }
  });
};

/*
Create / POST - create a new item
Read / GET - read an item
Update / PUT - update an item
Delete / DELETE - delete an item
Be sure to select the appropriate routes for each of these actions so they conform to the REST standard.

*/
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // parse application/json
app.use(bodyParser.json());
app.use(cors());

// app.get('/stocks/:stock', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });
// app.get('/:stock/', (req, res) => {
//   console.log('inside api/:stock/');
  
//   postgres.getIncrements(req.params.stock, res);
//   //console.log(req.params.stock);
  
// });


/* GET /api/stocks/1 returns stock price paid 30 that points;
*/
// app.get('/api/stocks/:stock/', (req, res) => {

//   getIncrements(req, res);
//   //console.log(req.params.stock);
  
// });

//using cache
app.get('/api/stocks/:stock/', getCache); //

// app.get('/api/stocks/', (req, res) => {
//   getList((err, results) => {
//     if (err) {
//       throw err;
//     } else {
//       res.status(200);
//       res.send(results);
//     }
//   });
// });

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


module.exports = app;