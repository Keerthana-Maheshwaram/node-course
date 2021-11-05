const express = require('express');
const path = require('path');
const router = express.Router();


const homeController = require('./../controllers/home');

// router.get('/', (req, res) => {
//   return res.sendFile(path.join(__dirname, '..', 'index.html'));
// });

// router.post('/message', (req, res) => {
//   console.log(req.body);
// });

router.get('/', homeController);

module.exports = router;
