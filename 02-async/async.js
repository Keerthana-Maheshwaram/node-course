// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

const fetchData = (cb) => {
  setTimeout(() => {
    cb('xyz');
  }, 2000);
};

const x = (txt) => {
  fetchData((x) => {
    fetchData((x) => {
      fetchData((x) => { });
    });
  });
};

fetchData(x);

const fetchData = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res('xyz');
    }, 2000);
  });
  return promise;
};

fetchData()
  .then((x) => {
    console.log(x);
    return fetchData();
  })
  .then((x) => {
    console.log(x);
    return fetchData();
  })
  .then((x) => {
    console.log("hue hue");
  });