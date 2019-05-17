const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));

app.listen(port, () => console.log(`I am server.js and I am listening on port ${port}!`))