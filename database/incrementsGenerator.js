
var faker = require('faker');
const fs = require('fs'); 

var writeStream = fs.createWriteStream('increments.csv');


writeStream.write('id,stockId,pip,pia,pppi\n');

for (var i = 1; i <= 10000000; i++) {

  for (var x = 1; x <= 33; x++) {
    var id = i * x;
    var stockId = i;
    var pip = faker.random.number({'min': 15, 'max': 90 });
    var pia = (faker.random.number({'min': 10, 'max': 500}) + (0.01 * pip * faker.random.number({'min': 10, 'max': 500}))).toFixed(2);
    var pppi = faker.random.number({'min': 10, 'max': 999, });
  
    var incrementRecord = id + ',' + stockId + ',' + pip + ',' + pia + ',' + pppi + '\n';
    writeStream.write(incrementRecord);
  }

  

 
}
writeStream.end();
