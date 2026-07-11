const employee = {
    name: 'Rajib',
    designation: 'developer',
    salary: 20000,
    experience: 1
}


// object er key sokol key name ber korar jonno use hoy
const keys = Object.keys(employee);
// console.log(keys);


// object er sokol value ber korar jonno
const values = Object.values(employee);
// console.log(values);


// value increment process
employee.salary = employee.salary + 5000;

const entries = Object.entries(employee);

// object property delete process
delete employee.experience;
delete employee.salary;

// object ke freeze kore rakhte freeze property--->ekhetre object er kono kichui change kora jabe na
Object.freeze(employee);

// Object.seal(employee);

// console.log(entries);
console.log(employee);