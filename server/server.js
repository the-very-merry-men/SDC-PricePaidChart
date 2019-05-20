const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
const bodyParser = require('body-parser')


var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'price_paid_chart'
})

var getList = function(callback) {
  db.query('SELECT * FROM stocks;', (err, result, fields) => {
    if (err) {
      callback(err);
    } else {
      callback(err, result);
    }
  })
}


// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })) // parse application/json
app.use(bodyParser.json())


app.get('/api/stocks/', (req, res)=> {
  getList((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  })
})
app.listen(port, () => console.log(`I am server.js and I am listening on port ${port}!`))