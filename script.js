"use strict";

// book object constructor details 

let library_data = [];

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