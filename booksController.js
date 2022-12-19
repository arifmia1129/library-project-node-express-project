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
}