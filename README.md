# Trabalho_JS_ES
Trabalho de JavaScript para disciplina de engenharia de software
Esse trabalho foi desenvolvido por mim, com o intuito de treinar as habilidades de Javascript.

## Problema proposto
Crie uma classe com as seguintes propriedades:
* title: string
* description: string
* author: string


Crie uma classe com a seguinte :
* books: Book[]


e com os seguintes
* adicionar: addBook(bookInfo: Omit<Book, ‘id’>): Book
* listar todos: getBooks(): Book[]
* remover: removeBookById(id: string): void
* mostrar um: getBookById(id: string): Book
* editar um: updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book


Como desenvolvedor(a) que usarei seu programa, devo poder criar Books e Libraries e executar os métodos presentes em Library.
