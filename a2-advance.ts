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
        console.log('class A - static method sTest()');
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
        console.log(`class B - method testX(), variable ${this.city}`);
    }

    testY(): void {
        console.log(`class B - method testY()`);
    }
}

// var b1 = new B();
// b1.city = 'Kol';
// b1.testX();
// b1.testY();

// Class Inheritance
class M {
    testM(): void {
        console.log("class M - method testM()");
    }
}

class C extends M {
    testC(): void {
        let x = () => {
            console.log("class C - method testC() - function x()");
        }
        x();
    }
}

// var c1 = new C();
// c1.testM();
// c1.testC();

// Access Modifiers
// Public, Protected, Private
class D {
    // public name: string = "Mike";
    name: string = "Mike";
    protected city: string = "New York";
    private pin: string = "10001";

    getAddress(): string {
        return `${this.name}, ${this.city}, ${this.pin}`;
    }
}

class E extends D {
    getCity(): string {
        return this.city;
    }
}

// var d1 = new D();
// console.log(d1.name);
// console.log(d1.city); // Error
// console.log(d1.pin); // Error
// console.log(d1.getAddress());
// var e1 = new E();
// console.log(e1.getCity());
