const app = require('./serverapp.js');
const port = 3000;

app.listen(port, () => console.log(`I am server.js and I am listening on port ${port}!`));
