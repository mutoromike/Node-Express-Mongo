// app.js
const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const product = require('./routes/product.routes');
const app = express();
// const url = "mongodb://127.0.0.1" ;

// Database Name
const dbName = 'starter';

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//     try {
//         console.log("Connected successfully to server");
//         const db = client.db(dbName);
//         client.close();
//     } catch (err) {
//         console.log("the error is", err);
//     }
  
// });
mongoose.connect('mongodb://localhost:27017/' + dbName)


const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);



app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});