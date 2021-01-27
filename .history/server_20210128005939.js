const express = require('express');
const app = express()
const _PORT = 3330;

app.get('/', (req, res) => {
    res.send("Hello there!");
})

app.listen(_PORT,
    console.log("Server is running on PORT:" + _PORT)
);

module.exports = app