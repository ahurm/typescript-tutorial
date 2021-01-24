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
const circ = (diameter: number) => {
  return diameter * Math.PI;
}

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
let character2: string;
let age2: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

//arrays
let ninjas: string[] =[];

// ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');

// union types
let mixed2: (string|number|boolean)[] = [];
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);

console.log(mixed2);

let uid: string|number;
uid = '123';
uid = 123;
// uid = false;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};

ninjaTwo = { name: 'mario', age: 20, beltColour: 'black'};

// Lesson 6: Dynamic (any) types
let age3: any = 25;

age3 = true;
console.log(age3);
age3 = 'hello';
console.log(age3);
age3 = { name: 'luigi' };
console.log(age3);

let mixed3: any[] = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);

let ninja1: { name: any, age: any };

ninja1 = { name: 'yoshi', age: 24};
console.log(ninja1);

ninja1 = { name: 25, age: 'yoshi'};
console.log(ninja1);

// Lesson 8: Function Basics
let greet: Function;

// greet = 'hello';
greet = () => {
  console.log('hello, world');
}

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 1, '20');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10, 7);
// result = 'something else';

//Lesson 9: Type Aliases

type StringOrnum = string | number;
type objWithName = {name : string, uid: StringOrnum};

const logDetails = (uid: StringOrnum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
}

const greet1 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

// Lesson 10: Function Signatures

// let greet2: Function;
let greet2: (a: string, b: string) => void;

greet2 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne + numTwo;
  } else {
    return numTwo - numTwo;
  }
}

let logDetails1: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails1 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}