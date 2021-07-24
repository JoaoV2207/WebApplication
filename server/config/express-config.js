require('dotenv').config();
const express = require('express');

const app = express();

const cors = require('cors')
app.use(cors());

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

const usersRouter = require('../users/controller/user-controller');
app.use('/users', usersRouter);

module.exports = app;