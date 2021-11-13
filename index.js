const express = require('express');
const customerRoute = require('./routes/customer-route');

const dotenv = require('dotenv').config();

const db = require('./models/db');

const app = express();

// db.createConnection();

app.use('/customer', customerRoute);

app.listen(3005, () => {
  console.log('server running on port 3005');
});

 
