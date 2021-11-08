const express = require('express');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = MongoDBStore({
  uri: 'mongodb://127.0.0.1:27017/novs',
  collection: 'mySessions',
});

const DB_CONNECTION = require('./utils/dbConnect');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use('/auth', authRoutes);
app.use(
  session({
    secret: 'session secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(flash());

app.get('/test', (req, res) => {
  req.session.isLoggedIn = true;
  res.end();
});

app.get('/logout', (req, res) => {
  req.session.destroy((e) => {
    res.send('logged out');
  });
});

app.get(
  '/fggh',
  (req, res, next) => {
    if (req.session.isLoggedIn) {
      next();
    }
    return res.send('not loog;sidg');
  },
  (req, res) => {
    return res.send('user logged in');
  }
);

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
