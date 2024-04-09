/**
    1  2  3 4
    5  4
 *  2n - 1

    time % (2n -1)
 */

var passThePillow = function(n, time) {
    // const remainder = time % (2*n - 2);
    // let result = remainder;
    // if (remainder >= n || n === time) {
    //     result = n-(remainder % n) - 1
    // } else {
    //     result ++;
    // }
    // return result;

    const remainder = time % (n - 1)
};

console.log(passThePillow(2, 1));
  