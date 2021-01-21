//Function for Checking if the Number is Prime

const digit = parseInt(prompt("Enter the digit you would like to check: "));
let isPrime = true;

if (digit === 1) {
    console.log("false");
}

else if (digit > 1) {
    for (let i = 2; i < digit; i++) {
        if (digit % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("true");
    } else {
        console.log("false");
    }
}

else {
    console.log("false");
}

//Implementation of Factorial Function

const digit = parseInt(prompt("Enter the digit you would like to calculate the factorial of: "));

function factorial(digit) {
    let result = digit;

    if (digit === 0 || digit === 1)
        return 1;
    while (digit > 1) {
        digit--;
        result *= digit;

    }
    return result;
}

console.log(factorial(digit));

//Number Factorization with the Recursion

const digit = parseInt(prompt("Enter the digit you would like to calculate the factorial of: "));

function factorial(digit) {
    if (digit < 0)
        return -1;
    else if (digit === 0)
        return 1;
    else {
        return (digit * factorial(digit - 1));
    }
}
console.log(factorial(digit));

//We Can also do the Digits Factoring with the Help of a "For Loop"

const digit = parseInt(prompt("Enter the digit you would like to calculate the factorial of: "));

function factorial(digit) {
    if (digit === 0 || digit === 1)
        return 1;
    for (let i = digit - 1; i >= 1; i--) {
        digit *= i;
    }
    return digit;
}
console.log(factorial(digit));

//Fibonacci nth Number

const digit = parseInt(prompt("Enter the digit you would like to get the nth Fibonacci number of: "));

function fib(digit) {
    if (digit === 0)
        return 0;
    if (digit === 1 || digit === 2)
        return 1;

    let dig_1 = 1, dig_2 = 1, current;

    for (let i = 3; i <= digit; i++) {
        current = dig_1 + dig_2;
        dig_1 = dig_2;
        dig_2 = current;
    }

    return current;
}
console.log(fib(digit));

//isSorted Function

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const currentValue = array[i], nextValue = array[i + 1];
        if (currentValue > nextValue) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([3, 9, -3, 10])); //array example

//Reverse the String Function

const str = prompt("Enter the word you would like to reverse: ");
function reverse(str) {

    if(!str || str.length < 2 || typeof str!== 'string') {
        return ' ';
    }

    const revArray = [];
    const length = str.length - 1;

    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }

    return revArray.join('');
}

document.write(reverse(str));

//indexOf Array Function Implementation

function indexOf(array, index) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === index) {
            return i;
        }
    }
    return -1;
}
console.log(indexOf([1, 2, 3], 4));

//isPalindrom Function Implementation

const str = prompt("Enter a word/sentence you would like to examine: ");

function isPalindrome(str) {
    let regCheck = /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(regCheck, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(isPalindrome(str));

//isPalindrom Function Implementation with a For Loop

const str = prompt("Enter a word/sentence you would like to examine: ");

function isPalindrome(str) {
    let regCheck = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regCheck, '');
    let length = str.length;
    for (let i = 0; i < length/2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(str));

//Find the Missing Number in Array

const missing = (arr) => {
    const minNum = Math.min(...arr);
    const maxNum = Math.max(...arr);

    let newArr = Array.from(Array(maxNum-minNum), (value, i) => {
        return i + minNum
    });

    let filteredArr = newArr.filter(i => {
        return !arr.includes(i)
    })
    return filteredArr;
};

let missingNumber = missing([5, 1, 4, 2]);

console.log(missingNumber.toString());

//isBalanced Function Implementation

const isBalanced = (string) => {
    const arrOutOfStr = string.split('');
    let openBrackArr = [];

    const openBrackets = {
        '(': true,
        '[': true,
        '{': true,
    };

    const closedBrackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let i = 0, length = arrOutOfStr.length; i < length; i++) {
        if (openBrackets[arrOutOfStr[i]]) {
            openBrackArr.push(arrOutOfStr[i]);
        } else if (closedBrackets[arrOutOfStr[i]] && openBrackArr.pop() !== closedBrackets[arrOutOfStr[i]]) {
            return false;
        }
    }

    return !openBrackArr.length;
}

console.log(isBalanced('foo { bar { baz }') === true);