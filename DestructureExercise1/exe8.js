//Destructure an array of complex objects with renamed
//properties and default values:
const people = [
{ firstName: 'John', lastName: 'Doe', age: 30 },
{ firstName: 'Jane', lastName: 'Doe' }
];


const [
    { firstName: first = 'Unknown', lastName: last, age: years = 18 },
    { firstName: f = 'Unknown', lastName: l, age: y = 18 }
  ] = people;
  
  console.log(first); // "John"
  console.log(last);  // "Doe"
  console.log(years); // 30
  console.log(f);     // "Jane"
  console.log(l);     // "Doe"
  console.log(y);     // 18