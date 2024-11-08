// Class
// Non static variable
// Constructor
class A {
    // var id: number; // Error
    id: number;
    city: string;

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
}

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
