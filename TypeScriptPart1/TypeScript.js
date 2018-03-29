var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var myString;
var myNum;
var myBoolean;
var myVar;
//One way to declare an array
// var strArray: string[];
// var numArray: number[];
// var booArray: boolean[];
//Another way to declare an array;
var strArray;
var numArray;
var booArray;
// Declaring a Tuple
var strNumTuple;
// Declaring a void
var myVoid;
myVoid = undefined;
myNum = 23;
myVar = true;
strArray = ['Hello', 'Hola'];
strNumTuple = ['Hello', 8];
//Once you pass on required characters you can add more stuff to it;
/////// Functions //////////////////////////////////////////////
function getSum(num1, num2) {
    return num1 + num2;
}
// We can declare returning value type and parameters type in the function
function mySum(num1, num2) {
    // question mark makes it optional
    return num1 + num2;
}
var User = /** @class */ (function () {
    function User(name, email, age) {
        // this refers to the class object
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User has created' + ' ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' ' + 'has been registered!');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name);
    };
    return User;
}());
var john = new User('John', 'john@gmail.com', 34);
john.register();
/// Inheritance ////////////////////////////////////////////////////
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice();
