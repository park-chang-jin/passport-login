const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

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