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

addBook('first book','author',123,'Read');
addBook('second book','author',51341,'Unread');
addBook('fourth book','author',51341,'Unread');
addBook('Third book','tester',45462,'Read');

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
    
    //create and append Read/Unread button for each row
    const readUnread = document.createElement("button");
    readUnread.classList.add("action-button","readUnread-button");

    //execute read/unread button
    function setStatusCondition () {
        if (books[x].status === "Read") { 
            readUnread.textContent = "Mark as Unread";
            tr.style.backgroundColor = "lightGreen";
        } else {
            readUnread.textContent = "Mark as Read";
            tr.style.backgroundColor = "lightGray";
        }
    };
    setStatusCondition();
    readUnread.addEventListener("click", function() {
        statusContent = tr.querySelector("td:nth-child(4)");

        if (books[x].status === "Read") {
            books[x].status = "Unread";
            statusContent.textContent = "Unread";
            setStatusCondition();
        } else if (books[x].status === "Unread") {
            books[x].status = "Read";
            statusContent.textContent = "Read";
            setStatusCondition();
        }
    });

    tr.appendChild(readUnread);
    
    //create and append delete button for each row
    const del = document.createElement("button");
    del.classList.add("action-button","del-button");
    del.textContent = "Delete";
    tr.appendChild(del);
    
    tr.id = x;


    
    del.addEventListener("click", function () {
        if(confirm("Are you sure you want to delete this book?")) {
            tr.remove();     
            if (Number(tr.id) === books.indexOf(books[x])) {
                delete(books[x]);
                console.log(books)
            }
        }
    })


    //         edit data of corresponding row
    //         save it and reflect onto array and DOM
    // })
}


