const express = require('express');
const router = express.Router();

const Note = require('./models/note.model');

router.get('/notes', (req, res) => {
  Note.find()
    .then((note) => {
      return res.status(200).json(note);
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'Internal Server Error',
      });
    });
});

router.get('/note/:id', (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send('Please provide id');
  }
  Note.findOne({ _id: id })
    .then((doc) => {
      if (doc) {
        return res.status(200).json(doc);
      } else {
        return res.status(404);
      }
    })
    .catch((err) => {
      return res.status(500).send('Internal error');
    });
});

router.post('/note', (req, res) => {
  console.log(req.body);
  const note = new Note(req.body);
  note
    .save()
    .then((doc) => {
      return res.status(201).json({
        message: 'note saved',
        ...doc._doc,
      });
    })
    .catch((e) => {
      return res.status(500).send('Internal error');
    });
});

router.delete('/note/:id', (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send('Please provide id');
  }
  Note.findOneAndDelete({ _id: id })
    .then((doc) => {
      return res.status(200).json({
        message: 'Deleted',
        ...doc._doc,
      });
    })
    .catch((err) => {
      return res.status(500).send('Internal error');
    });
});

router.patch('/note/:id', (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send('Please provide id');
  }
  console.log(req.body);
  Note.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        desc: req.body.desc,
      },
    }
  )
    .then((doc) => {
      return res.status(200).json({
        message: 'Updated',
        ...doc._doc,
      });
    })
    .catch((err) => {
      return res.status(500).send('Internal error');
    });
});

module.exports = router;
