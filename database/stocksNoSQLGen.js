var faker = require('faker');
const fs = require('fs'); 

var writeStream = fs.createWriteStream('stocksno.csv');

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
  var increments = {};
  increments['pip'] = [];
  increments['pia'] = [];
  increments['pppi'] = [];
      
  for (var x = 1; x <= 30; x++) {
        
    var pip = faker.random.number({'min': 15, 'max': 90 });
    increments['pip'].push(pip);
    var pia = parseFloat((faker.random.number({'min': 10, 'max': 500}) + (0.01 * pip * faker.random.number({'min': 10, 'max': 500}))).toFixed(2));
    increments['pia'].push(pia);
    var pppi = faker.random.number({'min': 10, 'max': 999, });
    increments['pppi'].push(pppi);
      
        
  }
  //var incrementRecord = JSON.stringify(increments);
  var stockRecord = i + ',' + name + ',' + ticker + ',' + currentPrice +
  ',' + averagePrice + ',' + week52High + ',' + week52Low + '\n';

  console.log(stockRecord);
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



