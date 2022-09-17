// Book Constructor
// function Book(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
// }


// // UI Constructor
// function UI() { }

// // UI prototype display book in the list
// UI.prototype.uiDisplay = function (bookObject) {
//     const bookList = document.querySelector('#book-list');
//     const tableRow = document.createElement('tr');
//     tableRow.innerHTML = `
//     <td>${bookObject.title}</td>
//     <td>${bookObject.author}</td>
//     <td>${bookObject.isbn}</td>
//     <td><a class='delete' href='#'>X<a/></td>
//     `
//     bookList.appendChild(tableRow);
// }



// // Show Alert
// UI.prototype.showAlert = function (alertMessage, errorClass) {
//     // Add Div
//     const div = document.createElement('div');

//     // Add ClassName
//     div.className = `alert ${errorClass}`;
    
//     // Add Text Node
//     div.appendChild(document.createTextNode(alertMessage));

//     // Get Parent
//     const container = document.querySelector('.container');

//     // Get Form
//     const bookForm = document.querySelector('#book-form');

//     // Insert Alert
//     container.insertBefore(div, bookForm);

//     // Clear alert Messages
//     setTimeout(function () {
//         div.remove();
//     }, 3000);
// }


// // Delete books
// UI.prototype.deleteBook = function (target) {
//     if (target.className === 'delete') {
//         target.parentElement.parentElement.remove();
//     }
// }


// // Add books
// const bookForm = document.querySelector('#book-form');

// // Form Event Listener
// bookForm.addEventListener('submit', (e) => {

//     // Input Values
//     const title = document.querySelector('#title').value.trim(),
//         author = document.querySelector('#author').value.trim(),
//         isbn = document.querySelector('#isbn').value.trim();

//     // Book Object
//     const bookObject = new Book(title, author, isbn);

//     // UI Object instantiate
//     const ui = new UI();

//     // Validation
//     if (title === '' || author === '' || isbn === '') {
//         // Show error message
//         ui.showAlert('Please fill the spaces!!!', 'error');
//     } else {
//         // UI display book in the list
//         ui.uiDisplay(bookObject);

//         // Show success message
//         ui.showAlert('Book Added...', 'success');

//         // Clear form
//         bookForm.reset();
//     }

//     e.preventDefault();
// });


// // Delete books
// const bookList = document.querySelector('#book-list');

// bookList.addEventListener('click', function (e) {

//     // UI Object instantiate
//     const ui = new UI();

//     // Show success message
//     ui.showAlert('Book Removed...', 'success');

//     // Delete books
//     ui.deleteBook(e.target);

//     e.preventDefault();
// });

