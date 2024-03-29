const form = document.querySelector('.form');
const close = document.querySelector('.close');
const openAddForm = document.querySelector('.addBookButton');
const tableDiv = document.querySelector('.table');
const submitForm = document.getElementById('form');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const inputStatus = document.getElementById('status');
const inputPw = document.getElementById('pw');
const inputPwConfirm = document.getElementById('pw-confirm');
const filter = document.getElementById('filter');
const table = document.createElement('table');
const tr = document.createElement('tr');
const header = ['title', 'author', 'pages', 'status'];
const titleError = document.getElementById('title-error');
const authorError = document.getElementById('author-error');
const pagesError = document.getElementById('pages-error');
const pwError = document.getElementById('pw-error');
const pwConfirmError = document.getElementById('pw-confirm-error');

function resetInputs() {
  inputTitle.value = '';
  inputTitle.classList.remove('check');
  inputAuthor.value = '';
  inputAuthor.classList.remove('check');
  inputPages.value = '';
  inputPages.classList.remove('check');
  inputPw.value = '';
  inputPw.classList.remove('check');
  inputPwConfirm.value = '';
  inputPwConfirm.classList.remove('check');
}

function closeForm() {
  resetInputs();
  form.style.display = 'none';
  filter.classList.remove('blur');
}

openAddForm.addEventListener('click', function () {
  form.style.display = 'flex';
  filter.classList.add('blur');
});

close.addEventListener('click', closeForm);

const books = [{}];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBook(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  books.push(newBook);
}

inputTitle.addEventListener('input', (e) => {
  if (!inputTitle.validity.valid) {
    showError(inputTitle, titleError);
  } else {
    titleError.textContent = '';
  }
});

inputAuthor.addEventListener('input', (e) => {
  if (!inputAuthor.validity.valid) {
    showError(inputAuthor, authorError);
  } else {
    authorError.textContent = '';
  }
});

inputPages.addEventListener('input', (e) => {
  if (!inputPages.validity.valid) {
    showError(inputPages, pagesError);
  } else {
    pagesError.textContent = '';
  }
});

inputPw.addEventListener('input', (e) => {
  if (!inputPw.validity.valid) {
    showError(inputPw, pwError);
  } else {
    pwError.textContent = '';
  }
});

inputPwConfirm.addEventListener('input', (e) => {
  if (!inputPwConfirm.validity.valid) {
    showError(inputPwConfirm, pwConfirmError);
  } else if (inputPwConfirm.value !== inputPw.value) {
    pwConfirmError.textContent = 'Passwords do not match';
    inputPwConfirm.style.border = '1px solid red';
  } else {
    pwConfirmError.textContent = '';
    inputPwConfirm.style.border = '';
  }
});

function showError(targetInput, targetError) {
  if (targetInput.validity.valueMissing) {
    targetError.textContent = 'This field cannot be empty.';
  } else if (!targetInput.validity.valid) {
    targetError.textContent =
      'Password has to have minimum eight characters, at least one uppercase letter, one lowercase letter and one number';
  }
  targetInput.classList.add('check');
}

submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!inputTitle.validity.valid) {
    showError(inputTitle, titleError);
  } else if (!inputAuthor.validity.valid) {
    showError(inputAuthor, authorError);
  } else if (!inputPages.validity.valid) {
    showError(inputPages, pagesError);
  } else if (!inputPw.validity.valid) {
    showError(inputPw, pwError);
  } else if (!inputPwConfirm.validity.valid) {
    showError(inputPwConfirm, pwConfirmError);
  } else if (inputPwConfirm.value !== inputPw.value) {
    pwConfirmError.textContent = 'Passwords do not match';
    inputPwConfirm.style.border = '1px solid red';
  } else {
    addBook(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputStatus.value
    );
    renderTable();
    closeForm();
  }
});

//create first row of header
for (let i = 0; i < header.length; i++) {
  const th = document.createElement('th');
  th.textContent = header[i].charAt(0).toUpperCase() + header[i].slice(1);
  tr.appendChild(th);
  table.appendChild(tr);
  tableDiv.appendChild(table);
}

//create and render rows initial objects
function renderTable() {
  for (let x = 0; x < 1; x++) {
    const latestBookAdded = books[books.length - 1];
    const tr = document.createElement('tr');

    tr.id = books.indexOf(latestBookAdded);
    table.appendChild(tr);

    //create and render columns for rows created
    for (const y in latestBookAdded) {
      const td = document.createElement('td');
      td.textContent = latestBookAdded[y];
      tr.appendChild(td);
    }

    //create and render readUnread buttons for each row created
    const readUnread = document.createElement('button');
    readUnread.classList.add('action-button', 'readUnread-button');
    tr.appendChild(readUnread);

    //read/unread button functionality
    function setStatusCondition() {
      if (latestBookAdded.status === 'Read') {
        readUnread.textContent = 'Mark Unread';
        tr.style.backgroundColor = 'rgb(240, 242, 182)';
      } else {
        readUnread.textContent = 'Mark Read';
        tr.style.backgroundColor = 'white';
      }
    }

    setStatusCondition();
    readUnread.addEventListener('click', function () {
      statusContent = tr.querySelector('td:nth-child(4)');

      if (latestBookAdded.status === 'Read') {
        latestBookAdded.status = 'Unread';
        statusContent.textContent = 'Unread';
      } else if (latestBookAdded.status === 'Unread') {
        latestBookAdded.status = 'Read';
        statusContent.textContent = 'Read';
      }
      setStatusCondition();
    });

    //create and append delete button for each row
    const del = document.createElement('button');
    del.classList.add('action-button', 'del-button');
    del.textContent = 'Delete';
    tr.appendChild(del);

    //delete button functionality
    del.addEventListener('click', function () {
      if (confirm('Are you sure you want to delete this book?')) {
        tr.remove();
        for (let p = 0; p < books.length; p++) {
          if (Number(tr.id) === p) {
            delete books[tr.id];
          }
        }
      }
    });
  }
  setStatusCondition();
}

console.log('test');
