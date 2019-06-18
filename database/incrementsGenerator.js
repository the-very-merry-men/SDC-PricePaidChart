/* eslint-disable func-style */

var faker = require('faker');
const fs = require('fs'); 

var writeStream = fs.createWriteStream('increments2.csv');

writeStream.write('id,stockId,pip,pia,pppi\n');

let i = 10000000;
var counter = 1;

write();

function write() {
  let ok = true;
  do {
    i--;
    if (i === 0) {
      // last time!
      for (var x = 1; x <= 20; x++) {
        var id = x + (counter - 1) * 20;
        var stockId = counter;
        var pip = faker.random.number({'min': 15, 'max': 90 });
        var pia = (faker.random.number({'min': 10, 'max': 500}) + (0.01 * pip * faker.random.number({'min': 10, 'max': 500}))).toFixed(2);
        var pppi = faker.random.number({'min': 10, 'max': 999, });
      
        var incrementRecord = id + ',' + stockId + ',' + pip + ',' + pia + ',' + pppi + '\n';

        writeStream.write(incrementRecord);
      }
      counter++;
    } else {
      // See if we should continue, or wait.
      // Don't pass the callback, because we're not done yet.
      for (var x = 1; x <= 20; x++) {
        var id = x + (counter - 1) * 20;
        var stockId = counter;
        var pip = faker.random.number({'min': 15, 'max': 90 });
        var pia = (faker.random.number({'min': 10, 'max': 500}) + (0.01 * pip * faker.random.number({'min': 10, 'max': 500}))).toFixed(2);
        var pppi = faker.random.number({'min': 10, 'max': 999, });
      
        var incrementRecord = id + ',' + stockId + ',' + pip + ',' + pia + ',' + pppi + '\n';
        ok = writeStream.write(incrementRecord);
      }
      counter++;
    
      if (counter % 50000 === 0) {
        console.log( counter * 20, 'Records');
      }
     
    }
  } while (i > 0 && ok);
  if (i > 0) {
    // had to stop early!
    // write some more once it drains
    writeStream.once('drain', write);
  }
}


//writeStream.end();


