const c2j = require('csvtojson/v2');
const path = require('path');
const mongoose = require('mongoose');

const file = path.join(__dirname, 'MOCK.csv');

const model = require('./model');

let i = 1;

mongoose.connect('mongodb://127.0.0.1:27017/kek').then(() => {
  c2j()
    .fromFile(file)
    .then(async (json) => {
      for (const obk of json) {
        const user = new model({ ...obk, number: i });
        await user.save();
        console.log(i);
        i++;
      }
      process.exit(0);
    });
});
