//Swap with array destructuring:

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


//answer

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];