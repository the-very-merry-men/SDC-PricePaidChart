DROP DATABASE IF EXISTS price_paid_chart;

CREATE DATABASE price_paid_chart;

USE price_paid_chart;

DROP TABLE IF EXISTS stockquotes;
		
CREATE TABLE stockquotes (
  `stockid` INT NOT NULL AUTO_INCREMENT,
  `ticker`  VARCHAR(255) NOT NULL,
  `52_week_high` DOUBLE NULL NOT NULL,
  `52_week_low` DOUBLE NULL NOT NULL,
  `current_price` DOUBLE NULL NOT NULL,
  `average_price` DOUBLE NULL NOT NULL,
  PRIMARY KEY (`stockid`)
);

-- ---
-- Table 'increments'
-- 
-- ---

DROP TABLE IF EXISTS increments;
		
CREATE TABLE increments (
  -- `id` INTEGER NOT NULL AUTO_INCREMENT,
  `stockid` INTEGER NOT NULL,
  `price_increment_percentage` INTEGER NOT NULL,
  `price_increment_actual` DOUBLE NOT NULL,
  `people_paying_price_increment` INTEGER  NOT NULL
  -- PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `increments` ADD FOREIGN KEY (stockid) REFERENCES `stockquotes` (`stockid`);