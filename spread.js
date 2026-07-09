const numbers = [87, 8, 5, 91]
console.log(numbers);
console.log(...numbers);

// const max = Math.max(112, 543, 54, 243, 87);
const max = Math.max(...numbers);
console.log(max);

// array operations:

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(second);

// spread operation for array copy

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [...first, 55, 6, 8];
second.push(6);
console.log(first)
console.log(second);
console.log(third);


// spread operation for objects

const person = {name: 'Rahim', age: 45};
const employee = {salary: 55000, ...person};
console.log(employee);


// const total = (a, b, c) => a+b+c;
// const result = total(45, 65, 21)
// const digits = [78, 55, 66];
// total(digits)
