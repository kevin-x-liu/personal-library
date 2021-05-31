# personal-library-app

Search for book with Google Books API and add chosen titles to Firebase

## SPA with search page and library page

Created with Firebase, ExpressJS, React, and NodeJs

### Search page

Search published books by title names. Present list of books with search-keyword in title. Ability to add books to personal library/Firebase. The search calls LocalHost:8000/search which calls Google Books API for information on books

### Library page

View personal library of books added from search page. Ability to delete titles from library/Firebase. Calls LocalHost:8000/Library which calls FireStore database
