exports.getSignup = (req, res) => {
  console.log(req.cookies);
  res.render('signup');
};
