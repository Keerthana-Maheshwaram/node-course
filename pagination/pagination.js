const mongoose = require('mongoose');

const User = require('./model');

const perPage = 5;
const currrentPage = 5;

mongoose.connect('mongodb://127.0.0.1:27017/kek').then(() => {
  User.find()
    .skip(perPage * (currrentPage - 1))
    .limit(perPage)
    .then((data) => {
      console.log(data);
    });
});
