const express = require('express');
const app = express();

const router = require('./routes/home');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(3000, () => {
  console.log('serving');
});
