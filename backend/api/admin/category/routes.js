var express = require('express');
var bodyParse = require('body-parser');
var categoryRouter = express();
var Category = require('./categoryModel');
categoryRouter.use(bodyParse.urlencoded({ extended: true }));
categoryRouter.use(bodyParse.json());

categoryRouter.get('/categories/:id?', function (req, res) {
    if (!req.params.id) {
        Category.getCategory(function (err, result) {
            if (err) {
                res.json(err);
            }
            res.json(result);
        });
    } else {
        Category.getCategoryById(req.params.id, function (err, resutl) {
            if (err) {
                res.json(err);
            }
            res.json(resutl);
        })
    }
});
categoryRouter.get('/categories/child/:id?', function (req, res) {
    Category.getCategoryChild(req.params.id,function(err,result){
        if(err){
            res.json(err);
        }
        res.json(result);
    })
})
categoryRouter.post('/categories', function (req, res) {
    let category = {
        catalog: req.body.catalog,
        description: req.body.description,
        parentId: req.body.parentId
    }
    Category.addCategory(category, function (err, count) {
        if (err) {
            res.json(err);
        }
        res.json(count);
    })
})

categoryRouter.put('/categories/:id', function (req, res) {
    let category = {
        catalog: req.body.catalog,
        description: req.body.description,
        parentId: req.body.parentId
    };
    Category.updateCategory(req.params.id, category, function (err, count) {
        if (err) {
            res.json(err);

        }
        res.json(count);
    });
});

categoryRouter.post('/categories/search',function(req,res){
    let key= req.body.key;
    Category.searchCategory(key, function(err,count){
        if(err){
            res.json(err);
        }res.json(count);
    })
});
categoryRouter.delete('/categories/:id', function (req, res) {
    Category.removeCategory(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        res.json(count);
    })
})


module.exports = categoryRouter;