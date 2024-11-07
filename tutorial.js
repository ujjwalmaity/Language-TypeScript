// Simple Types (Primitives)
var x1 = 10; // 10, 10.5
var x2 = "Ujjwal"; // "Ujjwal", 'Ujjwal', `Ujjwal`
var x3 = true; // true, false
var x4 = 200;
// Special Types
var x5 = 100; // any, unknown
x5 = "105";
var x6 = undefined;
var x7 = null;
var x8;
// Object
var obj = {
    "name": "Ujjwal",
    "age": "28"
};
// Array
var arr = [1, 2, 3];
arr.push(4);
console.log(x1);
console.log(x1, x4);
console.log(x1 + x4);
console.log(x1 + x4 + " => x1+x2");
console.log("x1+x2 => " + x1 + x4);
console.log();
console.log(obj);
console.log(obj.name);
console.log("".concat(obj.name, " ").concat(obj.age));
console.log();
console.log(arr);
console.log(arr[0]);
