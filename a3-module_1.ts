// Export Module
export var x: number = 10;

export function test(): void {
    console.log("function test()");
}

export class A {
    country: string = 'USA';
}

var x2: number = 10;

function test2(): void {
    console.log("function test2()");
}

class A2 {
    country: string = 'USA';
}

export { x2, test2, A2 }
