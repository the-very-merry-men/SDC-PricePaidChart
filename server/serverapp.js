const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./database.js');


var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'price_paid_chart'
});

var getList = function(callback) {
  db.query('SELECT * FROM stocks;', (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(err, result);
    }
  });
};

const getPricePaid = (ticker, callback) => {
  db.query(`SELECT * FROM stocks, increments where stocks.id = increments.stockId and stocks.ticker = '${ticker}';`, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(err, result);
    }
  });
  // database.Stocks.findAll({
  //   attributes: ['id'],
  //   where: {
  //     ticker
  //   }
  // })
  //   .then(data => database.Increments.findAll({
  //     where: {stockId: data[0].id},
  //     include: [{
  //       model: 'database.Stocks',
  //       required: true,
  //     }]
  //   }))
  //   .then(data => callback(null, data))
  //   .catch(error => callback(error, data));
};

var getTestList = function(callback) {
  db.query('SELECT * FROM stocks, increments where stocks.id = increments.stockId and stocks.id = 2;', (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(err, result);
    }
  });
};


// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // parse application/json
app.use(bodyParser.json());

app.get('/stocks/:stock', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/stocks/:stock/', (req, res) => {
  getPricePaid(req.params.stock, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  });
});

app.get('/api/stocks/', (req, res) => {
  getList((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  });
});

app.get('/api/stocks/test', (req, res) => {
  getTestList((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  });
});
module.exports = app;