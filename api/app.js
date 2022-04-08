require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require("cors");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const port = process.env.PORT || 5000;
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

const app = express();

app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;