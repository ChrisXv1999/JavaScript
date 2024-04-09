const delay = (_,index) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * Math.random(), [index]);
  })
}
async function run() {
  const result = await Promise.all(Array.from({length:10}).map(delay))
  console.log(result);
}
run()