const CONFIG = require('./config/config')
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require('./middleware/errorHandler')
const signup = require('./routes/signup')
const login = require('./controllers/login')
const blog = require('./routes/blog')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/signup', signup)
app.use('/api/login', login)
app.use('/api/blog', blog)

module.exports = app;








