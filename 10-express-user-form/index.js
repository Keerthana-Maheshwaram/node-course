const express = require('express');

const DB_CONNECTION = require('./utils/dbConnect');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoutes);

app.use((req, res) => {
  res.send('<h1>404 Not Found</h1>');
});

DB_CONNECTION()
  .then(() => {
    console.log('Db connected');
    return app.listen(PORT);
  })
  .then(() => {
    console.log('Server sraterd');
  });
