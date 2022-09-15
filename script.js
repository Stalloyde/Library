const form = document.querySelector(".form");
const close = document.querySelector(".close");
const openAddForm = document.querySelector(".add");
const addBookButton = document.querySelector(".add");
const tableDiv = document.querySelector(".table");
openAddForm.addEventListener("click", function () {form.style.display = "flex"});
close.addEventListener("click", function () {form.style.display = "none"});


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

function displayTable () {
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
        console.log(books[x]);
        let tr = document.createElement("tr"); 
        
        for (let z=0; z<header.length; z++) { 
            let td = document.createElement("td");
            tr.appendChild(td);
            td.textContent = 'sdsds'
            table.appendChild(tr);
        }
    }
    tableDiv.appendChild(table);
}
displayTable()
