const outer = (x) => {
  const inner = () => {
    console.log(x);
  };
  return inner;
};

const k = outer(6);

k();
