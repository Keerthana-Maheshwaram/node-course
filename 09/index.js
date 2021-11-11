const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const multer = require('multer');

app.use(express.urlencoded({ extended: false }));

const fsStoage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(multer({ storage: fsStoage, fileFilter }).single('photo'));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', (req, res) => {
  console.log(req.file);
});

app.get('/movie', (req, res) => {
  // fs.readFile(path.join(__dirname, 'movie.mp4'), (err, data) => {
  //   res.send(data);
  // });
  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Content-Disposition', 'attachment;filename="xyz.mp4"');
  const fsStream = fs.createReadStream(path.join(__dirname, 'movie.mp4'));
  fsStream.pipe(res);
});

app.post('/async', (req, res) => {
  return res.json({
    content: 'jhdsgfaidfiaugh',
  });
});

app.listen(3000);
