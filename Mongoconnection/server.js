const express = require('express');
const connectDB = require('./DB/connection.js');
const app = express();

connectDB();
const port = process.env.port || 3000;

app.listen(port, () => console.log('server started'));