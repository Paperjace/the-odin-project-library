let myLibrary = [
  {
    id: 1,
    author: 'J.R.R. Tolkien',
    title: 'The Hobbit',
    pages: 420,
    hasBeenRead: false,
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

function createBookElement(book) {
  const bookElement = document.createElement('div');
  bookElement.className = 'book';
  bookElement.id = book.id;

  const ul = document.createElement('ul');
  ul.setAttribute('id', `book-details-${book.id}`);
  ul.setAttribute('class', 'book-ul');

  bookElement.appendChild(ul);
  return bookElement;
}

function createDetailListInBookElement(ul, bookDetail, className) {
  const li = document.createElement('li');
  li.setAttribute('class', className);
  li.appendChild(document.createTextNode(bookDetail));
  ul.appendChild(li);
}

function addBookDetailsToBookElement(book) {
  const readOrUnread = book.hasBeenRead ? 'Read' : 'Unread';

  const ul = document.getElementById(`book-details-${book.id}`);

  createDetailListInBookElement(ul, book.title, 'book-title');
  createDetailListInBookElement(ul, book.author, 'book-author');
  createDetailListInBookElement(ul, book.pages, 'book-pages');
  createDetailListInBookElement(ul, readOrUnread, `book-${readOrUnread}`);
}

function displayBooks() {
  const app = document.getElementById('app');
  app.innerText = '';
  myLibrary.forEach((book) => {
    app.appendChild(createBookElement(book));
    addBookDetailsToBookElement(book);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});
