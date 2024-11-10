// Simple Types (Primitives)
var x1 = 10; // 10, 10.5
var x2 = "Ujjwal"; // "Ujjwal", 'Ujjwal', `Ujjwal`
var x3 = true; // true, false
var x4 = 200;
var x5;
var x6;
// console.log(x1);
// console.log(x1, x4);
// console.log(x1 + x4);
// console.log(x1 + x4 + " => x1+x2");
// console.log("x1+x2 => " + x1 + x4);
// console.log(x5!);
// console.log(x6);
// console.log(x6 ?? 5);
// Special Types
var x7 = 100; // any, unknown
x7 = "105";
var x8 = undefined;
var x9 = null;
var x10;
// Object
var obj = {
    "name": "Ujjwal",
    "age": "28"
};
// console.log();
// console.log(obj);
// console.log(obj.name);
// console.log(`${obj.name} ${obj.age}`);
// Array
var arr = [1, 2, 3];
arr.push(4);
// console.log();
// console.log(arr);
// console.log(arr[0]);
// Loop
var animals = ['cat', 'dog', 'lion', 'wolf', 'deer'];
// console.log();
for (var x = 0; x < animals.length; x++) {
    // console.log(animals[x]);
}
// console.log();
for (var y in animals) {
    // console.log(y, animals[y]);
}
// console.log();
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var z = animals_1[_i];
    // console.log(z);
}
// Function
// Return Type, Void Return Type
// Parameter, Default Parameter, Optional Parameter
function addNum1(x1, x2) {
    console.log(x1 + x2);
}
function addNum2(x1, x2) {
    if (x1 === void 0) { x1 = 10; }
    if (x2 != null) {
        return x1 + x2;
    }
    else {
        return x1;
    }
}
// console.log();
// addNum1(10, 20); // 30
// var total1: number = addNum2(); // 10
// console.log(total1);
// var total2 = addNum2(10, 20); // 30
// console.log(total2);
// Rest Parameter
function test1() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    console.log(n);
}
function test2(i) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    console.log(i);
    console.log.apply(console, n);
}
// console.log();
// test1(10, 20, 30);
// test2("Mike", 10, 20, "30");
// Arrow Function
var addVal1 = function (x1, x2) {
    return x1 + x2;
};
var addVal2 = function (x1, x2) { return x1 + x2; };
var test3 = function () {
    console.log("Hello World!!");
};
var test4 = function () { return console.log("Hello World!!"); };
// console.log();
// var result: number = addVal1(10, 20);
// console.log(result);
// console.log(addVal2(10, 20));
// test3();
// test4();
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// console.log();
// console.log(Color);
// console.log(Color.Red);
// console.log(Color[0]);
// console.log(StatusCodes.Success);
// console.log(CardinalDirections.West);
// var, let, const
function test5() {
    if (true) {
        var l1 = 1;
        l1 = 10;
        console.log(l1);
        var l2 = 2;
        l2 = 20;
        console.log(l2);
        var l3 = 3;
        // l3 = 30; // Error
        console.log(l3);
    }
    console.log(l1);
    // console.log(l2); // Error
    // console.log(l3); // Error
}
// test5();
// console.log(l1); // Error
