var express = require('express');
var bodyParse = require('body-parser');
var bookRouter = express();
var Books = require('./bookModel');
bookRouter.use(bodyParse.urlencoded({ extended: true }));
bookRouter.use(bodyParse.json());

bookRouter.get('/books/:id?', function (req, res) {
    if (!req.params.id) {
        Books.getBooks(function (err, result) {
            if (err) {
                res.json(err);
            }
            res.json(result);
        });
    } else {
        Books.getBookById(req.params.id, function (err, result) {
            if (err) {
                res.json(err);
            }
            res.json(result);
        })
    }
});
bookRouter.get('/books/by/:id?', function (req, res) {
    Books.getBookByCategory(req.params.id, function (err, result) {
        if (err) {
            res.json(err);
        } res.json(result);
    })
});
bookRouter.post('/books/search',function(req,res){
    let key= req.body.key;
    Books.searchBook(key, function(err,count){
        if(err){
            res.json(err);
        }res.json(count);
    })
});
bookRouter.post('/books', function (req, res) {
    let book = {
        title: req.body.title,
        author: req.body.author,
        publish: req.body.publish,
        price: req.body.price,
        image: req.body.image,
        categoryId: req.body.categoryId,
        content: req.body.content,
        numberOfPages: req.body.numberOfPages,
        companyIssued: req.body.companyIssued
    }
    Books.addBooks(book, function (err, count) {
        if (err) {
            res.json(err);
        }
        res.json(count);
    })
})

bookRouter.put('/books/:id', function (req, res) {
    let book = {
        title: req.body.title,
        author: req.body.author,
        publish: req.body.publish,
        price: req.body.price,
        image: req.body.image,
        categoryId: req.body.categoryId,
        content: req.body.content,
        numberOfPages: req.body.numberOfPages,
        companyIssued: req.body.companyIssued,
    };
    Books.updateBook(req.params.id, book, function (err, count) {
        if (err) {
            res.json(err);

        }
        res.json(count);
    });
});

bookRouter.delete('/books/:id', function (req, res) {
    Books.removeBook(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        res.json(count);
    })
})


module.exports = bookRouter;