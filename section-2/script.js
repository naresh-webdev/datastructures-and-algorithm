// console.log("this is from javascipt file");

// 1. reverse the string through function
/*
const inputString = prompt("ENTER A TEST STRING");

const reverseString = function (string) {
  const originalStr = Array.from(string);
  let reversedString = "";

  Array.from(string).forEach((_) => {
    reversedString += originalStr.pop();
  });
  console.log(`result : ${reversedString}`);
};

reverseString(inputString);
*/

// 2. write a function that calculates the sum of all numbers from 1 to some number n

const sumUpto = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }

  console.log(`result : ${result}`);
};

function sumUpto2(n) {
  console.log("result" + (n * (n - 1)) / 2);
}

let t1 = performance.now();

// const n = +prompt"enter a number n upto which you need to calculate the sum");
// console.log(typeof n);
sumUpto2(10000000);

let t2 = performance.now();

console.log("time elapesed is : " + (t2 - t1));
