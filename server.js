const express = require('express');
const app = express()
const _PORT = 3330;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(_PORT,
    console.log("Server is running on PORT:" + _PORT)
);

module.exports = app