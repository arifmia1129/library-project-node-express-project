const router = require('express').Router();
const bookController = require('./booksController');

router.get('/', bookController.getAllBook)

module.exports = router;