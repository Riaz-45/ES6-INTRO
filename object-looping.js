const numbers = [1, 2, 3, 4, 5, 6]
for(const num of numbers){
    console.log(num);
}


const employee = {
    name: 'Rajib',
    designation: 'developer',
    salary: 20000,
    experience: 1
}

for(const key in employee){
    const value = employee[key]
    console.log(key,':', value);
}

const keys = Object.keys(employee);
console.log(keys);

for(const key of keys){
    const value = employee[key];
}