const express = require('express');
const router = express.Router();

const Person = require('./../models/Person');

const personArray = [];

router.get('/', (req, res) => {
  res.render('form');
});

router.get('/data', (req, res) => {
  return res.render('data', {
    parr: personArray,
  });
});

router.post('/save', (req, res) => {
  const p = new Person(req.body.name, req.body.age);
  personArray.push(p);
  console.log(personArray);
  return res.redirect('/data');
});

module.exports = router;
