const express = require("express");
const router = express.Router();

// 로그인
router.get('/login', (req, res) => {
    res.send('login');
});

// 레지스터
router.get('/register', (req, res) => {
    res.send('register');
});

module.exports = router;