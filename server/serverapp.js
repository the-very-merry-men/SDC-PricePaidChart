const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./database.js');
const cors = require('cors');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'robinhood'
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

const getPricePaid = (tickerId, callback) => {
  db.query(`SELECT * FROM stocks, increments where stocks.id = increments.stockId and stocks.id = ${tickerId};`, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(err, result);
    }
  });

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

app.get('/stocks/:stock', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


/* GET /api/stocks/1 returns stock price paid 30 that points;
*/
app.get('/api/stocks/:stock/', (req, res) => {
  console.log('inside api/stocks/:stock');
  console.log(req.params.stock);
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