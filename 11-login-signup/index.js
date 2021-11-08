const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const bcrypt = require('bcryptjs');
const app = express();

const store = MongoDBStore({
  uri: 'mongodb://localhost:27017/userbase',
  collection: 'sessionStore',
});

const DB_CONNECT = require('./utils/db');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'kek',
    saveUninitialized: false,
    resave: false,
    store,
  })
);
app.use(flash());
app.get('/signup', (req, res) => {
  return res.render('signup', {
    error: req.flash('error'),
  });
});

app.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email }).then((doc) => {
    console.log(doc);
    if (doc) {
      console.log('in if');
      req.flash('error', 'Email already exists');
      return res.redirect('/signup');
    }

    bcrypt
      .hash(req.body.password, 12)
      .then((hash) => {
        console.log(hash);
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
        return user.save();
      })
      .then(() => {
        res.redirect('/login');
      });
  });
});

DB_CONNECT()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.error(err.message);
  });
