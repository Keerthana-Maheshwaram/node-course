const mongoose = require('mongoose');
const Person = require('./models/person');

// name
// email -- unique
// password
// confirm password

mongoose
  .connect('mongodb://localhost:27017/person')
  .then(() => {
    Person.find({ name: 'kek' })
      .then((doc) => {
        // doc.name = 'Updated value';
        // doc.save().then((newVal) => {
        //   console.log(newVal);
        // });
        console.log(doc);
      })
      .catch();
  })
  .catch((err) => {});
