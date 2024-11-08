// Simple Types (Primitives)
var x1: number = 10; // 10, 10.5
var x2: string = "Ujjwal"; // "Ujjwal", 'Ujjwal', `Ujjwal`
var x3: boolean = true; // true, false
var x4 = 200;

// console.log(x1);
// console.log(x1, x4);
// console.log(x1 + x4);
// console.log(x1 + x4 + " => x1+x2");
// console.log("x1+x2 => " + x1 + x4);

// Special Types
var x5: any = 100; // any, unknown
x5 = "105";
var x6: undefined = undefined;
var x7: null = null;
var x8: never;

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
var arr: number[] = [1, 2, 3];
arr.push(4);

// console.log();
// console.log(arr);
// console.log(arr[0]);

// Loop
var animals = ['cat', 'dog', 'lion', 'wolf', 'deer']
// console.log();
for (var x: number = 0; x < animals.length; x++) {
    // console.log(animals[x]);
}
// console.log();
for (var y in animals) {
    // console.log(y, animals[y]);
}
// console.log();
for (var z of animals) {
    // console.log(z);
}

// Function
// Return Type, Void Return Type
// Parameter, Default Parameter, Optional Parameter
function addNum1(x1: number, x2: number): void {
    console.log(x1 + x2);
}
function addNum2(x1: number = 10, x2?: number): number {
    if (x2 != null) {
        return x1 + x2;
    } else {
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
function test1(...n: number[]): void {
    console.log(n);
}
function test2(i: string, ...n: any[]): void {
    console.log(i);
    console.log(...n);
}

// console.log();
// test1(10, 20, 30);
// test2("Mike", 10, 20, "30");

// Arrow Function
var addVal1 = (x1: number, x2: number): number => {
    return x1 + x2;
};
var addVal2 = (x1: number, x2: number): number => x1 + x2;
var test3 = (): void => {
    console.log("Hello World!!");
};
var test4 = () => console.log("Hello World!!");

// console.log();
// var result: number = addVal1(10, 20);
// console.log(result);
// console.log(addVal2(10, 20));
// test3();
// test4();

// Enum
enum Color { Red, Green, Blue }
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}

// console.log();
// console.log(Color);
// console.log(Color.Red);
// console.log(Color[0]);
// console.log(StatusCodes.Success);
// console.log(CardinalDirections.West);

// var, let, const
function test5(): void {
    if (true) {
        var l1: number = 1;
        l1 = 10;
        console.log(l1);

        let l2: number = 2;
        l2 = 20;
        console.log(l2);

        const l3: number = 3;
        // l3 = 30; // Error
        console.log(l3);
    }
    console.log(l1);
    // console.log(l2); // Error
    // console.log(l3); // Error
}

// test5();
// console.log(l1); // Error
