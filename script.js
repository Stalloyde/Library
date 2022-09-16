const form = document.querySelector(".form");
const close = document.querySelector(".close");
const openAddForm = document.querySelector(".addBookButton");
const tableDiv = document.querySelector(".table");
openAddForm.addEventListener("click", function () {form.style.display = "flex"});
close.addEventListener("click", function () {form.style.display = "none"});


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

addBook('first book','author',123,'read');
addBook('second book','author',51341,'not read');
addBook('Third book','tester',45462,'read');

const table = document.createElement("table");
let tr = document.createElement("tr")
const header = ['title', 'author', 'pages', 'status'];

for (let i=0; i< header.length; i++) {
    let th = document.createElement("th");
    th.textContent = header[i].charAt(0).toUpperCase() + header[i].slice(1);
    tr.appendChild(th);
    table.appendChild(tr);
}   

for (let x=0; x<books.length; x++) { 
    let tr = document.createElement("tr");

    for (const y in books[x]) {
        let td = document.createElement("td");  
        td.textContent = books[x][y]; 
        tr.appendChild(td);
        table.appendChild(tr);
    }      

const edit = document.createElement("button");
const del = document.createElement("button");
edit.classList.add("action-button","edit-button");
del.classList.add("action-button","del-button");
edit.textContent = "Edit";
del.textContent = "Delete";
tr.appendChild(edit);
tr.appendChild(del);
tableDiv.appendChild(table);
}
