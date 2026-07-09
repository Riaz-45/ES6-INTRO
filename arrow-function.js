// function declaration
function add(num1, num2){
    return num1 + num2;
}

// function expression
const addition = function(num1, num2){
    return num1 + num2;
}

// arrow function  ---  {--by default return hoye jabe kono return use kora lagbe na single line er khettre--}
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

const isFirstBig = (x, y) => (x > y);

const result = add2(27, 14)
console.log(result);

const isBig = isFirstBig(45, 12);
console.log(isBig)

// multiple line arrow function  -----  {--multiple line function e akadhik statement thakay ekhane return statement use krte hobe--}
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return console.log(result);
}

doMath(5,6)