//Refactor the following exercise
var obj = {
numbers: {
a: 1,
b: 2
}
};
var a = obj.numbers.a;
var b = obj.numbers.b;
//answer:
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const { a, b } = obj.numbers;