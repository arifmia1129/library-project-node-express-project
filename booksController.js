const books = require("./Books")

exports.getAllBook = (req, res) => {

    if (!books.getAllBook().length) {
        return res.status(400).json({
            success: false,
            message: 'Library empty'
        })
    }

    res.status(200).json({
        success: true,
        message: "Success get books",
        books: books.getAllBook()
    });
}

exports.addNewBook = (req, res) => {
    const { name, author, category } = req.body;
    const book = books.addNewBook({
        name,
        author,
        category
    })
    res.status(201).json({
        success: true,
        message: 'Successfully add new book into library',
        book
    })
}

exports.getBookById = (req, res) => {
    const { id } = req.params;
    const book = books.getBookById(id);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Couldn't get book by given id"
        })
    }

    res.status(201).json({
        success: true,
        message: 'Successfully get book by id',
        book
    })
}

exports.updateBookById = (req, res) => {
    const { id } = req.params;
    const { name, author, category } = req.body;

    const book = books.updateBookById(id, {
        name,
        author,
        category
    })

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Couldn't get book by given id"
        })
    }

    res.status(201).json({
        success: true,
        message: 'Successfully update book information',
        book
    })
}

exports.deleteBookById = (req, res) => {
    const { id } = req.params;

    const book = books.deleteBookById(id)

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Couldn't get book by given id"
        })
    }

    res.status(201).json({
        success: true,
        message: 'Successfully delete book information',
        book
    })
}

