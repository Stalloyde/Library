const form = document.querySelector(".form");
const close = document.querySelector(".close");
const openAddForm = document.querySelector(".addBookButton");
const tableDiv = document.querySelector(".table");
const submitForm = document.getElementById("submit");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputStatus = document.getElementById("status");
const filter = document.getElementById("filter");
const table = document.createElement("table");
const tr = document.createElement("tr")
const header = ['title', 'author', 'pages', 'status'];

function closeForm () {    
    form.style.display = "none";
    filter.classList.remove("blur");
}

openAddForm.addEventListener("click", function () {
    form.style.display = "flex";
    filter.classList.add("blur");
});

close.addEventListener("click", closeForm);

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

submitForm.addEventListener("click", function () {
    addBook (inputTitle.value, inputAuthor.value, inputPages.value, inputStatus.value)
    renderTable();
    closeForm();
});

//create first row of header
for (let i=0; i< header.length; i++) {
    const th = document.createElement("th");
    th.textContent = header[i].charAt(0).toUpperCase() + header[i].slice(1);
    tr.appendChild(th);
    table.appendChild(tr);
    tableDiv.appendChild(table);
}   

//create and render rows initial objects
function renderTable () {
    for (let x=0; x<1; x++) { 
        const latestBookAdded = books[books.length-1];
        const tr = document.createElement("tr");
        
        tr.id = books.indexOf(latestBookAdded);
        table.appendChild(tr);
        

        //create and render columns for rows created
        for (const y in latestBookAdded) {
            const td = document.createElement("td");  
            td.textContent = latestBookAdded[y]; 
            tr.appendChild(td);
        }      

        //create and render readUnread buttons for each row created
        const readUnread = document.createElement("button");
        readUnread.classList.add("action-button","readUnread-button");
        tr.appendChild(readUnread);

        //read/unread button functionality
        function setStatusCondition () {
            if (latestBookAdded.status === "Read") { 
                readUnread.textContent = "Mark Unread";
                tr.style.backgroundColor = "rgb(240, 242, 182)";
            } else {
                readUnread.textContent = "Mark Read";
                tr.style.backgroundColor = "white";
            }
        };

        setStatusCondition();
        readUnread.addEventListener("click", function() {
            statusContent = tr.querySelector("td:nth-child(4)");

            if (latestBookAdded.status === "Read") {
                latestBookAdded.status = "Unread";
                statusContent.textContent = "Unread";
                setStatusCondition();
            } else if (latestBookAdded.status === "Unread") {
                latestBookAdded.status = "Read";
                statusContent.textContent = "Read";
                setStatusCondition();
            }
        });

        //create and append delete button for each row
        const del = document.createElement("button");
        del.classList.add("action-button","del-button");
        del.textContent = "Delete";
        tr.appendChild(del);

        //delete button functionality
        del.addEventListener("click", function () {
            if(confirm("Are you sure you want to delete this book?")) {
                tr.remove();     
                for (let p=0; p<books.length; p++) {
                    if (Number(tr.id) === p) {
                        delete(books[tr.id]);
                    };
                };
            };
        });    
    };
}



