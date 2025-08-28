// variables 

// 3 types

//1.var
//2.let
//3.const


// var - global scope

// role

var a = 10 // declration //intialiazation

a = 10 // reuse

var a = 12 // redeclration and reintialiazation



console.log(a)

//let - block scope

// role

let b = 10 // declration // intialitization

b = 20 // reuse // reintialitization

// let b // redeclration not accepted

console.log(b);


//const - block scope

const c = 22 // declration //intialiazation

// c = 23 // not accept the reuse and reinitialization

// const c = 23  // redeclration

console.log(c);


//printing statements

// 1.console.log( )

console.log(12345);

//2.alert()

// alert("guys this our first class")

//3.confirm()



// var a = confirm("guys are you complete html css?");

// console.log(a);

//prompt()

// let employeeName = prompt("what is your name ?")

// console.log(employeeName);

//document.writeLn

// document.writeln("hello")


// console methods 

//1. console.log()

console.log("hello");
console.error("hello")
console.warn("hello")
console.clear()



// datatypes 

// 2 types 

// 1. primitive dataTypes


//    1.Number
//    2.string
//    3.boolean
//    4.undefined
//    5.null


// console.log(typeof(123));
// console.log(typeof("123"));
// console.log(typeof(false));

// let d;
// console.log(d);

// let d1 = prompt("hello")
// console.log(d1);


// non primitve dataTypes 

// 1. array
// 2. object
// 3. function
// 4. date

// 1.array 



let fruit = ["apple","orange","cherry","guava","banana","pineApple"]

console.log(fruit);

console.log(fruit[0]);

console.log(fruit[2]);

console.log(fruit[3]);


console.log(fruit[fruit.length-1]); // (fruit[5-1])

// 2.object


let fruit1 = {
    redFruit : ["apple","cherry"],
    yellowFruit : ["pineApple","banana"],
    orangeFruit : "orange"
}

console.log(fruit1);


console.log(fruit1.orangeFruit);

console.log(fruit1.yellowFruit[1]);


console.clear();


// operators

// arithmetic operator

// assignment operator

// comparision operator

// logical operator


// 1. arithmetic operator


// meaning             // operator

// addition                 +

// subraction               -

// multiplication           *

// division                 /

// modulus                  %

// exponensial              **  3**2 = 3*3 = 9

// increment                ++

     // 1. post increament, 2. pre Increment

// decreament                --

      // 1.post decrement   2. pre decrement





console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);


let num = 10

num = ++num

console.log(num);


let num1 = 2 //0
let num2 = num1++ // 0 
let num3 = --num2 //3

console.log("num1",num1); // 3 // 3
console.log("num2",num2); // 3 // 3
console.log("num3",num3); // 3  // 3



let num4 = 3 
let num5 = num4++ + num4 ++
// 3++ = 4 4++=5, 

// 4 + 3 = 7
console.log(num4);
console.log(num5);




// assignment operation 

let num6 = 10

// num6 = num6 + 10 // num6 += 10
num6 **= 10
console.log(num6);

let num7 = 100
let additionVal = 100

num7 += additionVal

console.log(num7); // 200
console.log(additionVal); // 100


let num8 = 1000

let num9 = num8

num9 += num8


console.log(num8); 
console.log(num9); 

console.clear()

// comparision operators


// operators      // meaning       //examble   //results

//    <              lessThen         5<3        false

//    >              greaterThen      5>7         false

//    <=             lessThenEq       5<=5       true

//    >=             greaterThen       5>=5      true

//     ==            loosyTypeEq       5=="5"     true

//    ===            strictlyTypeEq    5==="5"     false

//     !=            notLoosyTypeEq     5!="5"      false

//     !==           notStrictlyEq      5!=="5"      true


// logical operator

// And   &&    true true true = true, true false true = false

// OR    ||    false false true = true, false false = false

// NOT    !    true = false, false = true


console.log(("5"==="5")&&(5!==5));
console.log(("5"==="5")||(5!==5));
console.log(("5"==="5") && !(5!==5));
console.log(!("5"===5) && !(5!==5));

// true && true = true

// true && true = true
