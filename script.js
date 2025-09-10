

// // // variables

// // //3 types

// // // var - global scope
// // // let - block scope
// // // const - block scope

// // //rules

// // //var - global scope

// // //rule :-

// // var a = 21; // declration and intiazialition

// // console.log(a);

// // a = 10; //reuse

// // console.log(a);

// // var a = 12; //redeclration and reintiazialition

// // console.log(a);

// // // let - block scope

// // let b = 10; // declration and intiazialition

// // b = 21; // reuse // reinitiazialition

// // // let b = 21 // not accept redeclration

// // console.log(b);

// // //const - block scope

// // const c = 10; // declration and initialiaziation

// // // c = 10   // reuse not accept

// // // const c = 12 // not accept reDeclration and reIntialiaziation

// // console.log(c);

// // // printing Statement

// // // console.log(1);

// // // alert

// // // alert("hello guys this our first class")

// // //confirm

// // // let a1 = confirm("did you ate breakfast")

// // // console.log(a1);

// // //prompt

// // // let userName = prompt("enter your full name")

// // // console.log(userName);

// // //writeLn

// // // document.writeln("hello kjhjkhjhghh")

// // // console.log > console method

// // // console.log("log")
// // // console.error("error")
// // // console.warn("warn")
// // // console.clear()

// // // dataTypes

// // // 1. primitive dataTypes

// // //   1.Number - 23, 1000
// // //   2.string - "navi", "123"
// // //   3.boolean - true  , false
// // //   4.null
// // //   5.undefined

// // // console.log(typeof(123));
// // // console.log(typeof("123"));
// // // console.log(typeof(false));

// // // let d ;

// // // console.log(d);

// // // let eName = prompt("hello")

// // // console.log(eName);

// // // 2. non primitive dataTypes

// // //    1.array
// // //    2.object
// // //    3.function
// // //    4.date

// // // 1.array

// // let fruit = ["apple", "orange", "banana", "graphs", "cherry"];

// // console.log(fruit);

// // console.log(fruit[0]);

// // console.log(fruit[1]);

// // console.log(fruit[2]);

// // console.log(fruit[fruit.length - 1]);

// // // 2.object

// // let car = {
// //   Bmw: "red car",
// //   jaguar: "black car",
// //   audi: "white car",
// // };

// // console.log(car);

// // console.log(car.Bmw);
// // console.log(car.jaguar);

// // console.clear();

// // // operators

// // // 1.arithmetic operators
// // // 2.assignment operators
// // // 3.relational or comparision operator
// // // 4.logical operator

// // // 1.arithmetic operators

// // // meaning        // operators

// // // addition             +

// // // subraction           -

// // // multiplication       *

// // // division              /

// // // modulus               %

// // // exponencial          **

// // // increment            ++

// // // 1.post increment , 2. pre increment

// // // decrement             --

// // // 1.post decrement , 2.pre decrement

// // console.log(1 + 2);
// // console.log(1 - 2);
// // console.log(1 * 2);
// // console.log(1 / 2);
// // console.log(3 ** 2);
// // console.log(10 % 2);

// // //increment

// // let num = 10; //10
// // num = ++num;

// // console.log(num);

// // let num1 = 10; //0
// // let num2 = num1++; //0
// // let num3 = ++num2; //1+10 = 11

// // console.log(num1, num2, num3);

// // let num4 = 20;
// // let num5 = num4-- + num4++; //20--
// // //19 + 20 = 39
// // console.log(num4, num5);

// // //assignment operator

// // let age1 = 20;

// // // age1 += 20

// // age1 += 20; // age1 = age1 + 20

// // console.log(age1);

// // let age2 = 30;
// // let additonVal = 40;

// // age2 **= additonVal;

// // console.log(age2);

// // // relational operator or comparision operator

// // // operators   meaning      example   results

// // //     <       lessThen        5<2     false

// // //     >       greaterThen     5>2     true

// // //     <=      lessThenEqual   5<=2     false

// // //     >=      greaterThenEq   5>=5     true

// // //     ==     loosyTypeEq      5=="5    true

// // //    ===      strictlyTtypeEq  5==="5"  false

// // //     !=     loosy not Eq      5!="5"    false

// // //     !==    strictly not Eq   5!==5      false

// // console.log(5 === "5"); //aj false
// // console.log(5 !== "5"); // ar false => true
// // console.log(5 >= 6); // true D => false
// // console.log(5 != "5"); // j false
// // console.log(2 < 1); // r false
// // console.log(7 >= 6.5); // s true

// // //logical operator

// // // operators     meaning        example     results

// // //   &&          logical AND    true true = true, false true = false

// // //   ||          logical OR     false true = true , false false = false

// // //    !           logical NOT    !true = false

// // console.log("logical");

// // console.log(!(5 === 5)); // Aj false
// // console.log(5 >= 5 && !(5 == "5")); // Ar  true => false
// // console.log(5 > 5); // di false
// // console.log(!(7 >= 6) || 1 > 1); // j false
// // console.log(!(5 !== "5")); // r true => false
// // console.log(5 != "5" || !(5 != 5)); // s false => true

// // // false || false = false

// // //(5!="5") = false

// // // (5!=5)   = !false = true = true

// // console.clear();

// // // concatenation

// // let str = "hello";

// // let str1 = "john";

// // let output = str + " " + str1;

// // console.log(output);

// // // template string

// // let str2 = "js";
// // let str3 = "css";

// // let output1 = `${str2} ${str3}`;

// // console.log(output1);

// // let firstNum = 5;
// // let secondNum = 6;

// // console.log(`${firstNum * secondNum}`);

// // // type conversion

// // // 1. implicit type conversion
// // // 2. explicit type conversion

// // // 1. implicit type conversion

// // // string

// // // string anything string

// // let str5 = "45";

// // let numm = 100;

// // console.log(str5 + numm);

// // console.log(typeof ("hi" + true));

// // console.log("5" + undefined);

// // console.log("5" + null);
// // console.log("5" + [1, 2]);
// // console.log(typeof ("5" + { a: 1 }));

// // //Number

// // console.log(10 + false);
// // console.log(typeof (10 + false));
// // console.log(10 + undefined);
// // console.log(10 + null);
// // console.log(10 + [1, 2]);
// // console.log(typeof (10 + [1, 2]));
// // console.log(10 + { a: 2 });
// // console.log(10 + "");

// // //Boolean

// // console.log(true + 10);
// // console.log(typeof (true + 10));
// // console.log(true + undefined);
// // console.log(typeof (true + undefined));
// // console.log(true + "10");
// // console.log(true + null);

// // // 2.explicit type Conversion

// // console.log(10 + Number("10"));
// // console.log(Number(""));
// // console.log(Number(true));
// // console.log(Number(undefined));
// // console.log(Number([1]));
// // console.log(Number({}));

// // console.log(Boolean(""));
// // console.log(Boolean("1"));
// // console.log(Boolean(-30));
// // console.log(Boolean(undefined));
// // console.log(Boolean(null));
// // console.log(Boolean(NaN));
// // console.log(Boolean([]));
// // console.log(Boolean({}));
// // console.log(Boolean("abc"));

// // console.clear();

// // //Flow control statement

// // // 1.conditional statement
// // // 2.looping statement

// // // 1.conditional Statement

// // // 1. if
// // // 2. if-else
// // // 3. if - elseif
// // // 4. switch statement
// // // 5. nested if statement
// // // 6. ternary operator

// // // if statement

// // // condition true = allow

// // if ("hello" && "hi") {
// //   console.log(10 + 30);
// // }

// // // if else

// // if (1) {
// //   console.log("true activated");
// // } else {
// //   console.log("false activated");
// // }

// // // if else if

// // // if(){

// // // }else if(){

// // // }else{

// // // }

// // let hour = 20;

// // if (hour >= 1 && hour <= 6) {
// //   console.log("early morning");
// // } else if (hour >= 7 && hour <= 12) {
// //   console.log("morning");
// // } else if (hour >= 13 && hour <= 16) {
// //   console.log("afternoon");
// // } else if (hour >= 17 && hour <= 19) {
// //   console.log("evening");
// // } else {
// //   console.log("night");
// // }

// // // switch statement

// // // switch(){
// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // // }

// // let trafficLight = "green";

// // switch (trafficLight) {
// //   case "red":
// //     console.log("stop");
// //     break;
// //   case "yellow":
// //     console.log("start");
// //     break;
// //   case "green":
// //     console.log("go");
// //     break;
// // }

// // // nested if statement

// // // let age = prompt("enter your age")
// // // let weight = prompt("enter your weight")
// // // let height = prompt("enter your height")

// // // if(age>=18){
// // //     if(height >= 160){
// // //         if(weight >= 50){
// // //             alert("congratulation your are eligible");

// // //         }else{
// // //             alert("your weight not eligible");

// // //         }
// // //     }else{
// // //         alert("your height not eligible");

// // //     }
// // // }else{
// // //     alert("your age not eligible");

// // // }

// // // ternary operator

// // // condition ? "statement"1 : "statement"0

// // let pwdInput = false;

// // pwdInput
// //   ? console.log("allow the web")
// //   : console.log("your password incorrect");

// // //Looping Statement

// // // for loop
// // // while loop
// // // do while loop
// // // for of loop
// // // for in loop

// // // for loop

// // // for(intizialization;condition;iteration){
// // //     statement
// // // }

// // for (let i = 1; i <= 5; i++) {
// //   if (false) {
// //     console.log(i);
// //   } else if (i % 2 == 1) {
// //     console.log(i);
// //   }
// // }

// // // while loop

// // // intialization
// // // while(condition){
// // // statement;
// // // iteration
// // //}

// // let val = 10;

// // while (val >= 100) {
// //   console.log(val);
// //   val--;
// // }

// // //do while

// // // intizialiazation
// // // do{
// // //  statement ; iteration
// // //}
// // //while(condition)

// // let do1 = 10;

// // do {
// //   console.log("do1");
// //   do1++;
// // } while (do1 >= 20);

// // // for of

// // let str6 = "javascript";

// // let arr = [1, 2, 3, 4, 5, 6];

// // for (let ab of arr) {
// //   console.log(ab);
// // }

// // // for in

// // for (let bc in arr) {
// //   console.log(bc);
// // }

// // let obj2 = {
// //   eye: "brown",
// //   hair: "black",
// //   human: "homosephian",
// // };

// // for (let cd in obj2) {
// //   console.log(obj2[cd]);
// // }

// // console.clear();

// // // function

// // function abc() {
// //   console.log("new function");
// // }

// // abc();

// // let person1 = {
// //   name1: "john",
// //   age: 22,
// // };

// // function printAge() {
// //   console.log(`Hello ${person1.name1}`);
// // }

// // printAge();

// // function paramUse(a, b, c = "no") {
// //   console.log("age ", a, "name ", b, "disability", c);
// // }

// // paramUse(44, "john");

// // function returnVal(a, b) {
// //   return a * b;
// // }

// // let returnVal1 = returnVal(10, 20);

// // console.log(returnVal1);

// // console.log(10 * returnVal1);

// // //var
// // //let
// // //const

// // function scopeCheck() {
// //   if (true) {
// //     var hello = "i am a global scope";
// //   }
// //   console.log(hello);
// // }

// // scopeCheck();

// // // function types

// // // named function

// // named();
// // function named() {
// //   console.log("i am a named function");
// // }

// // // Anonymous function

// // var Anonymous = function () {
// //   console.log("i am a anonymous function");
// // };
// // Anonymous();

// // // Arrow Function

// // var Arrow = () => {
// //   console.log("i am a arrow function");
// // };
// // Arrow();

// // {
// //   var ab = "hello";
// // }

// // console.log(ab);

// // let employeeName = "ram";

// // let empDetials = (empName) => {
// //   return `first employee name: ${empName}`;
// // };

// // let EmpDetials1 = empDetials(employeeName);

// // console.log(EmpDetials1);

// // console.clear();

// // //Higher order function
// // //callback function

// // function function1() {
// //   console.log("higher order function");
// // }

// // function function2() {
// //   console.log("callback function");
// // }

// // function1(function2());

// // function add(callback, a, b) {
// //   console.log(a + b);
// //   callback(20, 20);
// // }
// // function sub(num1, num2) {
// //   console.log(num1 - num2);
// // }
// // add(sub, 20, 40);

// // function mul(a, b, div) {
// //   console.log(a + b);
// //   div(1, 100);
// // }

// // function modulus(a, b) {
// //   console.log(a - b);
// // }

// // mul(10, 20, modulus);

// // console.clear();

// // // curring / uncurring

// // // self invoke function(iife)

// // // generator function

// // // uncurrying

// // function add2(a, b, c) {
// //   console.log(a + b + c);
// // }

// // add2(10, 20, 30);

// // // currying

// // function add3(a) {
// //   // 10
// //   return function (b) {
// //     //20
// //     return function (c) {
// //       // 30
// //       console.log(a + b + c);
// //     };
// //   };
// // }

// // add3(10)(20)(30);


// // // self invoke function

// // // (function(){
// // //     alert("i am a self invoke function")
// // // })()


// // // generator function

// // // function*genFun(){
// // //     yield "first val"
// // //     yield "second val"
// // //     yield "theird val"
// // //     yield "fourth val"
// // //     yield "fivth val"
// // // }

// // // let storeGen = genFun()

// // // console.log(storeGen.next().value);
// // // console.log(storeGen.next().value);
// // // console.log(storeGen.next().value);
// // // console.log(storeGen.next().value);
// // // console.log(storeGen.next().value);
// // // console.log(storeGen.next());


// // // data structure 

// // // array

// // let fruits = ["apple",,"orange","banana","graph",4556,true,[6,7],{hello:56}]

// // console.log(fruits);
// // console.log(fruits[1]);
// // console.log(fruits[fruits.length-1]);


// // // 1. multiple value store
// // // 2. different dataTypes can hold
// // // 3. homogeneous
// // // 4. hetrogeneous
// // // 5. flexible

// // // objects

// // let userProfile = {
// //     "ename" : "ram",
// //     age : 22,
// //     "known Launguage" : ["html","css","js"],
// //     levelOfLaunguage : {
// //         html : "advanced",
// //         css : "advanced",
// //         js : "learning"
// //     },
// //     completeTrainig : function(){
// //         console.log("certificate");
        
// //     }
// // }

// // console.log(userProfile.ename);
// // console.log(userProfile["known Launguage"][1]);
// // console.log(userProfile.levelOfLaunguage.js);
// // console.log(userProfile.completeTrainig());

// // // iteration 

// // // for loop

// // console.clear();

// // let num21 = [10,20,30,40]

// // for(let i=0;i<=num21.length-1;i++){
// //     console.log(num21[i]); 
// // }


// // // for of - array,function,string

// // // for in - object

// // let arr11 = [1,2,3,4,5,5]
// // let str11 = "javascript"

// // function*forOfExample(){
// //     yield 1
// //     yield 2
// //     yield 3
// // }

// // let func = forOfExample() 

// // // for of 

// // for(let one of func){
// //    console.log(one);  
// // }


// // let obj11 = {
// //     named : "a",
// //     age : 22,
// //     is : true
// // }


// // for(let two in obj11){
// //     console.log(obj11[two]);
// // }

// // console.clear();


// // // es6 edition





// // // spread operator

// // // array - [...]

// // // object - {...}

// // // two array or two obj merge and clone



// // let one = ["criket","volleyball","baseball"]
// // let two = ["need for race","god of war","rumble race"]

// // let games = [...one,...two,"pubg"]


// // console.log(games);


// // let obj1 = {
// //   ename : "a",
// //   eId   : "123Ab",
// //   eRole : "trainee"
// // }

// // let obj21 = {
// //   ename1  : "b",
// //   eId1    : "Ab12",
// //   eRole1  : "developer"
// // }


// // let storeEmployeeData = {...obj1,...obj21}


// // console.log(storeEmployeeData);


// // // rest operator

// // // function - (...)

// // // multiple argument store



// // function rest(...d){
// //   console.log(a+b+c);
// //   console.log(d);
   
// // }

// // rest(1,2,3,4,5,6,7,8,9)



// // // destracture


// // let arr1 = [10,20,30,40]

// // console.log(arr1[1]);


// // let fVal = arr1[0]

// // console.log(fVal);


// // // destracture

// // let [a1,,,d1] = arr1

// // console.log(a1,d1);


// // let arr2 = [10,20,30,40,50,60,1,2,3,4]



// // let [a2,b2,c2,...d2] = arr2

// // console.log(d2);


// // console.clear()


// // /// array manipulate methods


// // // push() --> last add [add means mulitiple elaments can add ]

// // // pop()  --> last remove [remove means single elements only]

// // // shift() --> first remove

// // // unshift() --> first add

// // // splice() --> inbetween add or remove

// // let sample = [1,2,3,4,5]

// // sample.push(6,7,8,9)

// // sample.pop()

// // sample.shift()

// // sample.unshift(0,1)

// // console.log(sample);


// // // splice(starting index,delete count,add value)


// // sample.splice(0,2,-1,0,1)

// // console.log(sample);


// // let simple = [1,2,3,4]

// // simple.splice(1,2,10,20)

// // console.log(simple);

// // console.clear();


// // // array merge method

// // // 1. concat() r
// // // 2. slice() r
// // // 3. flat() r
// // // 4. fill()
// // // 5. sort()
// // // 6. reverse()
// // // 7. includes() r
// // // 8. indexOf()
// // // 9. lastIndexOf()
// // // 10.join() / toString()


// // // concat ()

// // let one1 = [1,2,3,4]
// // let one2 = [5,6,7,8]

// // let mergeArr = one1.concat(one2,9)

// // console.log(mergeArr);

// // // slice()

// // let two1 = [1,2,3,4,5]

// // let twoVal = two1.slice(1,4)

// // console.log(twoVal);


// // // flat()

// // let three = [1,2,3,[4,[5,[6]]]] 

// // let threeVal = three.flat(Infinity)

// // console.log(threeVal);

// // // fill()

// // let four = [1,2,3,4] // 1,2,3,"four"

// // four.fill("four",3,4) // value,si,ei

// // console.log(four);


// // // sort()

// // let five = ["A",2,5,3,1,7,"a",9,0,100,10001]

// // let fiveVal = five.sort()

// // console.log(fiveVal);


// // // reverse()

// // let six = [1,2,3,4,2]

// // six.reverse()

// // console.log(six);

// // // includes()

// // let seven = [10,20,30,40]

// // let sevenVal = seven.includes(40)

// // console.log(sevenVal);


// // // indexOf

// // let eight = [1,2,3,2,5]

// // console.log(eight.indexOf(2,2));


// // // lastIndexOf

// // console.log(eight.lastIndexOf(2,2));


// // // join(), toString . arr to str

// // let nine = [1,2,3,4,5,6]

// // let nineVal = nine.join()

// // console.log(nineVal);

// // let ten = [1,2,2,1,1,2]

// // let tenVal = ten.toString()

// // console.log(tenVal);


// // console.clear();

// // // array higher order method

// // // forEach()
// // // map()
// // // filter()
// // // find()
// // // reduce()


// // let eleven = ["one","two","three","four","five"]

// // // forEach()

// // let value = eleven.forEach((cEle,ind,total)=>{
// //   return(cEle);
// // })

// // console.log(value);

// // // map()

// // let value1 = eleven.map((c,ind,to)=>{
// //   return(c);
// // })

// // console.log(value1);

// // // filter()

// // let emp = [
// //   {ename : "a", salary : 100000},
// //   {ename : "b", salary : 200000},
// //   {ename : "c", salary : 300000}
// // ]

// // let salaryDate = emp.filter((c,i,t)=>{
// // return c.salary > 100000
// // })

// // console.log(salaryDate);


// // var firstEmp = emp.find((c,i,t)=>{
// //   return c.salary > 100000
// // })

// // console.log(firstEmp);


// // // reduce


// // let calc = [1,2,3] 

// // let reduceMethod=calc.reduce((acc,cle,i,to)=>{
// // return acc + cle // 0 + 1 = 1 // 1 + 2 = 3 // 3 + 3 = 6 // 6 
// // },0) // 1 // 3 // 6

// // console.log(reduceMethod);



// // console.clear();


// // // higher order function

// // // sort 


// // let sortAgain = [9,4,2,11,5,6,333]
// // // 2 4 5 6 9 11 333
// // let sortFinalVal = sortAgain.sort()

// // console.log(sortFinalVal);


// // let newSort = sortAgain.sort((a,b)=>{
// // return b-a
// // })

// // console.log(newSort);

// // // some - logical or

// // let sample1 = [2,2,2,2]

// // let valSome = sample1.some((c,i,t)=>{
// // return c%2==1 // 1%2==1-> true false true false
// // })

// // // true || false || true || false = true

// // console.log(valSome);


// // // every - logical And


// // let valEvery = sample1.every((c,i,to)=>{
// // return i%2==0 // 0%2==0->true, 1%2==0->false
// // })

// // console.log(valEvery);// 

// // console.clear();

// // // string methods

// // // CharAt

// // let string1  = "javascript"

// // let stringCharAtVal = string1.charAt(2)

// // console.log(stringCharAtVal);


// // //CharCodeAt

// // let CharCodeAtVal = string1.charCodeAt(1)

// // console.log(CharCodeAtVal);


// // // includes

// // let includesVal = string1.includes("A")

// // console.log(includesVal);


// // // indexOf

// // let indexOfVal = string1.indexOf("a",2)

// // console.log(indexOfVal);


// // // lastIndexOf

// // let lastIndexOfVal = string1.lastIndexOf("a",7)

// // console.log(lastIndexOfVal);


// // // repeat

// // let repeatVal = string1.repeat(10)

// // console.log(repeatVal);

// // let ant = "js is a dynamic launguage" 
// // // replace

// // let replaceVal = ant.replace("js","javascript")

// // console.log(replaceVal);


// // // slice

// // let sliceVal = string1.slice(2,5)

// // console.log(sliceVal);


// // // split

// // let ironMan = "iron-man hello world"

// // let splitVal = ironMan.split("o")

// // console.log(splitVal);

// // // startswidth

// // string1 = "javascript"

// // let startVal = string1.startsWith("J")

// // console.log(startVal);

// // // endsWidth

// // let endsWidthVal = string1.endsWith("t")

// // console.log(endsWidthVal);


// // // lowercase

// // let lower = "AniMal"

// // let lowerVal = lower.toLowerCase()

// // console.log(lowerVal);

// // // uppercase

// // let uppercaseVal = lower.toUpperCase()

// // console.log(uppercaseVal);

// // console.clear();

// // // Math.object 


// // // Math.abs()

// // console.log(Math.abs(-500));

// // // Math.sign()

// // console.log(Math.sign(-400));
// // console.log(Math.sign(400));
// // console.log(Math.sign(0));


// // // Math.sqrt()

// // console.log(Math.sqrt(64));


// // // Math.cbrt()

// // console.log(Math.cbrt(125));

// // // Math.pow()

// // console.log(Math.pow(5,3));

// // // Math.min()

// // let min = [11,23,45,3,65]

// // console.log(Math.min(...min));


// // // Math.max()

// // console.log(Math.max(...min));


// // // Math.random()

// // console.log(Math.random());

// // let random = Math.random()*10

// // console.log(random);
// // console.log(random.toFixed(1));

// // console.log(random);

// // // Math.ceil()

// // console.log(Math.ceil(random));

// // // Math.floor()

// // console.log(Math.floor(random));

// // // Math.round()

// // console.log(Math.round(random));

// // // Math.trunc()

// // console.log(Math.trunc(random));


// // console.clear();


// // // date

// // // get

// // let date = new Date

// // console.log(date);


// // // get year

// // console.log(date.getFullYear());

// // // get month

// // console.log(date.getMonth());

// // // get Date

// // console.log(date.getDate());

// // // get hours

// // console.log(date.getHours());

// // // get minutes

// // console.log(date.getMinutes());

// // // get seconds

// // console.log(date.getSeconds());

// // // get day

// // console.log(date.getDay());


// // // set 


// // date.setFullYear(2023)

// // console.log(date);

// // date.setMonth(0)

// // console.log(date);

// // date.setDate(3)

// // console.log(date);

// // date.setHours(12)

// // console.log(date);

// // // local time

// // let date1 = new Date

// // console.log(date1.toLocaleTimeString());

// // console.log(date1.toLocaleString())

// // console.log(date1.toDateString());


// // date1.setFullYear(prompt("what is your birth year"))
// // date1.setDate(prompt("enter your birth date"))
// // date1.setMonth(Number(prompt("enter your birth month"))-1)
// // let findDay = date1.getDay()

// // let day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// // console.log(day[findDay]);




// // set timeout


// // setTimeout(()=>{
// // let date = new Date();

// // console.log(date.toLocaleTimeString());

// // },5000)


// // setInterval(()=>{
// //   let date = new Date();

// //   console.log(date.toLocaleTimeString());

// // },1000)


// function one(){
//   console.log("one");
  
// }

// function two(){
//   console.log("two");
  
// }

// function three(){
//   console.log("three");
  
// }

// one()
// setTimeout(two,2000)
// three()


// // promise


// let promiseData = new Promise((response,error,coming)=>{
//   let dataStatus = false
//   if(dataStatus){
//     response("data received")
//   }else{
//     error("data not received")
//   }
// })

// promiseData
// .then((success)=>{
// console.log(success);

// })
// .catch((error)=>{
// console.error(error);
// })


// fetch("https://fakestoreapi.com/products/")
// .then((successData)=>{
//   return successData.json()
// })
// .then((pureJs)=>{
//   console.log(pureJs);
//   console.log(pureJs.title);
 
// })
// .catch((error)=>{
// console.error(error);

// })


// // DOM - document object model


// selecting element

// tag select method

let tagSelect = document.getElementsByTagName("h1")

console.log(tagSelect);

let classSelect = document.getElementsByClassName("one")

console.log(classSelect);

let idSelect = document.getElementById("two")

console.log(idSelect);

// querySelector method

let id1 = document.querySelector("#four")

console.log(id1);

let class1 = document.querySelector(".three")

console.log(class1);

let tag1 = document.querySelector("h2")

console.log(tag1);

let selectAll = document.querySelectorAll(".q")

console.log(selectAll);




// traversing element

// manipulate element