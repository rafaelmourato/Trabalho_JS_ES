const readline = require('readline');

class Book {
    constructor(id, title, description, author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.id = 1;
    }

    addBook(bookInfo) {
        const book = new Book(this.id, bookInfo.title, bookInfo.description, bookInfo.author);
        this.books.push(book);
        console.log('Livro adicionado com sucesso!');
        this.id++;
        return book;
    }

    getBooks() {
        return this.books;
    }

    removeBook(id) {
        const numericId = parseInt(id, 10);
        const book = this.getBook(numericId);
        if (book) {
            this.books = this.books.filter(book => book.id !== numericId);
            console.log('Livro removido com sucesso!');
        }
        else{
            console.log('Livro não encontrado.')
        }
    }

    getBook(id) {
        return this.books.find(book => book.id === id);
    }

    updateBookById(id, info) {
        const numericId = parseInt(id, 10);
        const book = this.getBook(numericId);
        if (book) {
            book.title = info.title || book.title;
            book.description = info.description || book.description;
            book.author = info.author || book.author;
            console.log('Livro atualizado com sucesso!');
            return book;
        }
        console.log('Livro não encontrado!');
        return null;
    }
}

class Main {
    static rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    static library = new Library();

    static main() {
        Main.showMenu();
    }

    static showMenu() {
        Main.rl.question(
        `Escolha uma opção:
        1. Adicionar Livro
        2. Listar Livros
        3. Remover Livro
        4. Atualizar Livro
        5. Sair
        > `,
        (option) => {
            switch (option) {
            case '1':
                Main.addBook();
                break;
            case '2':
                Main.listBooks();
                break;
            case '3':
                Main.removeBook();
                break;
            case '4':
                Main.updateBook();
                break;
            case '5':
                Main.rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                Main.showMenu();
                break;
            }
        });
    }

    static addBook() {
        Main.rl.question('Digite o título do livro: ', (title) => {
        Main.rl.question('Digite a descrição do livro: ', (description) => {
        Main.rl.question('Digite o autor do livro: ', (author) => {
        Main.library.addBook({ title, description, author });
        Main.showMenu();
        });
        });
     });
    }

    static listBooks() {
        const books = Main.library.getBooks();
        if (books.length === 0) {
        console.log('Nenhum livro na biblioteca.');
        } else {
        console.log('Livros na biblioteca:');
        books.forEach((book) => {
        console.log(`ID: ${book.id}, Título: ${book.title}, Autor: ${book.author}`);
        });
        }
        Main.showMenu();
    }

    static removeBook() {
        Main.rl.question('Digite o ID do livro a ser removido: ', (id) => {
        Main.library.removeBook(id);
        Main.showMenu();
        });
    }

    static updateBook() {
        Main.rl.question('Digite o ID do livro a ser atualizado: ', (id) => {
        Main.rl.question('Digite o novo título (ou pressione Enter para manter): ', (title) => {
        Main.rl.question('Digite a nova descrição (ou pressione Enter para manter): ', (description) => {
        Main.rl.question('Digite o novo autor (ou pressione Enter para manter): ', (author) => {
        Main.library.updateBookById(id, { title, description, author });
        Main.showMenu();
        });
        });
        });
        });
    }
}
Main.main();