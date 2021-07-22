let myLibrary = [
  {
    id: 1,
    author: 'J.R.R. Tolkien',
    title: 'The Hobbit',
    pages: 420,
    hasBeenRead: true,
  },
  {
    id: 2,
    author: 'Laurence Yep',
    title: 'Dragon Cauldron',
    pages: 666,
    hasBeenRead: true,
  },
];

function Book(bookDetails) {
  this.id = bookDetails.id;
  this.author = bookDetails.author;
  this.title = bookDetails.title;
  this.pages = bookDetails.pages;
  this.hasBeenRead = bookDetails.hasBeenRead;
}

function addBookToLibrary() {}

function createDisplayBookElement(book) {
  const app = document.getElementById('app');
  const bookElement = document.createElement('div');
  bookElement.className = 'book';
  bookElement.id = book.id;
  bookElement.innerText = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;
  app.appendChild(bookElement);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    createDisplayBookElement(book);
  });
}
