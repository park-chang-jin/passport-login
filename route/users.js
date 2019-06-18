const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const userModel = require('../model/user');


// 로그인
router.get('/login', (req, res) => {
    res.render('login');
});

// 레지스터
router.get('/register', (req, res) => {
    res.render('register');
});

// register hand
router.post('/register', (req, res) => {
    // res.send('hello');
    // console.log(req.body);
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2 ) {
        errors.push({ msg: "Please fill in all fields"});
    }

    // 
    if (password !== password2 ) {
        errors.push({ msg: "Password do not match" });
    }

    // Check password length
    if (password.length < 6) {
        errors.push({ msg: "Password should be at least 6 character "});
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        userModel
            .findOne({ email: email })
            .then(user => {
                if (user) {
                    errors.push({ msg: "Eamil already exists" });
                    res.render('register', {
                        errors,
                        name,
                        eamil,
                        password,
                        password2
                    });
                } else {
                    const newUser = new userModel({
                        name,
                        email,
                        password
                    });
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    req.flash(
                                        'success_msg',
                                        'You are now registered and can log in'
                                    );
                                })
                                .catch(err => console.log(err));
                        })
                    })
                }
            })
    }

    
});

module.exports = router;