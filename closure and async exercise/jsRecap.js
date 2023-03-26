https://join.slack.com/t/slack-oar8652/shared_invite/zt-1qzyr1u8j-tG3ESvbibDEnGRWSlX5WFw
https://code.tutsplus.com/courses/javascript-fundamentals

// כמה מילים עלייך

// סבב הכרות + משהו שמעניין אותך לדעת עליהם אולי (טכנולוגי או מהחיים)

// כמה מילים על תפוח
// אPHPיך תלמד (ציפיות ודרישות)

// התקנת האפליקציה – ממליצה לעשות שימוש במצגת יחד איתם (להראות להם צעד צעד. חשוב לדבר על חשיבות המשוב!!)

// פתיחת סלאק (לוודא שהם מכירים)

// ! 0. Introduce oneself

// ! 1. GitHub
// show how to upload a file to github and explain it would be neceassary to use during the course

// ! 2. Template literals/Template strings
// show how to use template literals

// EX 1

// const greeting = "Hello";
// const subject = "World";
// console.log(greeting + " " + subject + "!"); // Hello World!

// this is the same as:
// console.log(`${greeting} ${subject}!`); // Hello World!

// EX 2
// Multi-line strings

// console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

// this is the same as:
// console.log(`string text line 1
// string text line 2`);
// "string text line 1
// string text line 2"

// ! 3. Shorthand property names

// const a = "hello";
// const b = 42;
// const c = { d: [true, false] };
// console.log({ a, b, c });

// // this is the same as:
// console.log({ a: a, b: b, c: c });

// ! 4. Arrow functions

// Arrow functions are another way to write functions in JavaScript, but they do
//  have a few semantic differences. Luckily for us in React land, we don't have to worry
//  about this as much if we're using hooks in our project (rather than classes), but the arrow
//  function allows for terser anonymous functions and implicit returns, so you'll see and want
//  to use arrow functions plenty.

// const getFive = () => 5;
// const addFive = (a) => a + 5;
// const divide = (a, b) => a / b;

// this is the same as:
// function getFive() {
//   return 5;
// }
// function addFive(a) {
//   return a + 5;
// }
// function divide(a, b) {
//   return a / b;
// }

// ! 5. Destructuring

// Destructuring is a way to extract data from objects and arrays. It's a very
//  useful tool for extracting data from objects and arrays, and it's also a very
//  common pattern in React.

// ? Object Destructure

// function makeCalculation(obj) {
//   const x = obj.x;
//   const d = obj.y;
//   const z = obj.z === undefined ? 4 : obj.z;
//   return Math.floor((x + d + z) / 3);
// }

// this is the same as:

// function makeCalculation(obj) {
//   const { x, y: d, z = 4 } = obj;
//   return Math.floor((x + d + z) / 3);
// }

// which is the same as:

// function makeCalculation({ x, y: d, z = 4 }) {
//   return Math.floor((x + d + z) / 3);
// }

// Destructure Assignment

// Destructuring can also be used in assignment expressions. This is a very
//  common pattern in React, and it's a great way to extract data from objects
//  and arrays.

// refactor this to a single line of destructuring...
// const info = {
//   title: "Once Upon a Time",
//   protagonist: {
//     name: "Emma Swan",
//     enemies: [
//       { name: "Regina Mills", title: "Evil Queen" },
//       { name: "Cora Mills", title: "Queen of Hearts" },
//       { name: "Peter Pan", title: `The boy who wouldn't grow up` },
//       { name: "Zelena", title: "The Wicked Witch" },
//     ],
//   },
// };
const {} = info // <-- replace the next few `const` lines with this
const title = info.title;
const protagonistName = info.protagonist.name;
const enemy = info.protagonist.enemies[3];
const enemyTitle = enemy.title;
const enemyName = enemy.name;

// const { title } = info;
// console.log(title);
// const {
//   protagonist: {
//     name: protagonistName,
//     enemies: [, , , { name: enemyName, title: enemyTitle }],
//   },
// } = info;
// console.log(protagonistName);
// console.log(enemyName);
// console.log(enemyTitle);
// console.log();

// // ? Array Destructure

// // Array destructuring is a way to extract data from arrays. It's a very
// //  useful tool for extracting data from arrays, and it's also a very
// //  common pattern in React.

// // we have an array with the name and surname
// let arrNames = ["John", "Smith"];

// ? destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
// let [firstName, surname] = arrNames;

// console.log(firstName); // John
// console.log(surname); // Smith

// let [firstRomanName, , romanTitle] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(firstRomanName); // Julius
// console.log(romanTitle); // Consul

// let userA = {
//   name: "John",jsRe
//   age: 30,
// };

// loop over keys-and-values
// for (let [key, value] of Object.entries(userA)) {
//   console.log(`${key}:${value}`);
// }

// let guest = "Jane";
// let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];

// console.log(guest);
// console.log(admin);

// let [name1, name2, ...titles] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(name1); // Julius
// console.log(name2); // Caesar
// console.log(titles); // Consul, of the Roman Republic

//  ? Array Desturcture Assignment

const students = ["Christina", "Jon", "Alexandare"];

// Write your code here
const [] = students;


const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

// Write your code here
// const [student1, [student2, student3], [student4, student5]] = moreStudents;

// console.log(student1, student2, student3, student4, student5);

// ! 6.Parameter Defaults

// This is another feature I use all the time. It's a really powerful way to declaratively
//  express default values for your functions.

// function add(a, b) {
//   b = b === undefined ? 0 : b;
//   return a + b;
// }

// is the same as:
// const add = (a, b = 0) => a + b

// which is the same as:
// function add(a, b = 0) {
//   return a + b;
// }

// console.log(add(1,2))

// ! 7.Rest/Spread

// const user = {
//   name: "Reed",
//   age: 28,
//   isEnglishSpeaker: true,
// };

// const firstUser = {
//   name: user.name,
//   age: user.age,
//   isEnglishSpeaker: user.isEnglishSpeaker,
// };

// const moreUserInfo = {
//   age: 70,
//   country: "USA",
// };
// Copy all of user's properties into secondUser
// const secondUser = {
//   ...user,
// };

// const thirdUser = {
//   ...user,
//   ...moreUserInfo,
//   computer: "MacBook Pro",
// };

// console.log(thirdUser);

// const arr = [5, 6, 8, 4, 9];
// Math.max(...arr);
// is the same as
// Math.max.apply(null, arr);

// const obj1 = {
//   a: "a from obj1",
//   b: "b from obj1",
//   c: "c from obj1",
//   d: {
//     e: "e from obj1",
//     f: "f from obj1",
//   },
// };
// const obj2 = {
//   b: "b from obj2",
//   c: "c from obj2",
//   d: {
//     g: "g from obj2",
//     h: "h from obj2",
//   },
// };
// console.log({ ...obj1, ...obj2 });
// is the same as
// console.log(Object.assign({}, obj1, obj2));

// function add(first, ...rest) {
//   return rest.reduce((sum, next) => sum + next, first);
// }
// is the same as
// function add() {
//   const first = arguments[0];
//   const rest = Array.from(arguments).slice(1);
//   return rest.reduce((sum, next) => sum + next, first);
// }

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ! 8.ESModules

// ESModules are a way to import and export modules in JavaScript. They're
//  a great way to organize your code and keep it modular. They're also a
//  great way to import and export code from libraries.

// import add2 from "./add";

// is the same as
// const add = require('./add')

// can be renamed as we wish

// console.log(add2(1, 2));

// import { foo } from "./foo";

// console.log(foo);

// import { subtract, now } from "./stuff";

// console.log(subtract(5, 2));
// console.log(now);

// ! 9.Ternaries

// let message;
// let bottle = {
//   fullOfSoda: true,
// };

// if (bottle.fullOfSoda) {
//   message = "The bottle has soda!";
// } else {
//   message = "The bottle may not have soda :-(";
// }

// console.log(message);

// same as:

// let message2 = bottle.fullOfSoda
//   ? "The bottle has soda!"
//   : "The bottle may not have soda :-(";

// console.log(message2);

// ! 10.Array Methods

const dogs = [
  {
    id: "dog-1",
    name: "Poodle",
    temperament: [
      "Intelligent",
      "Active",
      "Alert",
      "Faithful",
      "Trainable",
      "Instinctual",
    ],
  },
  {
    id: "dog-2",
    name: "Bernese Mountain Dog",
    temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
  },
  {
    id: "dog-3",
    name: "Labrador Retriever",
    temperament: [
      "Intelligent",
      "Even Tempered",
      "Kind",
      "Agile",
      "Outgoing",
      "Trusting",
      "Gentle",
    ],
  },
];

// dogs.find((dog) => dog.name === "Bernese Mountain Dog");
// {id: 'dog-2', name: 'Bernese Mountain Dog', ...etc}

// The find() method returns the first element in the provided array that satisfies the provided
//  testing function. If no values satisfy the testing function, undefined is returned.

// dogs.some((dog) => dog.temperament.includes("Aggressive"));
// false

// The some() method tests whether at least one element in the array passes the test implemented
//  by the provided function. It returns true if, in the array, it finds an element for which the
//  provided function returns true; otherwise it returns false. It doesn't modify the array.

// dogs.some((dog) => dog.temperament.includes("Trusting"));
// true

// dogs.every((dog) => dog.temperament.includes("Trusting"));
// false

// dogs.every((dog) => dog.temperament.includes("Intelligent"));
// true

// The every() method tests whether all elements in the array pass the test implemented by the
//  provided function. It returns a Boolean value.

// dogs.map((dog) => dog.name);
// ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']

// The map() method creates a new array populated with the results of calling a provided function
//  on every element in the calling array.

 const filtered = dogs.filter((dog) => dog.temperament.includes("Faithful"));
 console.log(filtered);


// The filter() method creates a shallow copy of a portion of a given array, filtered
//  down to just the elements from the given array that pass the test implemented by the provided
// function.

const reduced = dogs.reduce((acc, dog) => {
  return [...acc, ...dog.temperament];
}, []);
console.log(reduced);
// [ 'Intelligent', 'Active', 'Alert', ...etc ]

// The reduce() method executes a reducer function (that you provide) on each element of the array,
//  resulting in a single output value.

// ? map assignment

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName,
//  where fullName is generated from name and surname.

// For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

// let usersMapped = users.map((user) => {
//   return {
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
//   };
// });

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith

// ? filter assignment

// You have an array of user objects, each one has name, age and id.

// Write the code to create another array from it, which will contain only the users
//  whose age is less than 30

// For instance:

// let john = { name: "John", age: 25, id: 1 };
// let pete = { name: "Pete", age: 30, id: 2 };
// let mary = { name: "Mary", age: 28, id: 3 };

// let users = [john, pete, mary];

// let someUsers = users.filter((user) => user.age < 30);

// console.log(someUsers.length); // 2
// console.log(someUsers[0].name); // John
// console.log(someUsers[1].name); // Mary

// ! 11.Nullish coalescing operator

// here's what we often did for this:
// x = x || "some default";

// but this was problematic for numbers or booleans where "0" or "false" are valid values

// So, if we wanted to support this:
// add(null, 3);

// here's what we had to do before:
// function add(a, b) {
//   a = a == null ? 0 : a;
//   b = b == null ? 0 : b;
//   return a + b;
// }

// here's what we can do now
// function add(a, b) {
//   a = a ?? 0;
//   b = b ?? 0;
//   return a + b;
// }

// ! 12.Optional chaining
// The optional chaining ?. is a safe way to access nested object properties,
//  even if an intermediate property doesn’t exist.

let user = {};

// Error: Cannot read property 'address' of undefined
// console.log(user.address.street);

// That’s the expected result. JavaScript works like this. As user.address is undefined,
//  an attempt to get user.address.street fails with an error.

// In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”).

// Option 1
console.log(
  user.address ? (user.address.street ? user.address.street.name : null) : null
);
// That’s just awful, one may even have problems understanding such code.

// Option 2
console.log(user.address && user.address.street && user.address.street.name);
// AND’ing the whole path to the property ensures that all components exist
// (if not, the evaluation stops), but also isn’t ideal.

// As you can see, property names are still duplicated in the code.
//  E.g. in the code above, user.address appears three times.

console.log(user?.address?.street?.name);

// Optional chaining stops the evaluation and returns undefined if the
//  part before ?. is undefined or null.

// ! 13. Async/await

    // Use promises whenever you are using asynchronous or blocking code.

    // resolve maps to then and reject maps to catch for all practical purposes.

    // Make sure to write both .catch and .then methods for all the promises.

    // If something needs to be done in both cases use .finally.

    // We only get one shot at mutating each promise.

    // We can add multiple handlers to a single promise.

    // The return type of all the methods in the Promise object, regardless of whether they are static methods or prototype methods, is again a Promise.
    
    // In Promise.all, the order of the promises are maintained in the values variable, irrespective of which promise was first resolved.

function timeout(duration = 0, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`rejected after ${duration}ms`);
      } else {
        resolve(`resolved after ${duration}ms`);
      }
    }, duration);
  });
}

function promises() {
  const successfullPromise = timeout(100).then(
    (result) => `success: ${result}`
  );

  const rejectedPromise = timeout(200, true).then(
    null,
    Promise.reject(`failure: $`)
  );

  successfullPromise.then((result) => console.log(result));
  rejectedPromise.catch((error) => console.log(error));
}

const promise1 = timeout(100);
const promise2 = timeout(200, true);
const promise3 = timeout(300);

promise1.then((result) => console.log(`success: ${result}`)).then(() => {
  promise2.then(null, (error) => console.log(error)).then(() => {
    promise3.then((result) => console.log(`success: ${result}`)).then(() => {
      console.log("done");
    }).catch((error) => console.log(error)).finally(() => {
      console.log("finally");
    });

async function asyncAwait() {
  try {
    const successfullPromise = await timeout(100);
    console.log(`success: ${successfullPromise}`);

    const rejectedPromise = await timeout(200, true);
    console.log(`failure: ${rejectedPromise}`);
  } catch (error) {
    console.log(error);
  }
}

promises();

asyncAwait();

// ! 14. Closures

// In JavaScript, a closure is a function that references variables in the outer scope
//  from its inner scope. The closure preserves the outer scope inside its inner scope.

// To understand the closures, you need to know how the lexical scoping works first.

// ? Lexical scoping

// The lexical scoping is the scoping that is defined at the time of writing the code.
//  It is based on where variables and blocks of scope are authored, by you,
//  at write time, and thus is (mostly) set in stone by the time the lexer processes your code.

// The lexical scoping is also called static scoping or block scoping.

let userName = "John";

function greeting() {
  let message = "Hi";
  console.log(`${message} ${userName}`);
}

greeting(); // Hi John
// console.log(message); //ReferenceError: message is not defined

// In this example:

//  The variable name is a global variable. It is accessible from anywhere including
//  within the greeting() function.
//  The variable message is a local variable that is accessible only within the greeting() function.

// If you try to access the message variable outside the greeting() function, you will get an error.

// So the JavaScript engine uses the scope to manage the variable accessibility.

// According to lexical scoping, the scopes can be nested and the inner
// function can access the variables declared in its outer scope. For example:

function greeting() {
  let message = "Hi";

  function sayHi() {
    console.log(message);
  }

  sayHi();
}

greeting();

// ! 15. Fetch API

// The Fetch API provides an interface for fetching resources (including across the network).
//  It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a
//  more powerful and flexible feature set.

// The Fetch API is promise-based. It uses promises to deal with the asynchronous nature of the HTTP requests.
//  This means that you can use the Fetch API with the async/await syntax.

// The Fetch API is a modern replacement for XMLHttpRequest (XHR).

// Example 1

async function fetchFunc() {
  let url =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
  let response = await fetch(url);

  let commits = await response.json();
  console.log(commits[0].author.login);
}

fetchFunc();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

// Fetch Assignment

//   Create an async function getUsers(names), that gets an array of GitHub logins,
//  fetches the users from GitHub and returns an array of GitHub users.

// The GitHub url with user information for the given USERNAME is:
// https://api.github.com/users/USERNAME.

// There’s a test example in the sandbox.

// Important details:

//     There should be one fetch request per user.
//     Requests shouldn’t wait for each other. So that the data arrives as soon as possible.
//     If any request fails, or if there’s no such user, the function should return null in the resulting array.

// TODO add hoisting

// ! 16. Hoisting

// In JavaScript, hoisting allows you to use functions and variables before they're declared.
//  In this post, we'll learn what hoisting is and how it works.
// ? What is hoisting?

// Take a look at the code below and guess what happens when it runs:

console.log(foo);
var foo = 'foo';

// It might surprise you that this code outputs undefined and doesn't fail or throw an error – even though
//  foo gets assigned after we console.log it!

// This is because the JavaScript interpreter splits the declaration and assignment of functions and variables:
//  it "hoists" your declarations to the top of their containing scope before execution.

// This process is called hoisting, and it allows us to use foo before its declaration in our example above.

// Let's take a deeper look at functions and variable hoisting to understand what this means and how it works.
// Variable hoisting in JavaScript

// As a reminder, we declare a variable with the var, let, and const statements. For example:

var foo;
let bar;

// We assign a variable a value using the assignment operator:

// Declaration
var foo;
let bar;

// Assignment
foo = 'foo';
bar = 'bar';

// In many cases, we can combine declaration and assignment into one step:

var foo = 'foo';
let bar = 'bar';
const baz = 'baz';

// Variable hoisting acts differently depending on how the variable is declared. Let's begin by understanding
//  the behavior for  var variables.

// ? Variable hoisting with var

// When the interpreter hoists a variable declared with var, it initializes its value to undefined.
//  The first line of code below will output undefined:

console.log(foo); // undefined

var foo = 'bar';

console.log(foo); // "bar"

// As we defined earlier, hoisting comes from the interpreter splitting variable declaration and
//  assignment. We can achieve this same behavior manually by splitting the declaration and assignment into two steps:

var foo;

console.log(foo); // undefined

foo = 'foo';

console.log(foo); // "foo"

// Remember that the first console.log(foo) outputs undefined because foo is hoisted and given a default
//  value (not because the variable is never declared). Using an undeclared variable will throw a ReferenceError instead:

console.log(foo); // Uncaught ReferenceError: foo is not defined

// Using an undeclared variable before its assignment will also throw a ReferenceError because no declaration was hoisted:

console.log(foo); // Uncaught ReferenceError: foo is not defined
foo = 'foo';      // Assigning a variable that's not declared is valid

// By now, you may be thinking, "Huh, it's kind of weird that JavaScript lets us access variables before they're
//  declared." This behavior is an unusual part of JavaScript and can lead to errors. Using a variable before its
//  declaration is usually not desirable.

// Thankfully the let and const variables, introduced in ECMAScript 2015, behave differently.
// Variable hoisting with let and const

// Variables declared with let and const are hoisted but not initialized with a default value. Accessing a let or
//  const variable before it's declared will result in a ReferenceError:

console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization

let foo = 'bar';  // Same behavior for variables declared with const

// Notice that the interpreter still hoists foo: the error message tells us the variable is initialized somewhere.
// The temporal dead zone

// The reason that we get a reference error when we try to access a let or const variable before its
//  declaration is because of the temporal dead zone (TDZ).

// The TDZ starts at the beginning of the variable's enclosing scope and ends when it is declared.
//  Accessing the variable in this TDZ throws a ReferenceError.

// Here's an example with an explicit block that shows the start and end of foo's TDZ:

{
 	// Start of foo's TDZ
  	let bar = 'bar';
	console.log(bar); // "bar"

	console.log(foo); // ReferenceError because we're in the TDZ

	let foo = 'foo';  // End of foo's TDZ
}

// The TDZ is also present in default function parameters, which are evaluated left-to-right.
//  In the following example, bar is in the TDZ until its default value is set:

function foobar(foo = bar, bar = 'bar') {
  console.log(foo);
}
foobar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization

// But this code works because we can access foo outside of its TDZ:

function foobar(foo = 'foo', bar = foo) {
  console.log(bar);
}
foobar(); // "foo"

// typeof in the temporal dead zone

// Using a let or const variable as an operand of the typeof operator in the TDZ will throw an error:

console.log(typeof foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization
let foo = 'foo';

// This behavior is consistent with the other cases of let and const in the TDZ that we've seen.
//  The reason that we get a ReferenceError here is that foo is declared but not initialized – we
//  should be aware that we're using it before initialization (source: Axel Rauschmayer).

// However, this isn't the case when using a var variable before declaration because it is initialized with
//  undefined when it is hoisted:

console.log(typeof foo); // "undefined"
var foo = 'foo';

// Furthermore, this is surprising because we can check the type of a variable that doesn't exist without an error.
//  typeof safely returns a string:

console.log(typeof foo); // "undefined"

// In fact, the introduction of let and const broke typeof's guarantee of always returning a string value for any operand.
// Function hoisting in JavaScript

// Function declarations are hoisted, too. Function hoisting allows us to call a function before it is defined.
//  For example, the following code runs successfully and outputs "foo":

foo(); // "foo"

function foo() {
	console.log('foo');
}

// Note that only function declarations are hoisted, not function expressions. This should make sense: 
// as we just learned, variable assignments aren't hoisted.

// If we try to call the variable that the function expression was assigned to, we will get a TypeError or 
// ReferenceError, depending on the variable's scope:

foo(); // Uncaught TypeError: foo is not a function
var foo = function () { }

bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
let bar = function () { }

baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
const baz = function () { }

// This differs from calling a function that is never declared, which throws a different ReferenceError:

foo(); // Uncaught ReferenceError: baz is not defined

// ? How to use hoisting in JavaScript
// * Variable hoisting

// Because of the confusion that var hoisting can create, it's best to avoid using variables before they're declared.
//  If you're writing code in a greenfield project, you should use let and const to enforce this.

// If you are working in an older codebase or have to use var for another reason, MDN recommends that you write 
// var declarations as close to the top of their scope as possible. This will make the scope of your variables more clear.

// You can also consider using the no-use-before-define ESLint rule which will ensure you don't use a variable before its declaration.
// Function hoisting

// Function hoisting is useful because we can hide function implementation farther down in the file and 
// let the reader focus on what the code is doing. In other words, we can open up a file and see what the code
//  does without first understanding how it's implemented.

// Take the following contrived example:

resetScore();
drawGameBoard();
populateGameBoard();
startGame();

function resetScore() {
	console.log("Resetting score");
}

function drawGameBoard() {
	console.log("Drawing board");
}

function populateGameBoard() {
	console.log("Populating board");
}

function startGame() {
	console.log("Starting game");
}

// We immediately have an idea of what this code does without having to read all the function declarations.

// However, using functions before their declaration is a matter of personal preference. 
// Some developers, such as Wes Bos, prefer to avoid this and put functions into modules that
//  can be imported as needed (source: Wes Bos).

// TODO add object methods
