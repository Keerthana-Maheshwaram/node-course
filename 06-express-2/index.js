const express = require('express');
const path = require('path');

const router = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(router);

app.use((req, res) => {
  return res.send('<h1>404 not found</h1>');
});

app.listen(3000, () => {
  console.log('server started');
});
