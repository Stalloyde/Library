const form = document.querySelector(".form");
const close = document.querySelector(".close");
const addBook = document.querySelector(".add");
addBook.addEventListener("click", function () {form.style.display = "flex"});
close.addEventListener("click", function () {form.style.display = "none"});