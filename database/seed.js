const Sequelize = require('sequelize');
const request = require('request');

let db = new Sequelize('price_paid_chart', 'root', '', {
  dialect: 'mysql', dialectOptions: {
    supportBigNumbers: true
  }
});

let Stocks = db.define('stocks', {
  // id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  ticker: Sequelize.STRING,
  current_price: Sequelize.DECIMAL(10,2),
  average_price: Sequelize.DECIMAL(10,2),
  week52high: Sequelize.DECIMAL(10,2),
  week52low: Sequelize.DECIMAL(10,2),
});

let Increments = db.define('increments', {
  stockId: Sequelize.INTEGER,
  price_increment_percentage: Sequelize.INTEGER,
  price_increment_actual: Sequelize.DECIMAL(10,2),
  people_paying_price_increment: Sequelize.INTEGER
});


db.sync({force: true}).then(() => {
  request({
    url: 'https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=Technology',
    headers: {
      'Content-type': 'application/json'
    }
  }, (req, res, body) => {
    let data = JSON.parse(body);
    let stocksData = [];
    let incrementData = [];
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    for (let i = 0; i < 100; i++) {
      stocksData.push({
        name: data[i].companyName,
        ticker: data[i].symbol,
        price: data[i].iexRealtimePrice,
        week52high: data[i].week52High,
        week52low: data[i].week52Low,
        average_price: getRandomArbitrary(data[i].week52High, data[i].week52Low),
        current_price: getRandomArbitrary(data[i].week52High, data[i].week52Low),
      })
      for (let j = 3; j < 100; j += 3) {
        incrementData.push({
          stockId: i+1,
          price_increment_percentage: j,
          price_increment_actual: data[i].week52Low * (1 + 0.01 * j),
          people_paying_price_increment: getRandomArbitrary(1000 * Math.random(), 0)
        })
      }
    }
    
    Increments.bulkCreate(incrementData);
    Stocks.bulkCreate(stocksData);
    }
  )
})