var db = require('../Dbconnection');



var Category = {

    createTable: function () {
        db.query("SELECT COUNT (*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'listbookdb') AND (TABLE_NAME = 'Categories')", function (err, res) {
            if (err) {
                throw err;
            }

            if (res) {
                console.log('table exists');
                return;
            }
            db.query("CREATE TABLE Categories (id INT AUTO_INCREMENT PRIMARY KEY, catalog VARCHAR(255), description VARCHAR(255), parentId INT)", function (err, res) {
                if (err) {
                    throw err;
                }
                console.log('Table created');
            })
        });

    },

    getCategory: function (callback) {
        return db.query("SELECT * FROM Categories", callback);
    },
    searchCategory:function (key, callback) {
        return db.query("SELECT * FROM Categories WHERE catalog like ?;", [key], callback);
    },

    getCategoryById: function (id, callback) {
        return db.query("SELECT * FROM Categories WHERE id = ?", [id], callback);
    },
    getCategoryParentId: function (id,callback) {
        return db.query("SELECT * FROM Categories WHERE id != ? ",[id],callback);
    },
    getCategoryChild: function(parentId,callback){
        return db.query("SELECT * FROM Categories WHERE parentId = ?",[parentId],callback);
    },
    addCategory: function (category, callback) {
        return db.query("INSERT INTO Categories(catalog, description, parentId) VALUE( ?, ?, ?)", [category.catalog, category.description, category.parentId], callback);
    },

    updateCategory(id, category, callback) {
        return db.query("UPDATE Categories SET catalog = ?, description = ?, parentId = ?  WHERE id = ?", [category.catalog, category.description, category.parentId, id], callback);
    },

    removeCategory: function (id, callback) {
        return db.query("DELETE FROM Categories WHERE id = ?", [id], callback);
    }

}

function checkExistTable() {
    isExistTable = false;
    db.query("SELECT COUNT (*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'listbookdb') AND (TABLE_NAME = 'Categories')", function (err, res) {
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

module.exports = Category;