const router = require('express').Router();
const bookController = require('./booksController');

router.get('/', bookController.getAllBook)

router.post('/', bookController.addNewBook)

module.exports = router;