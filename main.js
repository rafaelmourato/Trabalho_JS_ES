class Book {
    constructor (title, description, author){
        this.id = this.gerarId()
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class books {
    constructor(){
        this.books = [];
    }

    addBook(bookInfo) {
        const book = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
        this.books.push(book);
        return book;
    }

    getBooks(){
        return this.books;
    }

    removeBook(id){
        this.books = this.books.splice(id,1)
    }

    getBook(id){
        return this.books.find(book => book.id === id);
    }
    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (book) {
          book.title = info.title || book.title;
          book.description = info.description || book.description;
          book.author = info.author || book.author;
          return book;
        }
        return null;
    }
}
