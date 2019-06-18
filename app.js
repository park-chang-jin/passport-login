const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");

const flash = require('connect-flash');
const session = require("express-session");

const app = express();
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next(); 
});

const db = require("./config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true})
    .then( () => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const indexRouter = require('./route/index');
const userRouter = require('./route/users');


app.use('/', indexRouter);
app.use('/users', userRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));