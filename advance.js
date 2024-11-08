var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
// Non static variable
// Constructor
// Static variable, Static method
var A = /** @class */ (function () {
    function A(id, city) {
        this.country = "IN";
        this.id = id;
        this.city = city;
    }
    // function setCity(city: string): void { // Error
    A.prototype.setCity = function (city) {
        this.city = city;
    };
    A.prototype.getCity = function () {
        // return city; // Error
        return this.city;
    };
    A.sTest = function () {
        console.log('class A - static method sTest()');
    };
    A.country = "India";
    return A;
}());
var a1 = new A(101, "Kolkata");
// console.log(a1.id, a1.city);
// a1.setCity("Bangalore");
// console.log(this.city); // undefined
// console.log(a1.city);
// console.log(a1.getCity());
// console.log(A.country);
// console.log(a1.country);
// A.sTest();
var a2 = {
    "id": 201,
    "city": "Chennai"
};
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.testX = function () {
        console.log("class B - method testX(), variable ".concat(this.city));
    };
    B.prototype.testY = function () {
        console.log("class B - method testY()");
    };
    return B;
}());
// var b1 = new B();
// b1.city = 'Kol';
// b1.testX();
// b1.testY();
// Class Inheritance
var M = /** @class */ (function () {
    function M() {
    }
    M.prototype.testM = function () {
        console.log("class M - method testM()");
    };
    return M;
}());
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.testC = function () {
        var x = function () {
            console.log("class C - method testC() - function x()");
        };
        x();
    };
    return C;
}(M));
// var c1 = new C();
// c1.testM();
// c1.testC();
// Access Modifiers
// Public, Protected, Private
var D = /** @class */ (function () {
    function D() {
        // public name: string = "Mike";
        this.name = "Mike";
        this.city = "New York";
        this.pin = "10001";
    }
    D.prototype.getAddress = function () {
        return "".concat(this.name, ", ").concat(this.city, ", ").concat(this.pin);
    };
    return D;
}());
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E.prototype.getCity = function () {
        return this.city;
    };
    return E;
}(D));
// var d1 = new D();
// console.log(d1.name);
// console.log(d1.city); // Error
// console.log(d1.pin); // Error
// console.log(d1.getAddress());
// var e1 = new E();
// console.log(e1.getCity());
