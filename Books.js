class Books {
    constructor() {
        this.books = [];
    }
    getAllBook() {
        return this.books;
    }
    addNewBook(book) {
        book.id = this.books.length + 1;
        this.books.push(book);
        return book;
    }
    getBookById(id) {
        return this.books.find(book => book.id == id);
    }
    updateBookById(id, updatedBook) {
        let index = this.books.findIndex(book => book.id == id);
        this.books[index].name = updatedBook.name || this.books[index].name;
        this.books[index].author = updatedBook.author || this.books[index].author;
        this.books[index].category = updatedBook.category || this.books[index].category;

        return this.books[index];
    }
    deleteBookById(id) {
        let index = this.books.findIndex(book => book.id == id);
        const deletedBook = this.books[index];
        this.books = this.books.filter(book => book.id != id);
        return deletedBook;
    }
}


const books = new Books();

module.exports = books;