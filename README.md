# price-you-paid-chart
Robinhood, Price You Paid chart

# CRUD
                        
                        CreateReadUpdateDelete OPERATIONS for Stock Chart System Design



> ### STOCKS TABLE

| API Endpoints  | Request Type | Input | Output | Description  |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| /api/stocks/:stock | GET  | {stockId: INT} | Status: 200 {"id": INT,"name": VARCHAR "ticker": VARCHAR, "current_price": DOUBLE, "average_price": DOUBLE,"week52high": DOUBLE ,"week52low": DOUBLE,"stockId": INT,"pip": INT,"pia": DOUBLE,"pppi": INT}| This request will return record of the stockId request from stocks tables  |
| /api/stock/ | POST  | stock name, stock ticker   | STATUS CODE 201  | Insert a new stock into the database  | 
| /api/stocks/:stock | PUT  |  { "name": VARCHAR,"ticker": VARCHAR,"current_price": DOUBLE"average_price": DOUBLE,"week52high": DOUBLE,"week52low": DOUBLE }| Status:201 Created| This will add a new  record to stocks table |
| /api/stock/:stockId | PUT  |  { “id”: INT,"name": VARCHAR,"ticker": VARCHAR,"current_price": DOUBLE, "average_price": DOUBLE,"week52high": DOUBLE,"week52low": DOUBLE}| Status:200| This will update the given stockId if it exists in the stocks table.  |



> ### STOCK DATA FOR ONE DAY, ONE WEEK, ONE MONTH, ONE YEAR, 5 YEARS

| API Endpoints  | Request Type | Input | Output | Description  |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| /api/stocks/:ticker/prices/:type  | GET  | ticker id for a certain stock at a certain time increment  | stock prices STATUS CODE 200 | Get the stock prices for a given stock  |
| /api/stocks/:ticker/prices/:type  | POST  | ticker id for a certain stock plus a new value to add to a database  | STATUS CODE 201  | Add a new price for a given stock  | 
| /api/stocks/:ticker/prices/:type  | PUT  | ticker id and a new price to replace an older price at a specific index if applicable (latest if not)  | STATUS CODE 200  | Update a price (either the most recent or a specific price at a specific ID)  |
| /api/stocks/:ticker/prices/:type  | DELETE  | ticker id and a specific ID if applicable (latest if not)  | STATUS CODE 200  | Delete a price (either the most recent or a specific price at a specific ID)   |

<img align="center" width="50" height="50" src="http://www.fillmurray.com/50/50">
