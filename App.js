const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const parser=require("body-parser");
require('dotenv/config');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use(parser.json())
var locationRouter = require('./routes/routes');
var usersRouter = require('./routes/users');


mongoose.connect(process.env.KEY, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.use('/routes', locationRouter);
app.use('/users', usersRouter);


app.listen(port);
