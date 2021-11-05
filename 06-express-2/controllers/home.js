const getHome = (req, res) => {
  res.render('home', {
    title: 'variable title',
    xyz: 1 + 2 + 3 * 9 + 5,
  });
};

module.exports = getHome;
