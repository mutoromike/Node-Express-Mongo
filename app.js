// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('./middleware/logger')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const product = require('./routes/product.routes');
const user = require('./routes/user.routes');
const app = express();
const dbName = 'starter';


mongoose.connect('mongodb://localhost:27017/' + dbName)
const PORT = process.env.PORT || 5000;


app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/user', user);



app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});
