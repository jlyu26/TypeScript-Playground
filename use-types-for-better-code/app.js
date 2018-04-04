"use strict";
////// string
var myName = 'Lyu';
////// number
var myAge = 28.5;
////// boolean
var hasHobbies = true;
// hasHobbies = 0;
// error TS2322: Type '0' is not assignable to type 'boolean'.
// let myRealAge;
// myRealAge = 28;
// myRealAge = '28';	// legal
////// assign types:
var myRealAge;
myRealAge = 28;
// myRealAge = '28';
// error TS2322: Type '"28"' is not assignable to type 'number'.
////// array
var hobbies = ['sports', 'music'];
console.log(hobbies[0]); // sports
console.log(typeof hobbies); // object
// hobbies = [100];	// error TS2322: Type 'number[]' is not assignable to type 'string[]'.
////// assign array to include anything:
var myHobbies = ['sports', 'music'];
myHobbies = [100];
console.log(myHobbies); // [100]
////// tuples
// arrays with mixed types, order is important
var address = ['park ave', 81];
////// enum
var Color;
(function (Color) {
    Color[Color["gray"] = 0] = "gray";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["white"] = 100] = "white";
    Color[Color["black"] = 101] = "black";
})(Color || (Color = {}));
var myColor = Color.green;
console.log(myColor); // 1
var wht = Color.white;
console.log(wht); // 100
// enum always refer to the last number in front of it
var blk = Color.black;
console.log(blk); // 101
////// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car); // {brand: "BMW", series: 3}
////// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName()); // Lyu
// void
function sayHello() {
    console.log('hello');
    return; // alternative
}
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(3, '2'));
// error TS2345: Argument of type '"2"' is not assignable to parameter of type 'number'.
////// function types
// let myMultiply;
// myMultiply = sayHello;
// myMultiply();	// hello
// myMultiply = multiply;
// console.log(myMultiply(5, 3));	// 15
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 3)); // 15
// myMultiply = sayHello;
// Type '() => void' is not assignable to type '(val1: number, val2: number) => number'.
// myMultiply();
// Expected 2 arguments, but got 0.
////// objects
var userData = {
    name: 'Lyu',
    age: 28
};
// userData = {};
// error TS2322: Type '{}' is not assignable to type '{ name: string; age: number; }'.
// userData = {
// 	a: 'hello',
// 	b: 22
// };
// error TS2322: Type '{ a: string; b: number; }' is not assignable to type '{ name: string; age: number; }'.
// Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'.
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
////// union types
var myRealRealAge = 28; // number or string
myRealRealAge = '28';
console.log(myRealRealAge); // '28'
// myRealRealAge = true;
// error TS2322: Type 'true' is not assignable to type 'string | number'.
////// check types
var finalValue = 30;
if (typeof finalValue == 'number') {
    console.log('final value is a number');
}
// final value is a number
////// never (TypeScript 2.0) ??? if you go here, you never return
function neverReturns() {
    throw new Error('an error');
}
////// nullable types (TypeScript 2.0)
// not allow types to be null:
// add "strickNullChecks": true to "compilerOptions" in tsconfig.json
var canBeNull = 12;
canBeNull = null; // won't throw error
// let canAlsoBeNull: number;	// not allowed to be null
// canAlsoBeNull = null;	// error TS2322: Type 'null' is not assignable to type 'number'.
