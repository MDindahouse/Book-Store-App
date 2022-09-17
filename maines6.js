// Book Constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Constructor
class UI{
    constructor() {
        
    }

    displayInputValue(bookObj) {
        const bookList = document.querySelector('#book-list');
        const tr = document.createElement('tr')
        
        bookList.appendChild(tr).innerHTML = `
        <td>${bookObj.title}</td>
        <td>${bookObj.author}</td>
        <td>${bookObj.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>
        `;
    }

    showAlert(showMessage, showError) {

        const div = document.createElement('div');
        div.className = `alert ${showError}`;
        div.appendChild(document.createTextNode(`${showMessage}`));

        const container = document.querySelector('.container');
        container.insertBefore(div, bookForm);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    deleteBookList(target) {
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
        }
    }
}


// Add Event Listener to Book form
const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', (e) => {

    // Input values
    const title = document.querySelector('#title').value.trim(),
        author = document.querySelector('#author').value.trim(),
        isbn = document.querySelector('#isbn').value.trim();

    // Instantiate the Book Object
    const book = new Book(title, author, isbn);

    
    // Instantiate the UI Object
    const ui = new UI();

    // Validation
    if (title === '' || author === '' || isbn === '') {
        // Show Error Alert
        ui.showAlert('Please fill in the spaces???', 'error');
    } else {
        // Display Input value
        ui.displayInputValue(book);

        // Show Success Alert
        ui.showAlert('Book Added!!!', 'success');
    }

    // Clear form
    bookForm.reset();

    e.preventDefault();
});



// Delete Event listener for Book List
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', (e) => {

    // Instantiate the UI Object
    const ui = new UI();

    // Delete Book List
    ui.deleteBookList(e.target);

    // Book remove Alert
    if (e.target.classList.contains('delete')) {
        ui.showAlert('Book Removed!!!', 'success');
    }
    
    e.preventDefault();
});
