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
        console.log('class A static sTest() method');
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
        console.log("class B - testX() method ".concat(this.city));
    };
    B.prototype.testY = function () {
        console.log("class B - testY() method");
    };
    return B;
}());
// var b1 = new B();
// b1.city = 'Kol';
// b1.testX();
// b1.testY();
