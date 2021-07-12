//DOM Variables

const bookTitleTxt = document.getElementById('book-title');
const bookAuthorTxt = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const readStatusRadios = document.getElementsByName('status');
const appendBookBtn = document.getElementById('AddBook');

const bookTable = document.getElementById('book-table');
const bookTbody = document.getElementById('book-tbody'); // all of these are constants to add on for our db

// Get firebase instance and reference

var db = firebase.firestore();

let myLibrary = [];
// Book constructors
function Book(title, author, pages, readState) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readState = readState;

	this.switchState = function() {
		console.log(`This is: ${this} and this.readstate = ${this.readState}`);

		if (this.readState === 'Read') { // if-else tree 'state' of book - read/unread
			this.readState = 'Not Read';
		} else {
			this.readState = 'Read';
		}
		Render();
	};
}

function firestoreInit() { //function and foreach so we can +add and save every time we add a book
	db.collection('books').get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data().title}`);
			myLibrary.push(new Book(doc.data().title, doc.data().author, doc.data().pages, doc.data().readState));
		});
		Render();
	});
}

function addBookFirestore(book) { //adding the props in the firebase db for our book(s) so we can itemize
	db
		.collection('books')
		.add({
			title: book.title,
			author: book.author,
			pages: book.pages,
			readState: book.readState
		})
		.then((docRef) => {
			console.log(`Document written with ID: ${docRef.id}`); // console log for the next functions
		})
		.catch((error) => {
			console.error(`Error adding document: ${error}`);
		});
}

function removeBookFirestore(title, author) { // enables remove book function
	//Grabbing ID of books for reference
	db.collection('books').get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			if (doc.data().title === title && doc.data().author === author) {
				db
					.collection('books')
					.doc(doc.id)
					.delete()
					.then(() => {
						console.log('Book deleted!');
					})
					.catch((error) => {
						console.error(`Error removing book: ${error}`);
					});
			}
		});
	});
}

function addBookToLibrary() {
	//Ask for user input

	const title = bookTitleTxt.value;
	const author = bookAuthorTxt.value;
	const pages = parseInt(bookPages.value);

	if (isNaN(pages)) {
		alert('Number of pages not valid!');
		bookPages.value = '';
		return;
	}
	clearForms();

	var read;
	readStatusRadios.forEach((radio) => {
		if (radio.checked) read = radio.value;
	});

	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	addBookFirestore(newBook);

	// DEBUG CODE FUNCTION
	showBookList();
	//
	Render();
}

// Debugs further
function showBookList() {
	console.table(myLibrary);
}
//

function clearForms() {
	bookTitleTxt.value = '';
	bookAuthorTxt.value = '';
	bookPages.value = '';
}

function Render() {
	// Hear me out
	// In each Render we clean the book's tbody in order to keep the order while we can delete and modify
	// elements without keeping track of indexing. This way every time we modify something we re-render the table, or
	// more exactly we dynamicaly recreate the table with each Book object.
	//
	// Also, in order to insert buttons, we need to handle what variables from the book are text ond what are functions that are
	// going to be atached to our buttons.

	bookTbody.innerHTML = '';
	console.log('Rendering');
	myLibrary.forEach((book) => {
		var newRow = bookTbody.insertRow();
		for (element in book) {
			let parsedElement;
			var newCell = newRow.insertCell();

			if (element === 'switchState') {
				parsedElement = document.createElement('BUTTON');

				//TODO Pick one or another -> Make the background has a switch image or just have it on plain text
				parsedElement.innerHTML = 'SwitchState';
				parsedElement.classList += 'switch-button';

				parsedElement.addEventListener('click', () => {
					console.log('Trying to go to switch');
					book.switchState();
				});
			} else {
				parsedElement = document.createTextNode(book[element]);
			}
			newCell.appendChild(parsedElement);
		}
		// This approach might look dirty, but the logic is simple. For each cell we had or a data variable or a function variable.
		// But the delete button doesnt have any variable pair, so when we have finished iterating through the elements, we append the button.

		var newCell = newRow.insertCell();
		let deleteButton = document.createElement('BUTTON');

		//TODO Pick one or another -> Make the background has a switch image or just have it on plain text
		deleteButton.innerHTML = 'Delete';
		deleteButton.classList += 'delete-button';

		deleteButton.addEventListener('click', () => {
			myLibrary.splice(myLibrary.indexOf(book), 1);
			removeBookFirestore(book.title, book.author);
			Render();
		});

		newCell.appendChild(deleteButton);
	});
}

appendBookBtn.addEventListener('click', () => {
	addBookToLibrary();
});

firestoreInit();
