//Destructure a complex object with default values,
//renaming, and computed property names:


const propName = 'address';
const person = {
firstName: 'John',
lastName: 'Doe',
[propName]: {
street: '123 Main St',
city: 'Anytown'
}
};

const {
    firstName,
    lastName,
    [propName]: { street, city, country = 'USA' },
    fullName: name = `${firstName} ${lastName}`
  } = person;
  
  console.log(name); // "John Doe"
  console.log(street); // "123 Main St"
  console.log(city); // "Anytown"
  console.log(country); // "USA"

 