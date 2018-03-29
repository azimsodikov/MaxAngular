// Interfaces allow us to create contracts other classes/ objects have to implement
// We can use them to define custom types without creating classes
// Interfaces ARE NOT compiled to JavaScript! It's just for checking/ validation done by our TypeScript compiler

// Example interface

interface User {
    username: string;
    password: string;
    confirmPassword?: string; // Optional property => Does not have to be implemented
}

let user:User;

// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};

// This value does satisfy the interface
user = {username: 'max', password: 'supersecret'};

// Interfaces can also contain functions (without the function body - as it only is a blueprint/ requirement)

interface CanDrive {
    accelerate(speed:number): void;
}

let car:CanDrive = {
    accelerate: function (speed:number) {
        // ...
    }
};

// This is the one way to tell typescript that it is the type it as a string 
let someValue1: any = "this is a string";
let strLength2: number = (someValue1 as string).length;


// this is the another way to tell Typesctipt to cast as string 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;