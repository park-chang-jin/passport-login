const express = require("express");
const router = express.Router();

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
    res.send('hello');
    console.log(req.body);
});

module.exports = router;