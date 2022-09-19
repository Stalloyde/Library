const form = document.querySelector(".form");
const close = document.querySelector(".close");
const openAddForm = document.querySelector(".addBookButton");
const tableDiv = document.querySelector(".table");
openAddForm.addEventListener("click", function () {form.style.display = "flex"});
close.addEventListener("click", function () {form.style.display = "none"});

const books = [{}];

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
addBook('fourth book','author',51341,'not read');

const table = document.createElement("table");
const tr = document.createElement("tr")
const header = ['title', 'author', 'pages', 'status'];

//create first row of header
for (let i=0; i< header.length; i++) {
    const th = document.createElement("th");
    th.textContent = header[i].charAt(0).toUpperCase() + header[i].slice(1);
    tr.appendChild(th);
    table.appendChild(tr);
}   

//create dynamic rows that appends as new objects are created
for (let x=0; x<books.length; x++) { 
    const tr = document.createElement("tr");
    tableDiv.appendChild(table);
    
    //create and append dynamic columns for each dynamic rows created
    for (const y in books[x]) {
        const td = document.createElement("td");  
        td.textContent = books[x][y]; 
        table.appendChild(tr);
        tr.appendChild(td);
    }      
    
    //create and append edit button for each row
    const edit = document.createElement("button");
    edit.classList.add("action-button","edit-button");
    edit.textContent = "Edit";
    tr.appendChild(edit);
    
    //create and append delete button for each row
    const del = document.createElement("button");
    del.classList.add("action-button","del-button");
    del.textContent = "Delete";
    tr.appendChild(del);
    
    tr.id = x;
    
    del.addEventListener("click", function () {
        tr.remove();     
        if (Number(tr.id) === books.indexOf(books[x])) {
            delete(books[x]);
            console.log(books)
        }
    })
}
