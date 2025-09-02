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

console.clear()

// concatenation

let str1 = "hello"
let str2 = "world"
let str3 = "javascript"

let output = "this : "+str1 +" "+ str2+" "+str3+" and react"

console.log(output);


// template string

let num10 = 100
let num11 = 200

let output1 = `${num10} ${num11}`

console.log(output1);


let table = `this for multiple : ${num10*num11}`
console.log(table);


// type Conversion 

// 1. implicit type Conversion 
// 2. explicit type conversion

// implicit type Conversion

// string 

// string anything string 

let num12 = "45"
let num13 = 45

console.log(num12+num13);


console.log("2"+true);
console.log(typeof("2"+true));
console.log("2"+undefined);
console.log(typeof("2"+undefined));
console.log("4"+null);
console.log("4,"+[1,3,2]);
console.log(typeof("4"+{a:3}));


// Number 

console.log(10+true);
console.log(10+false);
console.log(10+"");
console.log(10+undefined);
console.log(10+null);
console.log(10+[1]);
console.log(10+{a:1});


// Boolean 

console.log(true+10);
console.log(true+undefined);
console.log(true+null);
console.log(true + true);
console.log(true + "false");
console.log(true+[1,2]);
console.log(true+{a:2});
console.log(true+"");


// Explicit conversion

console.log(10+Number("10"));

console.log(Number("anb"));
console.log(Number(true));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number([1,2,3]));
console.log(Number({}));
console.log(Number(false));



console.log(Boolean(""));
console.log(Boolean(true));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("df"));
console.log(Boolean(0.46));
console.log(Boolean(-46));
console.log(Boolean([]));
console.log(Boolean({}));

console.clear();


// flow Control Statement 

// 1. conditional statement
// 2. looping statement

// 1. conditional statement

// 1. if 
// 2. if else
// 3. if else if
// 4. switch statement
// 5. nested if 
// 6. ternary operator


// if 

// condition => true = allow

if("hi"&&"hello"){
  console.log("allow if");  
}


// if else


    if(false){
        console.log("true is activate");
        
    }else{
        console.log("false is activated");
        
    }

// if else if

let hour = 15

if(hour>=1 && hour<=6){
    console.log("this early morning");
    
}else if(hour>=7 && hour<=12){
    console.log("this is morning");
    
}else if(hour>=13 && hour<=15){
    console.log("this is afternoon");
    
}else if(hour>=16 && hour<=19){
    console.log("this is evening");
    
}else{
    console.log("this night");
    
}

//switch

// switch(){
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
// }

let trafficLight = "red"

switch(trafficLight){
    case "red" : console.log("stop");break;
    case "yellow" : console.log("start");break;
    case "green" : console.log("go");break; 
}

// // nested if

// let age = prompt("enter your age")
// let height = prompt("enter your height")
// let weight = prompt("enter your weight")

// if(age>=18){
//     if(height>=150){
//         if(weight>=50){
//             alert("congratulations you are eligible");
//         }else{
//             alert("your weight is not eligible");
            
//         }
//     }else{
//         alert("your height is not eligible");
        
//     }
// }else{
//     alert("your age is not eligible");
    
// }

// ternary operator

// condition ? statement : statement;

let pwdInput = "35"

pwdInput ? console.log("allow the web") : console.log("your password incorrect");


// looping statement 

// 1. forLoop
// 2. while loop 
// 3. do while loop 
// 4. for of loop 
// 5. for in loop 


// for loop

// for(intizialiation; condition ; iteration){
//     statement 
// }


for(let i = 1; i<=5; i++){
    if(i%2==1){
        console.log(i);    
    }
}


// intizaliation
//while(condition){
// statement;
// iteration;
//}

let val = 10
while(val>=100){ //10>=0 9>=0 8>=0
    console.log(val); //10 // 9
    val--   // 10-- = 9  /9--
}


let val1=20

do{
    console.log(val1); val1-- // 20 20++ = 21
}
while(val1>=0) //19>=0 //18>=0 // 21>=0

// for of loop

let str7 = "javascript"
let array1 = [1,2,3,4,5]

for(let ab of array1){
    console.log(ab);    
}

for(let bc in str7){
    console.log(bc);
    
}

let obj2 = {
    fruit1 : "apple",
    car : "jaguar",
    toy : "helicopter"
}

for(let hj in obj2){
    console.log(obj2[hj]);
    
}

console.clear()

//function

function abc(a){
   console.log("i am a function",a);
}

abc("hello")

function sum(a,b){
    console.log(a+b);
    
}

sum(10,30)


let basic = {
    name1 : "mani",
    name2 : "ram"
}

function base(){
    console.log(`the first name is : ${basic.name1}`);
    console.log(`the second name is : ${basic.name2}`);
}

base()


// scopes

//var - global scope, function scope
//let - block scope
//const - block scope


function scopes(){
    if(true){
        var a2 = "hello"
    }
    console.log(a2);
    
}
scopes()


console.log(hello);
var hello = "global scope"



function add(a,b){
    console.log(a+b);    
}

add(20,20)

// default parameter method

// function form1(a,b,c="no"){
//     console.log(`name is : ${a}, age is : ${b},disability : ${c}`)  
// }

// form1("navi",22)

function sum(a,b){
    return (a-b);
}

let stored = sum(10,1)

console.log(stored);



let name1 = "ram" // 1

function named(callName){ //3 ram
    return callName //4 ram
}

let a3 = named(name1) //2 ram

console.log(a3);



// function types /


// named function

named1()
function named1(){
    console.log("i am a named function");
}

// anonymous function

var anonymous = function(){
    console.log("i am a anonymous function"); 
}
anonymous()

// arrow function

let arrow =()=>{
    console.log("i am a arrow function");    
}
arrow()





let name2 = "mani"

let arr = (a)=>{
    return(`the employee name is ${a}`); 
}
let storeData = arr(name2)

console.log(storeData);

let ano = function(){
  console.log(storeData+" stackly");
}
ano()


console.clear();

//higher order function
//callback function

function function1(){
    console.log("i am a higher order function");  
}

function function2(){
    console.log("i am a callback function"); 
}

function1(function2())


let add1 = (callback,a,b)=>{// callback = sub,a=20, b=40
    console.log(a+b) // 20+40
      // sub(20,20)
}

let sub=(num1,num2)=>{ // num1=20,num2=20
    console.log(num1-num2);  
}

add1(sub(20,20),20,40) // sub,20,40



console.clear();

//uncurrying function

function add(a,b,c){
    console.log(a+b+c);   
}

add(10,20,30)


// currying function


function add11(a){
   return function(b){
     return function(c){
        console.log(a+b+c); 
     }
   }
}

add11(10)(20)(30)


  // self invoke function

//   (function () {
//     alert("hello this discount on now 50off");
//   })();


// generator function

function*genFun(){
    yield "one value"
    yield "two value"
    yield "three value"
    yield "fourth value"
}

let storegen = genFun()

console.log(storegen.next().value);
console.log(storegen.next());
console.log(storegen.next());
console.log(storegen.next());
console.log(storegen.next());

console.clear();


// data structure

// array

let fruits = ["apple",,"orange","banana","graph",1,2,true,[1,2],{hello:2}]

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);


// multiple value we can store in array
// we can hold inside the value different dataTypes
// homogeneous
// hetrogeneous
// flexible

// object 

let employeeDetials = {
    eName : "mani",
    age : 22,
    knownLanuage : ["html","css","js"],
    levelOfLanuage : {
        html : "advanced",
        css : "advanced",
        js : "learning"
    },
    ifCompleteTrainig : function(){
        console.log("certificate");
        
    }
}

console.log(employeeDetials.eName);
console.log(employeeDetials.age);
console.log(employeeDetials.knownLanuage[1]);
console.log(employeeDetials.levelOfLanuage.js);

employeeDetials.ifCompleteTrainig();


// iteration


// for loop
// for of - array,string,function
// for in - object

let arr1 = [10,20,30,40,50]

for(let i=0;i<=arr1.length-1;i++){
    console.log(arr1[i]);  
}

console.clear();

let arr12 = [1,2,3,4,5,6]
let str12 = "javascript"

function*gen(){
    yield 1
    yield 2
    yield 3
}

let store = gen()

let obj12 = {
    ename : "a",
    age : 12,
    is : true
}


for (let one of store) {
  console.log(one);
}

for(let two in obj12){
    console.log(obj12[two]);
    
}