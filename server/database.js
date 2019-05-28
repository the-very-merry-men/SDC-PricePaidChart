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

module.exports.Stocks = Stocks;
module.exports.Increments = Increments;