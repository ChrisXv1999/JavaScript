let pass = false;
setTimeout(() => {
  pass = true;
}, 30 * 1000);
let i = 0;
const timeOut = 1000 * 3;
new Promise((resolve) => {
  let start = +new Date();
  function getStatus() {
    setTimeout(() => {
      if (pass) {
        resolve();
      } else {
        if(new Date() - start >timeOut) return resolve();
        getStatus();
      }
    },10);
  }
  getStatus();
});
