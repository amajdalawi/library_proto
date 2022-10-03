"use strict";

// book object constructor details 

let library_data = [];
let i = 0;

function Book (title, author, pages, dateofpub, readstatus) {
    this.sr  = i;
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
const overlay = document.querySelector('#overlay')
let addButton = document.querySelector('.activate');
let closeButton = document.querySelector('.close');


function open_popup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');    
}

function close_popup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');    
}

addButton.addEventListener('click',() => {
    const popup = document.getElementById('popupForm');
    open_popup(popup);
})

closeButton.addEventListener('click', () => {
    const popup = document.getElementById('popupForm');
    close_popup(popup);
})

overlay.addEventListener('click', () => {
    const popup = document.querySelector('#popupForm.active');
    close_popup(popup);
})

// get the values from the form 
// and add values to the table

let entrybutton = document.querySelector('.addentry');
let tbody = document.querySelector('.table-body');
let bookForm = document.querySelector('#book-form');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title');
    let pages = document.querySelector('#pages');
    let dop = document.querySelector('#dop');
    let author = document.querySelector('#Author');
    let readstatus = document.querySelector('#readstatus');
    console.log(readstatus.checked)

    let newBook = new Book(title.value,author.value,pages.value,dop.value,readstatus.checked);
    i = i + 1;
    addToLibrary(newBook);
    updateTable(newBook);

    // let bookForm = document.querySelector('#book-form');
    bookForm.reset();


    // const popup = document.querySelector('#popupForm');
    // close_popup(popup);
})

function updateTable(book) {
    let tbody = document.querySelector('.table-body');
    let row = tbody.insertRow();

    if (tbody.rows[0].cells.length == 1) {
        let table = document.querySelector('#table');
        
        table.deleteRow(1);
    }

    for (const prop in book) {
        if (book.hasOwnProperty(prop)) {
            if (prop == 'sr') {
                continue;
            }
            let cell = row.insertCell();
            cell.textContent = book[prop];
            console.log(book[prop])
        }
    }

    row.setAttribute(`data-${book.sr}`,`rem-${book.sr}`)
    let cell = row.insertCell();
    cell.innerHTML = `<button id="rem-${book.sr}">&times</button>`
}



