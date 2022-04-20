class Book {
    constructor(title, author, numPages, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = {};
        this.DOMbooks = document.querySelector('.books');
    }
    addBook(book) {
        this.books[book.title] = book;
        const title = book.title;
        const author = book.author;
        const numPages = book.numPages;
        const read = book.read;
        let newDiv = document.createElement('div');
        let newTitle = document.createElement('p');
        newTitle.textContent = title;
        let newAuthor = document.createElement('p');
        newAuthor.textContent = author;
        let newPages = document.createElement('p');
        newPages.textContent = numPages;
        let newRead = document.createElement('button');
        newRead.textContent = read ? "Read" : "Not Read";
        newRead.setAttribute('id', title);
        newRead.classList.add('reading');
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('id', title);
        newRead.addEventListener('click', () => {
            newRead.textContent === 'Read' ? this.books[newRead.id].read = 'Not Read' : this.books[newRead.id].read = 'Read';
            newRead.textContent === 'Read' ? newRead.textContent = 'Not Read' : newRead.textContent = 'Read';
        });
        removeBtn.addEventListener('click', () => {
            this.DOMbooks.removeChild(newDiv);
            delete this.books[removeBtn.id];
        })
        newDiv.append(newTitle, newAuthor, newPages, newRead, removeBtn);
        this.DOMbooks.appendChild(newDiv);
    }
}

const addBtn = document.querySelector('.adding');
const submitBtn = document.querySelector('.submit');
const form = document.querySelector('.forms');
const title = document.querySelector('#name');
const author = document.querySelector('#author');
const numPages = document.querySelector('#numPages');
const read = document.querySelector('#read');
const library = new Library();

addBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
})

submitBtn.addEventListener('click', () => {
    let isRead = false;
    if(title.value != null && author.value != null && numPages.value != 0) {
        if(read.checked) {
            isRead = true;
        }
        const currBook = new Book(title.value, author.value, numPages.value, isRead);
        library.addBook(currBook);
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