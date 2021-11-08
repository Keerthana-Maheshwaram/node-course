const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const authController = require('./../controllers/auth');
const User = require('./../models/user');

router.get('/signup', authController.getSignup);

router.post('/signup', (req, res) => {
  console.log(req.body);
  const { email, name, password, cnfPassword } = req.body;
  User.findOne({ email })
    .then((doc) => {
      if (doc) {
        return res.send('Email exists');
      }
      if (password != cnfPassword) {
        return res.send('Password dont match');
      }
      const user = new User({
        name,
        email,
        password,
      });
      return user.save();
    })
    .then((x) => {
      res.send({
        message: 'user created',
        ...x,
      });
    })
    .catch((e) => {
      console.error(e);
    });
});

module.exports = router;
