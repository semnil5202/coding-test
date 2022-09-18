// 배열 정렬할 때 중복값 제거 되서 초기 인덱스 값 위배되는 문제 -> 해결시 idxA와 idxB를 역순으로 곱하면 된다.

let [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

let arrA = arr[0].split(" ");
let arrB = arr[1].split(" ");
let idxA = [];
let idxB = [];

const setA = new Set(arrA);
const copiedArrA = [...setA];

const setB = new Set(arrB);
const copiedArrB = [...setB];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = Number(arr[i]);
    arr[i] = Number(arr[minIndex]);
    arr[minIndex] = temp;
  }
}

selectionSort(copiedArrA);

// copiedArrA.sort((a, b) => {
//   if (a === b) {
//     return 1;
//   }
//   return a - b;
// });

copiedArrB.sort((a, b) => {
  if (a === b) {
    return 1;
  }
  return a - b;
});

console.log(copiedArrA);

for (let i = 0; i < copiedArrA.length; i++) {
  for (let j = 0; j < copiedArrA.length; j++) {
    if (arrA[i] === copiedArrA[j]) {
      idxA.push(j);
      console.log(idxA);
    }
  }
}

for (let i = 0; i < copiedArrB.length; i++) {
  for (let j = 0; j < copiedArrB.length; j++) {
    if (arrB[i] === copiedArrB[j]) {
      idxB.push(j);
    }
  }
}

function funcS(a, b) {
  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    sum = sum + a[i] * b[i];
  }

  return sum;
}

console.log(idxB, idxA);
