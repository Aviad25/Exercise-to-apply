//Destructure an object with computed property names
//and a function:
const propName = 'person';
const obj = {
[propName]: {
name: 'John',
age: 30,
getAddress() {
return {
street: '123 Main St',
city: 'Anytown',
state: 'CA'
};
}
}
};

const {
    [propName]: {
      name,
      age,
      getAddress
    }
  } = obj;
  
  console.log(name); // "John"
  console.log(age); // 30
  console.log(getAddress()); // { street: '123 Main St', city: 'Anytown', state: 'CA' }