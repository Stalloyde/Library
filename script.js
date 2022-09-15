const form = document.querySelector(".form");
const close = document.querySelector(".close");
const openAddForm = document.querySelector(".add");
const displayTitle = document.querySelectorAll(".title")
const displayAuthor = document.querySelectorAll(".author")
const displayPages = document.querySelectorAll(".pages")
const displayStatus = document.querySelectorAll(".status")
openAddForm.addEventListener("click", function () {form.style.display = "flex"});
close.addEventListener("click", function () {form.style.display = "none"});
displayTitle.textContent = "";
displayAuthor.textContent = "";
displayPages.textContent = "";
displayStatus.textContent = "";

const books = [];

function Book (title, author, pages, status) {
    this.title = title;``
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook (title,author,pages,status) {
    const newBook = new Book(title, author,pages,status);
    books.push(newBook);
}

addBook('first book','author',123,'not read');
addBook('second book','author',51341,'not read');

function displayItems () {
    for (let i=0; i<books.length; i++) {
        displayTitle.forEach(item => item.textContent = books[i].title); 
        displayAuthor.forEach(item => item.textContent = books[i].author); 
        displayPages.forEach(item => item.textContent = books[i].pages); 
        displayStatus.forEach(item => item.textContent = books[i].status);             
    };
}

displayItems();
//this displays only the latest array, but spreads accross all rows. 
//how do i get the first array to display on the first row, second array on the second row etc.
//in displayItem(), create new table elements then each new element's text content =
//