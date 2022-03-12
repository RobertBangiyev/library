let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

const addBtn = document.querySelector('.adding');
const form = document.querySelector('form');
addBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
})

// const readBtn = document.querySelector('.books>div>button');
// readBtn.addEventListener('click', () => {
//     if(readBtn.textContent == 'Read') {
//         readBtn.textContent = 'Not Read';
//     } else {
//         readBtn.textContent = 'Read';
//     }
// })
