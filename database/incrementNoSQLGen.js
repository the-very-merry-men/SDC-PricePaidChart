/* eslint-disable func-style */

var faker = require('faker');
const fs = require('fs'); 

var writeStream = fs.createWriteStream('incrementsno.csv');

writeStream.write('id,increments\n');

let i = 10000000;
var counter = 1;

write();

function write() {
  let ok = true;
  do {
    i--;
    if (i === 0) {
      // last time!
      
      var stockId = counter;
      var increments = {};
      increments['pip'] = [];
      increments['pia'] = []5
      increments['pppi'] = [];
      
      for (var x = 1; x <= 30; x++) {
        
        var pip = faker.random.number({'min': 15, 'max': 90 });
        increments['pip'].push(pip);
        var pia = parseFloat((faker.random.number({'min': 10, 'max': 500}) + (0.01 * pip * faker.random.number({'min': 10, 'max': 500}))).toFixed(2));
        increments['pia'].push(pia);
        var pppi = faker.random.number({'min': 10, 'max': 999, });
        increments['pppi'].push(pppi);
      
        
        
      }
      var incrementRecord = stockId + '|' + JSON.stringify(increments).split('"').join('') + '\n';
      //console.log(incrementRecord);
      writeStream.write(incrementRecord);
      counter++;
    } else {
      // See if we should continue, or wait.
      // Don't pass the callback, because we're not done yet.
      var stockId = counter;
      var increments = {};
      increments['pip'] = [];
      increments['pia'] = [];
      increments['pppi'] = [];
      
      for (var x = 1; x <= 30; x++) {
        
        var pip = faker.random.number({'min': 15, 'max': 90 });
        increments['pip'].push(pip);
        var pia = (faker.random.number({'min': 10, 'max': 500}) + (0.01 * pip * faker.random.number({'min': 10, 'max': 500}))).toFixed(2);
        increments['pia'].push(pia);
        var pppi = faker.random.number({'min': 10, 'max': 999, });
        increments['pppi'].push(pppi);
      
        
      }
      var incrementRecord = stockId + '|' + JSON.stringify(increments).split('"').join('') + '\n';
      
    
      //console.log(incrementRecord);
      writeStream.write(incrementRecord);
      
      counter++;
    
      if (counter % 50000 === 0) {
        console.log( counter, 'Records');
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


