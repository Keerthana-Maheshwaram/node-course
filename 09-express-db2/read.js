const mongoose = require('mongoose');
const Person = require('./models/person');

mongoose
  .connect('mongodb://localhost:27017/person')
  .then(() => {
    Person.findOne({ name: 'test2' })
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {});
  })
  .catch((err) => {});
