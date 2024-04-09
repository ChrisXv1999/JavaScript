const p1 = Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });
Promise.resolve().then(async () => {
    console.log(1);
    await p1 
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
  //0 1 2 3 4 5 6
