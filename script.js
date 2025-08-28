// variables

//3 types

// var - global scope
// let - block scope
// const - block scope


//rules

//var - global scope 

//rule :- 

var a = 21 // declration and intiazialition

console.log(a);

a = 10 //reuse

console.log(a);

var a = 12 //redeclration and reintiazialition

console.log(a);


// let - block scope

let b = 10 // declration and intiazialition

b = 21      // reuse // reinitiazialition

// let b = 21 // not accept redeclration

console.log(b);


//const - block scope

const c = 10 // declration and initialiaziation

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

let fruit = ["apple","orange","banana","graphs","cherry"]

console.log(fruit);

console.log(fruit[0]);

console.log(fruit[1]);

console.log(fruit[2]);

console.log(fruit[fruit.length-1]);




// 2.object 

let car = {
    Bmw : "red car",
    jaguar : "black car",
    audi : "white car"
}


console.log(car);

console.log(car.Bmw);
console.log(car.jaguar);

console.clear()


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


console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(3**2);
console.log(10%2);


//increment 

let num = 10 //10
num = ++num

console.log(num);


let num1 = 10 //0
let num2 = num1++ //0
let num3 = ++num2  //1+10 = 11

console.log(num1,num2,num3);


let num4 = 20 
let num5 = num4-- + num4++ //20--
//19 + 20 = 39
console.log(num4,num5);


//assignment operator

let age1 = 20

 // age1 += 20

age1 += 20 // age1 = age1 + 20

console.log(age1);


let age2 = 30
let additonVal = 40

age2 **= additonVal

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



console.log(5==="5"); //aj false
console.log(5!=="5")  // ar false => true
console.log(5>=6); // true D => false
console.log(5!="5"); // j false
console.log(2<1); // r false
console.log(7>=6.5); // s true


//logical operator

// operators     meaning        example     results

//   &&          logical AND    true true = true, false true = false

//   ||          logical OR     false true = true , false false = false

//    !           logical NOT    !true = false

console.log("logical");

console.log(!(5===5));  // Aj false
console.log((5>=5) && !(5=="5")); // Ar  true => false
console.log(5>5); // di false 
console.log(!(7>=6)||(1>1)); // j false
console.log(!(5!=="5")); // r true => false
console.log((5!="5")||!(5!=5)); // s false => true

// false || false = false


//(5!="5") = false

// (5!=5)   = !false = true = true




