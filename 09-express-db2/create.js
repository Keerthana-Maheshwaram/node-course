const mongoose = require('mongoose');

const Person = require('./models/person');

mongoose
  .connect('mongodb://localhost:27017/person')
  .then(() => {
    const person = new Person({
      name: 'test2',
      age: 2,
    });
    return person.save();
  })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {});
