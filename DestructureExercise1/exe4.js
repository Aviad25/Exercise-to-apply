//Destructure an object with computed property names:

/*

const propName = 'name';
const person = {
[propName]: 'John',
age: 30
};


*/
//answer

const propName = 'name';
const person = {
  [propName]: 'John',
  age: 30
};

const { [propName]: personName, age } = person;

console.log(personName); // "John"
console.log(age); // 30




