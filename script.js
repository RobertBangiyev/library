let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

// Book.prototype.createBook = function(title, author, numPages, read) {
//     this.title = title;
//     this.author = author;
//     this.numPages = numPages;
//     this.read = read;
// }

const books = document.querySelector('.books');

function addBookToLibrary(title, author, numPages, read) {
  // do stuff here
    let newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
  let newDiv = document.createElement('div');
  let newTitle = document.createElement('p');
  newTitle.textContent = title;
  let newAuthor = document.createElement('p');
  newAuthor.textContent = author;
  let newPages = document.createElement('p');
  newPages.textContent = numPages;
  let newRead = document.createElement('button');
  newRead.textContent = read ? "Read" : "Not Read";
  let removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newAuthor);
  newDiv.appendChild(newPages);
  newDiv.appendChild(newRead);
  newDiv.appendChild(removeBtn);
    books.appendChild(newDiv);


  
}

const addBtn = document.querySelector('.adding');
const submitBtn = document.querySelector('.submit');
const form = document.querySelector('.forms');
const title = document.querySelector('#name');
const author = document.querySelector('#author');
const numPages = document.querySelector('#numPages');
const read = document.querySelector('#read');

addBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
})

submitBtn.addEventListener('click', () => {
    let isRead = false;
    if(title.value != null && author.value != null && numPages.value != 0) {
        if(read.checked) {
            isRead = true;
        }
        addBookToLibrary(title.value, author.value, numPages.value, isRead);
        title.value = '';
        author.value = '';
        numPages.value = '';
        read.checked = false;
        form.classList.toggle('hidden');
    }
    else {
        return false;
    }
})


// const readBtn = document.querySelector('.books>div>button');
// readBtn.addEventListener('click', () => {
//     if(readBtn.textContent == 'Read') {
//         readBtn.textContent = 'Not Read';
//     } else {
//         readBtn.textContent = 'Read';
//     }
// })
