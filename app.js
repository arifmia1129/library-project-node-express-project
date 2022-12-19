const express = require("express");

const bookRouter = require('./booksRouter');

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/books', bookRouter);

app.get('*', (req, res) => {
    res.send('<h1>This route not valid</h1>')
})

module.exports = app;