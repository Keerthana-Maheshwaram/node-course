const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes = require('./router');

app.use(cors());
app.use('/api', routes);

mongoose
  .connect('mongodb://127.0.0.1:27017/restapi')
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log('lmao ded');
  });
