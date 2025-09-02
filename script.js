

// variables

//3 types

// var - global scope
// let - block scope
// const - block scope

//rules

//var - global scope

//rule :-

var a = 21; // declration and intiazialition

console.log(a);

a = 10; //reuse

console.log(a);

var a = 12; //redeclration and reintiazialition

console.log(a);

// let - block scope

let b = 10; // declration and intiazialition

b = 21; // reuse // reinitiazialition

// let b = 21 // not accept redeclration

console.log(b);

//const - block scope

const c = 10; // declration and initialiaziation

// c = 10   // reuse not accept

// const c = 12 // not accept reDeclration and reIntialiaziation

console.log(c);

// printing Statement

// console.log(1);

// alert

// alert("hello guys this our first class")

//confirm

// let a1 = confirm("did you ate breakfast")

// console.log(a1);

//prompt

// let userName = prompt("enter your full name")

// console.log(userName);

//writeLn

// document.writeln("hello kjhjkhjhghh")

// console.log > console method

// console.log("log")
// console.error("error")
// console.warn("warn")
// console.clear()

// dataTypes

// 1. primitive dataTypes

//   1.Number - 23, 1000
//   2.string - "navi", "123"
//   3.boolean - true  , false
//   4.null
//   5.undefined

// console.log(typeof(123));
// console.log(typeof("123"));
// console.log(typeof(false));

// let d ;

// console.log(d);

// let eName = prompt("hello")

// console.log(eName);

// 2. non primitive dataTypes

//    1.array
//    2.object
//    3.function
//    4.date

// 1.array

let fruit = ["apple", "orange", "banana", "graphs", "cherry"];

console.log(fruit);

console.log(fruit[0]);

console.log(fruit[1]);

console.log(fruit[2]);

console.log(fruit[fruit.length - 1]);

// 2.object

let car = {
  Bmw: "red car",
  jaguar: "black car",
  audi: "white car",
};

console.log(car);

console.log(car.Bmw);
console.log(car.jaguar);

console.clear();

// operators

// 1.arithmetic operators
// 2.assignment operators
// 3.relational or comparision operator
// 4.logical operator

// 1.arithmetic operators

// meaning        // operators

// addition             +

// subraction           -

// multiplication       *

// division              /

// modulus               %

// exponencial          **

// increment            ++

// 1.post increment , 2. pre increment

// decrement             --

// 1.post decrement , 2.pre decrement

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(3 ** 2);
console.log(10 % 2);

//increment

let num = 10; //10
num = ++num;

console.log(num);

let num1 = 10; //0
let num2 = num1++; //0
let num3 = ++num2; //1+10 = 11

console.log(num1, num2, num3);

let num4 = 20;
let num5 = num4-- + num4++; //20--
//19 + 20 = 39
console.log(num4, num5);

//assignment operator

let age1 = 20;

// age1 += 20

age1 += 20; // age1 = age1 + 20

console.log(age1);

let age2 = 30;
let additonVal = 40;

age2 **= additonVal;

console.log(age2);

// relational operator or comparision operator

// operators   meaning      example   results

//     <       lessThen        5<2     false

//     >       greaterThen     5>2     true

//     <=      lessThenEqual   5<=2     false

//     >=      greaterThenEq   5>=5     true

//     ==     loosyTypeEq      5=="5    true

//    ===      strictlyTtypeEq  5==="5"  false

//     !=     loosy not Eq      5!="5"    false

//     !==    strictly not Eq   5!==5      false

console.log(5 === "5"); //aj false
console.log(5 !== "5"); // ar false => true
console.log(5 >= 6); // true D => false
console.log(5 != "5"); // j false
console.log(2 < 1); // r false
console.log(7 >= 6.5); // s true

//logical operator

// operators     meaning        example     results

//   &&          logical AND    true true = true, false true = false

//   ||          logical OR     false true = true , false false = false

//    !           logical NOT    !true = false

console.log("logical");

console.log(!(5 === 5)); // Aj false
console.log(5 >= 5 && !(5 == "5")); // Ar  true => false
console.log(5 > 5); // di false
console.log(!(7 >= 6) || 1 > 1); // j false
console.log(!(5 !== "5")); // r true => false
console.log(5 != "5" || !(5 != 5)); // s false => true

// false || false = false

//(5!="5") = false

// (5!=5)   = !false = true = true

console.clear();

// concatenation

let str = "hello";

let str1 = "john";

let output = str + " " + str1;

console.log(output);

// template string

let str2 = "js";
let str3 = "css";

let output1 = `${str2} ${str3}`;

console.log(output1);

let firstNum = 5;
let secondNum = 6;

console.log(`${firstNum * secondNum}`);

// type conversion

// 1. implicit type conversion
// 2. explicit type conversion

// 1. implicit type conversion

// string

// string anything string

let str5 = "45";

let numm = 100;

console.log(str5 + numm);

console.log(typeof ("hi" + true));

console.log("5" + undefined);

console.log("5" + null);
console.log("5" + [1, 2]);
console.log(typeof ("5" + { a: 1 }));

//Number

console.log(10 + false);
console.log(typeof (10 + false));
console.log(10 + undefined);
console.log(10 + null);
console.log(10 + [1, 2]);
console.log(typeof (10 + [1, 2]));
console.log(10 + { a: 2 });
console.log(10 + "");

//Boolean

console.log(true + 10);
console.log(typeof (true + 10));
console.log(true + undefined);
console.log(typeof (true + undefined));
console.log(true + "10");
console.log(true + null);

// 2.explicit type Conversion

console.log(10 + Number("10"));
console.log(Number(""));
console.log(Number(true));
console.log(Number(undefined));
console.log(Number([1]));
console.log(Number({}));

console.log(Boolean(""));
console.log(Boolean("1"));
console.log(Boolean(-30));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("abc"));

console.clear();

//Flow control statement

// 1.conditional statement
// 2.looping statement

// 1.conditional Statement

// 1. if
// 2. if-else
// 3. if - elseif
// 4. switch statement
// 5. nested if statement
// 6. ternary operator

// if statement

// condition true = allow

if ("hello" && "hi") {
  console.log(10 + 30);
}

// if else

if (1) {
  console.log("true activated");
} else {
  console.log("false activated");
}

// if else if

// if(){

// }else if(){

// }else{

// }

let hour = 20;

if (hour >= 1 && hour <= 6) {
  console.log("early morning");
} else if (hour >= 7 && hour <= 12) {
  console.log("morning");
} else if (hour >= 13 && hour <= 16) {
  console.log("afternoon");
} else if (hour >= 17 && hour <= 19) {
  console.log("evening");
} else {
  console.log("night");
}

// switch statement

// switch(){
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
// }

let trafficLight = "green";

switch (trafficLight) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("start");
    break;
  case "green":
    console.log("go");
    break;
}

// nested if statement

// let age = prompt("enter your age")
// let weight = prompt("enter your weight")
// let height = prompt("enter your height")

// if(age>=18){
//     if(height >= 160){
//         if(weight >= 50){
//             alert("congratulation your are eligible");

//         }else{
//             alert("your weight not eligible");

//         }
//     }else{
//         alert("your height not eligible");

//     }
// }else{
//     alert("your age not eligible");

// }

// ternary operator

// condition ? "statement"1 : "statement"0

let pwdInput = false;

pwdInput
  ? console.log("allow the web")
  : console.log("your password incorrect");

//Looping Statement

// for loop
// while loop
// do while loop
// for of loop
// for in loop

// for loop

// for(intizialization;condition;iteration){
//     statement
// }

for (let i = 1; i <= 5; i++) {
  if (false) {
    console.log(i);
  } else if (i % 2 == 1) {
    console.log(i);
  }
}

// while loop

// intialization
// while(condition){
// statement;
// iteration
//}

let val = 10;

while (val >= 100) {
  console.log(val);
  val--;
}

//do while

// intizialiazation
// do{
//  statement ; iteration
//}
//while(condition)

let do1 = 10;

do {
  console.log("do1");
  do1++;
} while (do1 >= 20);

// for of

let str6 = "javascript";

let arr = [1, 2, 3, 4, 5, 6];

for (let ab of arr) {
  console.log(ab);
}

// for in

for (let bc in arr) {
  console.log(bc);
}

let obj2 = {
  eye: "brown",
  hair: "black",
  human: "homosephian",
};

for (let cd in obj2) {
  console.log(obj2[cd]);
}

console.clear();

// function

function abc() {
  console.log("new function");
}

abc();

let person1 = {
  name1: "john",
  age: 22,
};

function printAge() {
  console.log(`Hello ${person1.name1}`);
}

printAge();

function paramUse(a, b, c = "no") {
  console.log("age ", a, "name ", b, "disability", c);
}

paramUse(44, "john");

function returnVal(a, b) {
  return a * b;
}

let returnVal1 = returnVal(10, 20);

console.log(returnVal1);

console.log(10 * returnVal1);

//var
//let
//const

function scopeCheck() {
  if (true) {
    var hello = "i am a global scope";
  }
  console.log(hello);
}

scopeCheck();

// function types

// named function

named();
function named() {
  console.log("i am a named function");
}

// Anonymous function

var Anonymous = function () {
  console.log("i am a anonymous function");
};
Anonymous();

// Arrow Function

var Arrow = () => {
  console.log("i am a arrow function");
};
Arrow();

{
  var ab = "hello";
}

console.log(ab);

let employeeName = "ram";

let empDetials = (empName) => {
  return `first employee name: ${empName}`;
};

let EmpDetials1 = empDetials(employeeName);

console.log(EmpDetials1);

console.clear();

//Higher order function
//callback function

function function1() {
  console.log("higher order function");
}

function function2() {
  console.log("callback function");
}

function1(function2());

function add(callback, a, b) {
  console.log(a + b);
  callback(20, 20);
}
function sub(num1, num2) {
  console.log(num1 - num2);
}
add(sub, 20, 40);

function mul(a, b, div) {
  console.log(a + b);
  div(1, 100);
}

function modulus(a, b) {
  console.log(a - b);
}

mul(10, 20, modulus);

console.clear();

// curring / uncurring

// self invoke function(iife)

// generator function

// uncurrying

function add2(a, b, c) {
  console.log(a + b + c);
}

add2(10, 20, 30);

// currying

function add3(a) {
  // 10
  return function (b) {
    //20
    return function (c) {
      // 30
      console.log(a + b + c);
    };
  };
}

add3(10)(20)(30);


// self invoke function

// (function(){
//     alert("i am a self invoke function")
// })()


// generator function

// function*genFun(){
//     yield "first val"
//     yield "second val"
//     yield "theird val"
//     yield "fourth val"
//     yield "fivth val"
// }

// let storeGen = genFun()

// console.log(storeGen.next().value);
// console.log(storeGen.next().value);
// console.log(storeGen.next().value);
// console.log(storeGen.next().value);
// console.log(storeGen.next().value);
// console.log(storeGen.next());


// data structure 

// array

let fruits = ["apple",,"orange","banana","graph",4556,true,[6,7],{hello:56}]

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);


// 1. multiple value store
// 2. different dataTypes can hold
// 3. homogeneous
// 4. hetrogeneous
// 5. flexible

// objects

let userProfile = {
    "ename" : "ram",
    age : 22,
    "known Launguage" : ["html","css","js"],
    levelOfLaunguage : {
        html : "advanced",
        css : "advanced",
        js : "learning"
    },
    completeTrainig : function(){
        console.log("certificate");
        
    }
}

console.log(userProfile.ename);
console.log(userProfile["known Launguage"][1]);
console.log(userProfile.levelOfLaunguage.js);
console.log(userProfile.completeTrainig());

// iteration 

// for loop

console.clear();

let num21 = [10,20,30,40]

for(let i=0;i<=num21.length-1;i++){
    console.log(num21[i]); 
}


// for of - array,function,string

// for in - object

let arr11 = [1,2,3,4,5,5]
let str11 = "javascript"

function*forOfExample(){
    yield 1
    yield 2
    yield 3
}

let func = forOfExample() 

// for of 

for(let one of func){
   console.log(one);  
}


let obj11 = {
    named : "a",
    age : 22,
    is : true
}


for(let two in obj11){
    console.log(obj11[two]);
}