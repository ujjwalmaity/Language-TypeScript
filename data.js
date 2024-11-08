"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2 = exports.x2 = exports.A = exports.x = void 0;
exports.test = test;
exports.test2 = test2;
// Export Module
exports.x = 10;
function test() {
    console.log("function test()");
}
var A = /** @class */ (function () {
    function A() {
        this.country = 'USA';
    }
    return A;
}());
exports.A = A;
var x2 = 10;
exports.x2 = x2;
function test2() {
    console.log("function test2()");
}
var A2 = /** @class */ (function () {
    function A2() {
        this.country = 'USA';
    }
    return A2;
}());
exports.A2 = A2;
