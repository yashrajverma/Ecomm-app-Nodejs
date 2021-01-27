const express = require('packageName');
const app = express()
const _PORT = 3330;

app.get('/', (req, res) => {
    res.send("Hello there!");
})

app.listen(`"Server runnign on PORT"${_PORT}`)