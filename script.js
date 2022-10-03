

// book object constructor details 

library_data = [];

function Book (title, author, pages, dateofpub, readstatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.dateofpub = dateofpub;
    this.readstatus = readstatus;
}

Book.prototype.changeReadStatus = function() {
    this.readstatus = !this.readstatus;
}

function addToLibrary(book) {
    if (book instanceof Book) {
        library_data.push(book);
    }
}

// add the functionality of add a book button

addBookButton = document.querySelector('.addform button');

