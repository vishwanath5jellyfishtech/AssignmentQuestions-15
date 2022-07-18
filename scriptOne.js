//Q)1 Reverse a given string.
const string5 = "Hello";

const reverseStr = (string5) => {
  var arr5 = " ";
  for (let i = string5.length - 1; i >= 0; i--) {
    arr5 = arr5 + string5[i];
  }
  return arr5;
};
console.log(reverseStr(string5));

//Question no-2 Find the sum of all elements/numbers of a given array.

const myFunc = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(myFunc([1, 2, 3, 4]));

//Q) 3))Reverse each word in a string.

const string = "Hello my name is Vishwa";
//  next we have to split the string using .split() method;
const string1 = string.split(" ");

console.log(string1);
console.log(string1.length);
// main function----------------->>
const reverseString = (string1) => {
  var arr = [];

  for (let i = 0; i < string1.length; i++) {
    var j = string1[i];
    var arr1 = " ";
    for (let k = j.length - 1; k >= 0; k--) {
      arr1 = arr1 + j[k];
    }
    arr.push(arr1);
  }
  return arr.join("");
};
console.log(reverseString(string1));
//Q04 Check if the entered number is palindrome or not?

const isPalindrome = (arr) => {
  let add = arr.toString();
  let str = add.toLowerCase();
  let len = add.length;

  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("mak"));

//Q 5)
// Find the next palindrome number after 1991.
//1 step
const isPalindrome = (arr) => {
  let add = arr.toString();
  let str = add.toLowerCase();
  let len = add.length;

  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

// //2 step
function convertNumIntoString(num) {
  // base case:
  if (num == 0) return "0";

  let Snum = num + "";
  return Snum;
}

// //3 step
function closestPalindrome(num) {
  let RPNum = num - 1;
  while (!isPalindrome(convertNumIntoString(Math.abs(RPNum)))) RPNum--;

  let SPNum = num + 1;

  while (!isPalindrome(convertNumIntoString(Math.abs(SPNum)))) SPNum++;

  if (Math.abs(num - RPNum) > Math.abs(num - SPNum)) {
    return SPNum;
  } else {
    return RPNum;
  }
}

let num = 235;
console.log(closestPalindrome(num));

//Q6) Write a code to find the third largest number in an array without sorting.

function print2largest(arr, arr_size) {
  let i, first, second;

  if (arr_size < 2) {
    console.log(" Invalid Input ");
    return;
  }
  arr.sort();
  for (i = arr_size - 3; i >= 0; i--) {
    if (arr[i] != arr[arr_size - 1]) {
      console.log("The third largest element is " + arr[i]);
      return;
    }
  }
  console.log("There is no third largest element<br>");
}
let arr = [1, 4, 6, 3, 5];
let n = arr.length;
print2largest(arr, n);

//Q) 7 )Write a function to generate random numbers and find if it’s prime or not.

const findPrime = () => {
  let random = Math.random() * 10;
  var num = Math.round(random);
  console.log(num);
  let isPrime = true;
  if (num === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is a prime number`);
    } else {
      console.log(`${num} is a not prime number`);
    }
  } else {
    console.log("The number is not a prime number.");
  }
};
findPrime();

// Q) 8 find even or odd
const findOddEven = () => {
  let random = Math.random() * 10;
  var num = Math.round(random);
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
  console.log(num);
};
console.log(findOddEven());

// Q 9) Write logic to swap values of two variables without using a third variable.
// 1st method

var a = 5;
var b = 6;

var a = a + b; // a = 5 + 6 ; a value is 11
var b = a - b; // b = 11 - 6 ; b value is 5;
var a = a - b; // a = 11 - 5 ; a value is 6
console.log(`the value of a is ${a} and the value of b is ${b}`);

// 2nd method is  destructuring ES6 feuture

let a = 5;
let b = 6;
[a, b] = [b, a]; // destructuring
console.log(`value of a is ${a} and value of b is ${b}`);
//------------------------------------------------------------------------------------>>END
//Q10)  In an array of 100 elements, 1 to 100 are stored but 0 is stored for
//one random number. Write a program to find the missing number.

var foo = [];
for (var i = 1; i <= 100; i++) {
  foo.push(i);
}
foo[20] = 0;
console.log(foo);

const findFoo = (foo) => {
  let len = foo.length;
  for (let i = 0; i < len; i++) {
    if (foo[i] == 0) {
      return i + 1;
    }
  }
};
console.log(findFoo(foo));
//---------------------------------------------------------------->>END

//Q) 11) Write a program to display the duplicate characters of a String.
let str = "Hello mam";

const findDup = (str) => {
  let str1 = str.split("");
  let res = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1.indexOf(str1[i]) !== str1.lastIndexOf(str1[i])) {
      if (!res.includes(str1[i])) {
        res.push(str1[i]);
      }
    }
  }
  return res.join(" ");
};
console.log(findDup(str));

//Q12) Write a program to find the occurrences of each number of an array of 20 elements.

let arr = [1, 2, 3, 3, 4, 4, 5, 3, 6, 7, 7, 1, 2];

let obj = {};

for (const element of arr) {
  if (obj[element]) {
    obj[element] += 1;
  } else {
    obj[element] = 1;
  }
}
console.log(obj);

//Q 13) Write a program to remove duplicate values from an array of integers.
const removeDup = (str) => {
  let uniq = [];
  for (let i of str) {
    if (uniq.indexOf(i) === -1) {
      uniq.push(i);
    }
  }
  console.log(uniq);
};
removeDup([1, 1, 2, 2, 3, 4, 5]);

//Q14))
let input = {
  Developer: 5,
  Designer: 3,
  QA: 4,
  Manager: 1,
};

function createArray(input, arr1 = [], arr2 = []) {
  let tempArr = [];
  for (key in input) {
    tempArr = [];
    for (let i = 0; i < input[key]; i++) {
      arr1.push(key);
      tempArr.push(key);
    }
    arr2.push(tempArr);
  }
  // console.log(arr1);
  console.log(arr2);
}
createArray(input);

//Q 15) If provided the following input :
//React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript

let arr =
  "React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript";

let str = arr.toLowerCase();
(split = str.split(" ")), (obj = {});

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}
const keysSorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
const result = {};
keysSorted.forEach((key) => {
  result[key] = obj[key];
});

console.log("Result: " + JSON.stringify(result));
