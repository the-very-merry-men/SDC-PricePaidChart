var faker = require('faker');
const fs = require('fs'); 

var writeStream = fs.createWriteStream('stocks1.csv');

//node --max-old-space-size=8192 second.js

writeStream.write('id,name,ticker,current_price,average_price,week52high,week52low\n');


for (var i = 1; i <= 100; i++) {
  var name = faker.name.firstName();
  //console.log(name);
  var ticker = name.toUpperCase().substring(0, 4);

  var week52High = parseFloat((faker.random.number({'min': 500, 'max': 1500, }) * .99).toFixed(2));
  var week52Low = parseFloat((faker.random.number({'min': 100, 'max': 200, }) * .99).toFixed(2));
  var currentPrice = parseFloat((faker.random.number({'min': 100, 'max': 1500, }) * .99).toFixed(2));
  
  var averagePrice = parseFloat(((week52Low + week52High) / 2).toFixed(2));
  
  var stockRecord = i + ',' + name + ',' + ticker + ',' + currentPrice +
  ',' + averagePrice + ',' + week52High + ',' + week52Low + '\n';
  // write some data with a base64 encoding
  //   var stockRecord = {
  //     id: i,
  //     name: name,
  //     ticker: ticker,
  //     price: currentPrice,
  //     week52high: week52High,
  //     week52low: week52Low,
  //     average_price: averagePrice,
  //     
  //   };

  writeStream.write(stockRecord);


}
writeStream.end();



