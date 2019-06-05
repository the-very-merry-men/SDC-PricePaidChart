const Sequelize = require('sequelize');
const request = require('request');
var faker = require('faker');
const fs = require('fs'); 

var writeStream = fs.createWriteStream('data.csv');


//node --max-old-space-size=8192 second.js

writeStream.write('id,name,ticker,week52high,week52low,average_price,current_price\n');

var arrStocks = [];
for (var i = 0; i < 10000000; i++) {
  var name = faker.name.firstName();
  //console.log(name);
  var ticker = name.toUpperCase().substring(0, 4);
  // console.log(ticker);
  var week52High = faker.random.number({
    'min': 200,
    'max': 999,
  });
  var week52Low = faker.random.number({
    'min': 10,
    'max': 500,
  });
  var currentPrice = faker.random.number({
    'min': 10,
    'max': 999,
  });

  var averagePrice = Math.floor((week52Low + week52High) / 2);

  //   arrStocks.push({
  //     id: i,
  //     name: name,
  //     ticker: ticker,
  //     price: currentPrice,
  //     week52high: week52High,
  //     week52low: week52Low,
  //     average_price: averagePrice,
  //     current_price: currentPrice,
  //   });
  var stockRecord = i + ',' + name + ',' + ticker + ',' + currentPrice
       + ',' + week52High + ',' + week52Low + ',' + averagePrice + ',' + currentPrice + '\n';
  // write some data with a base64 encoding
  //   var stockRecord = {
  //     id: i,
  //     name: name,
  //     ticker: ticker,
  //     price: currentPrice,
  //     week52high: week52High,
  //     week52low: week52Low,
  //     average_price: averagePrice,
  //     current_price: currentPrice,
  //   };

  writeStream.write(stockRecord);


}
writeStream.end();



//console.log(arrStocks);





// fastcsv 
//   .write(arrStocks, { headers: true })
//   .pipe(ws);


/*
let db = new Sequelize('price_paid_chart', 'root', '', {
 dialect: 'mysql', dialectOptions: {
   supportBigNumbers: true
 }
});

let Stocks = db.define('stocks', {
 // id: Sequelize.INTEGER,
 name: Sequelize.STRING,
 ticker: Sequelize.STRING,
 current_price: Sequelize.DECIMAL(10, 2),
 average_price: Sequelize.DECIMAL(10, 2),
 week52high: Sequelize.DECIMAL(10, 2),
 week52low: Sequelize.DECIMAL(10, 2),
}, {
 timestamps: false
});

let Increments = db.define('increments', {
 stockId: Sequelize.INTEGER,
 pip: Sequelize.INTEGER,
 // pip: price increment percentage
 pia: Sequelize.DECIMAL(10, 2),
 // pia: price increment actual
 pppi: Sequelize.INTEGER
 // pppi: people paying price increment
}, {
 timestamps: false
});

// FYI, this API call will fail after June 1, 2019. The old API is deprecated.
db.sync({force: true}).then(() => {
 request({
   url: 'https://cloud.iexapis.com/v1/stock/market/collection/sector?collectionName=Technology&token=pk_0731786ef98d4600991894316555c35f',
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
       week52low: data[i].week52Low || 0,
       average_price: getRandomArbitrary(data[i].week52High, data[i].week52Low),
       current_price: getRandomArbitrary(data[i].week52High, data[i].week52Low),
     });
     for (let j = 0; j < 97; j += 3) {
       incrementData.push({
         stockId: i + 1,
         pip: j,
         pia: data[i].week52Low + (0.01 * j * (data[i].week52High - data[i].week52Low)),
         pppi: getRandomArbitrary(1000 * Math.random(), 0)
       });
     }
   }
  
   Increments.bulkCreate(incrementData);
   Stocks.bulkCreate(stocksData);
 });
});

module.exports.Stocks = Stocks;
module.exports.Increments = Increments;
*/


