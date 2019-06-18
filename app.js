const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


const indexRouter = require('./route/index');
const userRouter = require('./route/users');


app.use('/', indexRouter);
app.use('/users', userRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));