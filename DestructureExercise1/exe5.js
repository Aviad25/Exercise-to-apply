

const propName = 'address';
const person = {
  name: 'John',
  age: 30,
  [propName]: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
}

const { 
  name, 
  age, 
  [propName]: { 
    street, 
    city, 
    state 
  } 
} = person;