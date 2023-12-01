Your task is to implement a very simple online book rental system (BRS).

There are functions which are open for anonymous users. They can

    search for books by author or title,
    list books by genre,
    view the data sheet of a selected book.

There are two types of users in this BRS: readers and librarians. A registered and authenticated (logged in) reader can

    borrow a book,
    view his/her active book rentals, and
    view the details of a selected book rental.

A librarian can

    add, edit or delete a book,
    add, edit or delete a genre,
    list book rentals,
    view the details of a book rental,
    change some status on a book rental, like status, deadline, note.

The home project must be implemented as a Laravel application using a local SQLite database. The tables must be created by migrations and seeded with some fake data. During evaluation we will run the following commands to start up your application (so you have to try them in this order before you submit your solution):
