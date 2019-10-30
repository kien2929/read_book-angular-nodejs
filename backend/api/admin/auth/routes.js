var express = require('express');
var bodyParse = require('body-parser');
var userRouter = express();
var Users = require('./userModel');
userRouter.use(bodyParse.urlencoded({ extended: true }));
userRouter.use(bodyParse.json());

userRouter.get('/users/:id?', function (req, res) {
    if (!req.params.id) {
        Users.getUsers(function (err, result) {
            if (err) {
                res.json(err);
            }
            res.json(result);
        });
    } else {
        Users.getUserById(req.params.id, function (err, resutl) {
            if (err) {
                res.json(err);
            }
            res.json(resutl);
        })
    }
});
userRouter.post('/users/search',function(req,res){
    let key= req.body.key;
    Users.searchUser(key, function(err,count){
        if(err){
            res.json(err);
        }res.json(count);
    })
});

userRouter.post('/users', function (req, res) {
    let user = {
        name: req.body.name,
        rule: req.body.rule,
        password: req.body.password
    }
    Users.addUsers(user, function (err, count) {
        if (err) {
            res.json(err);
        }
        res.json(count);
    })
})

userRouter.put('/users/:id', function (req, res) {
    let user = {
        name: req.body.name,
        rule: req.body.rule,
        password: req.body.password
    };
    Users.updateUser(req.params.id, user, function (err, count) {
        if (err) {
            res.json(err);

        }
        res.json(count);
    });
});

userRouter.delete('/users/:id', function (req, res) {
    Users.removeUser(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        res.json(count);
    })
})

var passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwt = require('jsonwebtoken');
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = '';

userRouter.post('/login', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        Users.getUserByUsername(username, function (err, user) {
            if (user.length==0) {
                res.status(401).json({ message: 'No such user found' });
            }else   
            if (user[0].password == password) {
                if (user[0].rule == 'yes') {
                    jwtOptions.secretOrKey = 'admin'
                }
                else { jwtOptions.secretOrKey = 'user' }
                let payload = { id: user[0].id };
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({ token: token, username: user[0].name, role:user[0].rule });
            } else {
                res.status(401).json({ msg: 'Password is incorrect' });
            }
        })
    }
});





module.exports = userRouter;