var db = require('../Dbconnection');



var Books = {

    createTable: function () {
        db.query("SELECT COUNT (*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'listbookdb') AND (TABLE_NAME = 'Books')", function (err, res) {
            if (err) {
                throw err;
            }

            if (res) {
                console.log('table books exists');
                return;
            }
            db.query("CREATE TABLE Books (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), author VARCHAR(255), publish INT, price INT,image VARCHAR(255) , categoryId INT,content TEXT, numberOfPages INT,companyIssued VARCHAR(255));", function (err, res) {
                if (err) {
                    throw err;
                }
                console.log('Table books created');
            })
        });

    },

    getBooks: function (callback) {
        return db.query("SELECT * FROM Books", callback);
    },

    getBookById: function (id, callback) {
        return db.query("SELECT * FROM Books WHERE id = ?", [id], callback);
    },
    getBookByCategory: function (id, callback) {
        return db.query("SELECT * FROM Books WHERE categoryId = ?", [id], callback);
    },
    addBooks: function (book, callback) {
        return db.query("INSERT INTO Books(title, author, publish,price,image,categoryId,content,numberOfPages,companyIssued) VALUE( ?, ?, ?,?, ?, ?,?, ?, ?)", [book.title, book.author, book.publish, book.price, book.image, book.categoryId, book.content, book.numberOfPages, book.companyIssued], callback);
    },
    searchBook: function (key, callback) {
        return db.query("SELECT * FROM Books WHERE title like ?;", [key], callback);
    },
    updateBook(id, book, callback) {
        return db.query("UPDATE Books SET title= ?, author= ?, publish= ?,price= ?,image= ?,categoryId= ?,content= ?,numberOfPages= ?,companyIssued= ?  WHERE id = ?", [book.title, book.author, book.publish, book.price, book.image, book.categoryId, book.content, book.numberOfPages, book.companyIssued, id], callback);
    },

    removeBook: function (id, callback) {
        return db.query("DELETE FROM Books WHERE id = ?", [id], callback);
    }

}

function checkExistTable() {
    isExistTable = false;
    db.query("SELECT COUNT (*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'listbookdb') AND (TABLE_NAME = 'Books')", function (err, res) {
        if (err) {
            console.log('Something went wrong!!');
            console.log(err);
        };

        if (res) {
            isExistTable = true;
        }

        console.log(isExistTable);


        return isExistTable;
    });
}

module.exports = Books;