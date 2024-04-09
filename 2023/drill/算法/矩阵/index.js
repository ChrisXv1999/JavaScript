// function matrix(m, n) {
//   const d2Array = Array.from({ length: m }).map(() =>
//     Array.from({ length: n }).fill(0)
//   );
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < m * n; i++) {
//     d2Array[x][y] = i;
//     if (d2Array[x][y + 1] == 0) {
//       y++;
//     } else if (d2Array[x + 1] && d2Array[x + 1][y] == 0) {
//       x++;
//     } else if (d2Array[x][y - 1] == 0) {
//       y--;
//     } else if (d2Array[x - 1][y] == 0) {
//       x--;
//     }
//   }
//   return d2Array;
// }
// console.log(matrix(10, 10));

function fillMatrix(m, n) {
    const d2Array = Array.from({ length: m }).map(() =>
      Array.from({ length: n }).fill(-1)
    );
    let x = 0;
    let y = 0;
    let i = 0;
    d2Array[x][y] = 0;
    while (i < m * n - 1) {
      while (d2Array[x][y + 1] === -1) {
        d2Array[x][++y] = ++i;
      }
      while (d2Array[x + 1] && d2Array[x + 1][y] === -1) {
        d2Array[++x][y] = ++i;
      }
      while (d2Array[x][y - 1] === -1) {
        d2Array[x][--y] = ++i;
      }
      while (d2Array[x - 1] && d2Array[x - 1][y] === -1) {
        d2Array[--x][y] = ++i;
      }
    }
    return d2Array;
  }
  console.log(fillMatrix(10, 10));

// var a = {
//   value: 10,
//   toString() {
//     return this.value + 1;
//   },
//   valueOf() {
//     return this.value + 2;
//   },
//   [Symbol.toPrimitive]() {
//     return this.value + 3;
//   },
// };
// // console.log(a);
// function say(){
//     console.log('123');
// }
// say[Symbol.toPrimitive]= ()=> {
//     say()
//     return say
// }
// console.log(say);
