
//1. Fill an array with 100 of the same object using the array fill
//method.


const dude = "y so serious?";
const arr =  new Array(100);
arr.fill(dude,0,99);
console.log(arr);

//2.Create an array with numbers ranging from 1-100 using
//the Array.from method.

const arr2 = new Array(100);
var num = 1;
for(let i=0;i<arr.length;i++){
    arr2[i]=num;
    num++;
}

arr2.toString();
const arr3 = Array.from(arr2);
console.log(arr3);

// another way to to do exe 2 :
let i=1;
let array2 = Array.from({length: 100}, (v, i) => i + 1);
//creating array2 , from the start using Array.from method, in the first "," 
//saying the length of the new array we created after  that we used destructured "for" method.
//"v" is a value for the for and i is the value we want to insert
//the for will run in length of we decided and will insert all the "i"s 



//3. Convert only values of an object into one array.


let obj = {firstname:"bro",lastname:"dude",age:30, eyecolor:"brown"};   
const converter = Object.values(obj);
console.log(converter);
//Object.values(the name of the object)
//create a new  array with all the values of the object we inserted


//4. Convert an array into one object.

let reverseObj = Object.assign(converter);
console.log(reverseObj);
//I reversed the Object.values method
//by using the Object.assign method 
//that created a new object out an array values


//5. Find out if an array is an array.
//lets check if converter from before is an array?

var checker = Array.isArray(converter);
console.log(checker);

//Array.isArray(the array we are checking)
//we inserted the boolean value into a variable



//6. Copy an array.
//● Create a copy of an array that won’t affect the
//original array if modified.
//● Create a copy of an array that will affect the original
//array if modified.

//6.1:
const copyOfArray = [...converter];
console.log(copyOfArray);

//6.2

const arrayRogue = copyOfArray.concat(converter);
console.log(arrayRogue);

//stole the value of the converter and insert them to himself
