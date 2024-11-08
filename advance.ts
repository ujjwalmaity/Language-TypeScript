// Class
// Non static variable
// Constructor
// Static variable, Static method
class A {
    // var id: number; // Error
    id: number;
    city: string;
    static country: string = "India";
    country = "IN";

    constructor(id: number, city: string) {
        this.id = id;
        this.city = city;
    }

    // function setCity(city: string): void { // Error
    setCity(city: string): void {
        this.city = city;
    }

    getCity(): string {
        // return city; // Error
        return this.city;
    }

    static sTest(): void {
        console.log('class A static sTest() method');
    }
}

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
// console.log(a2.city);

// Interface
interface X {
    // var city: string; // Error
    city: string;

    // function testX(): void; // Error
    testX(): void;
}
interface Y {
    testY(): void;
}

class B implements X, Y {
    city: string;

    testX(): void {
        console.log(`class B - testX() method ${this.city}`);
    }

    testY(): void {
        console.log(`class B - testY() method`);
    }
}

// var b1 = new B();
// b1.city = 'Kol';
// b1.testX();
// b1.testY();
