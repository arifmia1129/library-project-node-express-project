const router = require('express').Router();
const bookController = require('./booksController');

router.get('/', bookController.getAllBook)

router.post('/', bookController.addNewBook)

router.get('/:id', bookController.getBookById)

module.exports = router;