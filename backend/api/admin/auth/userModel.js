var db = require('../Dbconnection');



var Users = {

    createTable: function () {
        db.query("SELECT COUNT (*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'listbookdb') AND (TABLE_NAME = 'Users')", function (err, res) {
            if (err) {
                throw err;
            }

            if (res) {
                console.log('table exists');
                return;
            }
            db.query("CREATE TABLE Users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), rule VARCHAR(255))", function (err, res) {
                if (err) {
                    throw err;
                }
                console.log('Table created');
            })
        });

    },

    getUsers: function (callback) {
        return db.query("SELECT * FROM Users", callback);
    },
    searchUser: function (key, callback) {
        return db.query("SELECT * FROM Users WHERE name like ?;", [key], callback);
    },

    getUserById: function (id, callback) {
        return db.query("SELECT * FROM Users WHERE id = ?", [id], callback);
    },

    addUsers: function (user, callback) {
        return db.query("INSERT INTO Users(name, password, rule) VALUE( ?, ?, ?)", [user.name, user.password, user.rule], callback);
    },

    updateUser(id, user, callback) {
        return db.query("UPDATE Users SET name = ?, password = ?, rule = ?  WHERE id = ?", [user.name, user.password, user.rule, id], callback);
    },

    removeUser: function (id, callback) {
        return db.query("DELETE FROM Users WHERE id = ?", [id], callback);
    },
    getUserByUsername: function (username, callback) {
        return db.query("SELECT * FROM Users Where name = ?", [username], callback);
    }
    

}

function checkExistTable() {
    isExistTable = false;
    db.query("SELECT COUNT (*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'listbookdb') AND (TABLE_NAME = 'Users')", function (err, res) {
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

module.exports = Users;