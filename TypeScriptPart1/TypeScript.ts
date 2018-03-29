/* 
  What is Typescript
Superset of Javascript
Compiles to plain Javascript
Easily integrated into JS projects
Designed to develop large applications


  What it gives us
Static typing
Class based objects
Makes more modular
ES6 features


  Types
String
Number
Boolean
Array
Any 
Void
Null
Tuple
Enum
Generics

  Class Based Objects
Object oriented programming in JS!
No prototypes
Encapsulation
Inheritence
Access Modifiers

  


*/
var myString: string;
var myNum: number;
var myBoolean: boolean;
var myVar: any;

//One way to declare an array
// var strArray: string[];
// var numArray: number[];
// var booArray: boolean[];

//Another way to declare an array;
var strArray: Array<string>;
var numArray: Array<number>;
var booArray: Array<boolean>;

// Declaring a Tuple
var strNumTuple: [string, number];

// Declaring a void
var myVoid: void;
myVoid = undefined;





myNum = 23;
myVar = true;
strArray = ['Hello', 'Hola'];

strNumTuple = ['Hello', 8];
//Once you pass on required characters you can add more stuff to it;



/////// Functions //////////////////////////////////////////////

function getSum(num1:number, num2:number):number {
    return num1 + num2;
}
// We can declare returning value type and parameters type in the function

function mySum(num1:any, num2?:any){
    // question mark makes it optional
    return num1 + num2;
}


//////// Interfaces ////////////////////////////////////////////

/*function showToDo(todo: {title: string, text: string}):void{
    console.log(todo.title + ' ' + todo.text);
}
let myTodo = {title: 'Trash', text: 'Take out a trash'}

showToDo(myTodo);

//One wayto minimize this code is top create a interfaces instead of functoins

interface Todo {
    title: string;
    text: string;
}
function showToDo(todo: Todo):void{
    console.log(todo.title + ' ' + todo.text);
}
let myTodo = {title: 'Trash', text: 'Take out a trash'}

showToDo(myTodo);
*/

////////// Classes /////////////////////////////////////////////
interface UserInterface {
    name: string;
    email: string;
    age: number;
    register(): any;
    payInvoice(): any;
}


class User implements UserInterface{
    //Classes can have properties and methods 
    name: string;
    email: string; // can be used by only classes that ingherited this User class
    age: number;

    constructor(name: string, email: string, age: number){
        // this refers to the class object
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User has created' + ' ' + this.name);
    }
    register(){
        console.log(this.name + ' ' + 'has been registered!');
    }
    payInvoice(){
        console.log(this.name);
    }

}

let john = new User('John', 'john@gmail.com', 34);
john.register();

/// Inheritance ////////////////////////////////////////////////////




class Member extends User { /// Member has inherited the class User 
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }


    payInvoice(){
        super.payInvoice()
    }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);

mike.payInvoice();