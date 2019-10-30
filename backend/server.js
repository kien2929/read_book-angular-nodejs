const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
var multer = require('multer');
const Users = require("./api/admin/auth/userModel");
const userRouter = require("./api/admin/auth/routes");
const Books = require("./api/admin/book/bookModel");
const bookRouter = require("./api/admin/book/routes");
const Category = require("./api/admin/category/categoryModel");
const categoryRouter = require("./api/admin/category/routes");
const fs = require('fs');
require('dotenv').config();


var publicDir = require('path').join(__dirname, '/uploads');
app.use(express.static(publicDir));
app.listen(process.env.PORT, res => console.log("Server listen on port 3000"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors({ origin: , credentials: this.true }));
app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
Users.createTable();
Books.createTable();
Category.createTable();
app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/category', categoryRouter);

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        console.log(req.file);
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null });
    });
});


module.exports = app;