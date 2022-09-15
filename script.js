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


//create row table header
    for (let i=0; i< header.length; i++) {
        let th = document.createElement("th");
        th.textContent = header[i].charAt(0).toUpperCase() + header[i].slice(1);
        tr.appendChild(th);
        table.appendChild(tr);
    }   

//create header row
    for (let x=0; x<books.length; x++) { //loop twice
        console.log(books[x]); //confirm loops twice
        let tr = document.createElement("tr"); //every loop creates one tag of tr
        
        //create content rows
        for (let z=0; z<header.length; z++) { //in each tr, inner loop four times
            let td = document.createElement("td"); // each inner loop creates one td tag
            tr.appendChild(td);
            td.textContent = 'sdsds'
            table.appendChild(tr);
        }


    }
    tableDiv.appendChild(table);
}

displayTable()
//i got my tables and its header.
// i got the rows... need to retrieve each elements' info
// need to append table to the correct place in the body