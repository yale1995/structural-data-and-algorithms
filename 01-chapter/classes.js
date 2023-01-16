function Book(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn

    this.printIsbn = function() {
        return console.log(this.isbn, 'Deus')
    }
}

var book = new Book('Yale 2023', 365, 'Life book')

console.log(book.title)
console.log(book.pages)
console.log(book.isbn)

console.log(book)
console.log(book.printIsbn())