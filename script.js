const form = document.querySelector(".form");
const close = document.querySelector(".close");
const openAddForm = document.querySelector(".add");
const displayTitle = document.querySelector(".title")
const displayAuthor = document.querySelector(".author")
const displayPages = document.querySelector(".pages")
const displayStatus = document.querySelector(".status")
openAddForm.addEventListener("click", function () {form.style.display = "flex"});
close.addEventListener("click", function () {form.style.display = "none"});
displayTitle.textContent = "";
displayAuthor.textContent = "";
displayPages.textContent = "";
displayStatus.textContent = "";

const books = [];

function Book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook (title,author,pages,status) {
    const newBook = new Book(title, author,pages,status);
    books.push(newBook);
}

addBook('asd','qwe',123,'not read');

function displayItems () {
    books.forEach(function (item) {
        displayTitle.textContent = item.title
        displayAuthor.textContent = item.author
        displayPages.textContent = item.pages
        displayStatus.textContent = item.status
        }
    )
}

displayItems();