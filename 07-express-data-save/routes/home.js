const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const Person = require('./../models/Person');

router.get('/', (req, res) => {
  res.render('form');
});

router.get('/data', (req, res) => {
  const exisitingData = fs.readFileSync(
    path.join(__dirname, '..', 'data', 'person.json')
  );
  return res.render('data', {
    parr: JSON.parse(exisitingData),
  });
});

router.post('/save', (req, res) => {
  // const p = new Person(req.body.name, req.body.age);
  // personArray.push(p);
  // console.log(personArray);
  // return res.redirect('/data');
  const exisitingData = fs.readFileSync(
    path.join(__dirname, '..', 'data', 'person.json')
  );
  // console.log(JSON.parse(exisitingData));
  const arr = JSON.parse(exisitingData);
  const p = new Person(req.body.name, req.body.age);
  arr.push(p);
  fs.writeFileSync(
    path.join(__dirname, '..', 'data', 'person.json'),
    JSON.stringify(arr)
  );
  return res.redirect('/data');
});

module.exports = router;
