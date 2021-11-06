const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  kek: [String],
});

const Test = mongoose.model('Test', testSchema);

mongoose
  .connect('mongodb://localhost:27017/person')
  .then(async () => {
    const doc = await Test.findById('6186ae6aed60cfee45a582b8');
    doc.kek.push('ritu');
    const saved = await doc.save();
    console.log(saved);
  })
  .catch((err) => {});
