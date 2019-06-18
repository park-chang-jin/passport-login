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

module.exports = router;