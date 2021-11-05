const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Person = require('./models/person');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('form');
});

app.get('/data', (req, res) => {
  Person.find().then((data) => {
    res.render('data', {
      parr: data,
    });
  });
});

app.post('/save', (req, res) => {
  // console.log(req.body);
  const abc = new Person({
    name: req.body.name,
    age: req.body.age,
  });
  abc.save().then((savedDoc) => {
    // res.send(savedDoc);
    res.redirect('/data');
  });
});

mongoose
  .connect('mongodb://localhost:27017/person')
  .then(() => {
    console.log('connectedd to db');
    app.listen(3000, () => {
      console.log('exppress server staresdrfs');
    });
  })
  .catch(() => {
    console.log('could nnot connect to db');
  });
