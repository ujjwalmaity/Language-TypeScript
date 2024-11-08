// Class
// Non static variable
// Constructor
var A = /** @class */ (function () {
    function A(id, city) {
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
    return A;
}());
// var a1 = new A(101, "Kolkata");
// console.log(a1.id, a1.city);
// a1.setCity("Bangalore");
// console.log(this.city); // undefined
// console.log(a1.city);
// console.log(a1.getCity());
// var a2 = {
//     "id": 201,
//     "city": "Chennai"
// };
// console.log(a2.city);
