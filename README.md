# Robinhood - Price You Paid chart

# CRUD
                        
                        CRUD OPERATIONS for Price Paid Chart System Design Capstone



> ### STOCKS TABLE

| API Endpoints  | Request Type | Input | Output | Description  |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| /api/stocks/:stock | GET  | {stockId: INT} | Status: 200 {"id": INT,"name": VARCHAR "ticker": VARCHAR, "current_price": DOUBLE, "average_price": DOUBLE,"week52high": DOUBLE ,"week52low": DOUBLE,"stockId": INT,"pip": INT,"pia": DOUBLE,"pppi": INT}| This request will return record of the stockId request from stocks tables  |
| /api/stocks/:stock | POST  |  { "name": VARCHAR,"ticker": VARCHAR,"current_price": DOUBLE"average_price": DOUBLE,"week52high": DOUBLE,"week52low": DOUBLE }| Status:201 Created| This will add a new  record to stocks table |
| /api/stock/:stockId | PUT  |  { “id”: INT,"name": VARCHAR,"ticker": VARCHAR,"current_price": DOUBLE, "average_price": DOUBLE,"week52high": DOUBLE,"week52low": DOUBLE}| Status:200| This will update the given stockId if it exists in the stocks table.  |
| /api/stock/:stockId | DELETE  | {stockId: INT} | Status: 200  | This will delete a record with given stock record if it exists on stocks table.  | 



> ### INCREMENTS TABLE

| API Endpoints  | Request Type | Input | Output | Description  |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| /api/increments/:stockId  | GET  | {stockId: INT}| Status: 200 {"id": INT,"stockId": INT,"pip": INT, "pia": DOUBLE,"pppi": INT }| This request will return 33 increments data point for the stockId requested || 
/api/increments/:stockId | POST  | { "stockId": INT,"pip": INT,"pia": DOUBLE,"pppi": INT }| Status: 201 Created| This will create an increment for the stockId created.  | 
| /api/increments/ | PUT  | {“incrementId: INT,"stockId": INT,"pip": INT,"pia": DOUBLE,"pppi": INT }| Status:200  | This will update the record on increment table that matches the increment id. |
| /api/increments/:incrementId | DELETE  | {incrementId:INT} | Status: 200  | This will delete the record that matches increment id. |


