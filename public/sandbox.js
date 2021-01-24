"use strict";
// Lesson 2: Compiling TypeScript
let character = 'mario';
let age = 30;
let isBlackBelt = false;
//character = 20;
character = 'luigi';
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
// Lesson 3: Type Basics
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(30));
// Lesson 4: Objects & Arrays
// arrays
let names = ['luigi', 'mario', 'yoshi'];
// names = 'hello';
names.push('toad');
// names.push(3);
// names[0] = 3;
let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun');
// numbers[1] = 'shaun';
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(20);
mixed[0] = 3;
// mixed.push(true);
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fightning', 'sneaking'];
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
    // skills: []
};
// Lesson 5: Explicit Types
// explicit types
let character2;
let age2;
let isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
//arrays
let ninjas = [];
// ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');
// union types
let mixed2 = [];
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log(mixed2);
let uid;
uid = '123';
uid = 123;
// uid = false;
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' };
// Lesson 6: Dynamic (any) types
let age3 = 25;
age3 = true;
console.log(age3);
age3 = 'hello';
console.log(age3);
age3 = { name: 'luigi' };
console.log(age3);
let mixed3 = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);
let ninja1;
ninja1 = { name: 'yoshi', age: 24 };
console.log(ninja1);
ninja1 = { name: 25, age: 'yoshi' };
console.log(ninja1);
// Lesson 8: Function Basics
let greet;
// greet = 'hello';
greet = () => {
    console.log('hello, world');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 1, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greet1 = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// Lesson 10: Function Signatures
// let greet2: Function;
let greet2;
greet2 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numTwo;
    }
};
let logDetails1;
logDetails1 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
