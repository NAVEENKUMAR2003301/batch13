// // // variables 



// // // 3 types

// // //1.var
// // //2.let
// // //3.const


// // // var - global scope

// // // role

// // var a = 10 // declration //intialiazation

// // a = 10 // reuse

// // var a = 12 // redeclration and reintialiazation



// // console.log(a)

// // //let - block scope

// // // role

// // let b = 10 // declration // intialitization

// // b = 20 // reuse // reintialitization

// // // let b // redeclration not accepted

// // console.log(b);


// // //const - block scope

// // const c = 22 // declration //intialiazation

// // // c = 23 // not accept the reuse and reinitialization

// // // const c = 23  // redeclration

// // console.log(c);


// // //printing statements

// // // 1.console.log( )

// // console.log(12345);

// // //2.alert()

// // // alert("guys this our first class")

// // //3.confirm()



// // // var a = confirm("guys are you complete html css?");

// // // console.log(a);

// // //prompt()

// // // let employeeName = prompt("what is your name ?")

// // // console.log(employeeName);

// // //document.writeLn

// // // document.writeln("hello")


// // // console methods 

// // //1. console.log()

// // console.log("hello");
// // console.error("hello")
// // console.warn("hello")
// // console.clear()



// // // datatypes 

// // // 2 types 

// // // 1. primitive dataTypes


// // //    1.Number
// // //    2.string
// // //    3.boolean
// // //    4.undefined
// // //    5.null


// // // console.log(typeof(123));
// // // console.log(typeof("123"));
// // // console.log(typeof(false));

// // // let d;
// // // console.log(d);

// // // let d1 = prompt("hello")
// // // console.log(d1);


// // // non primitve dataTypes 

// // // 1. array
// // // 2. object
// // // 3. function
// // // 4. date

// // // 1.array 



// // let fruit = ["apple","orange","cherry","guava","banana","pineApple"]

// // console.log(fruit);

// // console.log(fruit[0]);

// // console.log(fruit[2]);

// // console.log(fruit[3]);


// // console.log(fruit[fruit.length-1]); // (fruit[5-1])

// // // 2.object


// // let fruit1 = {
// //     redFruit : ["apple","cherry"],
// //     yellowFruit : ["pineApple","banana"],
// //     orangeFruit : "orange"
// // }

// // console.log(fruit1);


// // console.log(fruit1.orangeFruit);

// // console.log(fruit1.yellowFruit[1]);


// // console.clear();


// // // operators

// // // arithmetic operator

// // // assignment operator

// // // comparision operator

// // // logical operator


// // // 1. arithmetic operator


// // // meaning             // operator

// // // addition                 +

// // // subraction               -

// // // multiplication           *

// // // division                 /

// // // modulus                  %

// // // exponensial              **  3**2 = 3*3 = 9

// // // increment                ++

// //      // 1. post increament, 2. pre Increment

// // // decreament                --

// //       // 1.post decrement   2. pre decrement





// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*2);
// // console.log(2/2);
// // console.log(2%2);
// // console.log(2**2);


// // let num = 10

// // num = ++num

// // console.log(num);


// // let num1 = 2 //0
// // let num2 = num1++ // 0 
// // let num3 = --num2 //3

// // console.log("num1",num1); // 3 // 3
// // console.log("num2",num2); // 3 // 3
// // console.log("num3",num3); // 3  // 3



// // let num4 = 3 
// // let num5 = num4++ + num4 ++
// // // 3++ = 4 4++=5, 

// // // 4 + 3 = 7
// // console.log(num4);
// // console.log(num5);




// // // assignment operation 

// // let num6 = 10

// // // num6 = num6 + 10 // num6 += 10
// // num6 **= 10
// // console.log(num6);

// // let num7 = 100
// // let additionVal = 100

// // num7 += additionVal

// // console.log(num7); // 200
// // console.log(additionVal); // 100


// // let num8 = 1000

// // let num9 = num8

// // num9 += num8


// // console.log(num8); 
// // console.log(num9); 

// // console.clear()

// // // comparision operators


// // // operators      // meaning       //examble   //results

// // //    <              lessThen         5<3        false

// // //    >              greaterThen      5>7         false

// // //    <=             lessThenEq       5<=5       true

// // //    >=             greaterThen       5>=5      true

// // //     ==            loosyTypeEq       5=="5"     true

// // //    ===            strictlyTypeEq    5==="5"     false

// // //     !=            notLoosyTypeEq     5!="5"      false

// // //     !==           notStrictlyEq      5!=="5"      true


// // // logical operator

// // // And   &&    true true true = true, true false true = false

// // // OR    ||    false false true = true, false false = false

// // // NOT    !    true = false, false = true


// // console.log(("5"==="5")&&(5!==5));
// // console.log(("5"==="5")||(5!==5));
// // console.log(("5"==="5") && !(5!==5));
// // console.log(!("5"===5) && !(5!==5));

// // // true && true = true

// // // true && true = true

// // console.clear()

// // // concatenation

// // let str1 = "hello"
// // let str2 = "world"
// // let str3 = "javascript"

// // let output = "this : "+str1 +" "+ str2+" "+str3+" and react"

// // console.log(output);


// // // template string

// // let num10 = 100
// // let num11 = 200

// // let output1 = `${num10} ${num11}`

// // console.log(output1);


// // let table = `this for multiple : ${num10*num11}`
// // console.log(table);


// // // type Conversion 

// // // 1. implicit type Conversion 
// // // 2. explicit type conversion

// // // implicit type Conversion

// // // string 

// // // string anything string 

// // let num12 = "45"
// // let num13 = 45

// // console.log(num12+num13);


// // console.log("2"+true);
// // console.log(typeof("2"+true));
// // console.log("2"+undefined);
// // console.log(typeof("2"+undefined));
// // console.log("4"+null);
// // console.log("4,"+[1,3,2]);
// // console.log(typeof("4"+{a:3}));


// // // Number 

// // console.log(10+true);
// // console.log(10+false);
// // console.log(10+"");
// // console.log(10+undefined);
// // console.log(10+null);
// // console.log(10+[1]);
// // console.log(10+{a:1});


// // // Boolean 

// // console.log(true+10);
// // console.log(true+undefined);
// // console.log(true+null);
// // console.log(true + true);
// // console.log(true + "false");
// // console.log(true+[1,2]);
// // console.log(true+{a:2});
// // console.log(true+"");


// // // Explicit conversion

// // console.log(10+Number("10"));

// // console.log(Number("anb"));
// // console.log(Number(true));
// // console.log(Number(undefined));
// // console.log(Number(null));
// // console.log(Number([1,2,3]));
// // console.log(Number({}));
// // console.log(Number(false));



// // console.log(Boolean(""));
// // console.log(Boolean(true));
// // console.log(Boolean(undefined));
// // console.log(Boolean(null));
// // console.log(Boolean("df"));
// // console.log(Boolean(0.46));
// // console.log(Boolean(-46));
// // console.log(Boolean([]));
// // console.log(Boolean({}));

// // console.clear();


// // // flow Control Statement 

// // // 1. conditional statement
// // // 2. looping statement

// // // 1. conditional statement

// // // 1. if 
// // // 2. if else
// // // 3. if else if
// // // 4. switch statement
// // // 5. nested if 
// // // 6. ternary operator


// // // if 

// // // condition => true = allow

// // if("hi"&&"hello"){
// //   console.log("allow if");  
// // }


// // // if else


// //     if(false){
// //         console.log("true is activate");
        
// //     }else{
// //         console.log("false is activated");
        
// //     }

// // // if else if

// // let hour = 15

// // if(hour>=1 && hour<=6){
// //     console.log("this early morning");
    
// // }else if(hour>=7 && hour<=12){
// //     console.log("this is morning");
    
// // }else if(hour>=13 && hour<=15){
// //     console.log("this is afternoon");
    
// // }else if(hour>=16 && hour<=19){
// //     console.log("this is evening");
    
// // }else{
// //     console.log("this night");
    
// // }

// // //switch

// // // switch(){
// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // // }

// // let trafficLight = "red"

// // switch(trafficLight){
// //     case "red" : console.log("stop");break;
// //     case "yellow" : console.log("start");break;
// //     case "green" : console.log("go");break; 
// // }

// // // // nested if

// // // let age = prompt("enter your age")
// // // let height = prompt("enter your height")
// // // let weight = prompt("enter your weight")

// // // if(age>=18){
// // //     if(height>=150){
// // //         if(weight>=50){
// // //             alert("congratulations you are eligible");
// // //         }else{
// // //             alert("your weight is not eligible");
            
// // //         }
// // //     }else{
// // //         alert("your height is not eligible");
        
// // //     }
// // // }else{
// // //     alert("your age is not eligible");
    
// // // }

// // // ternary operator

// // // condition ? statement : statement;

// // let pwdInput = "35"

// // pwdInput ? console.log("allow the web") : console.log("your password incorrect");


// // // looping statement 

// // // 1. forLoop
// // // 2. while loop 
// // // 3. do while loop 
// // // 4. for of loop 
// // // 5. for in loop 


// // // for loop

// // // for(intizialiation; condition ; iteration){
// // //     statement 
// // // }


// // for(let i = 1; i<=5; i++){
// //     if(i%2==1){
// //         console.log(i);    
// //     }
// // }


// // // intizaliation
// // //while(condition){
// // // statement;
// // // iteration;
// // //}

// // let val = 10
// // while(val>=100){ //10>=0 9>=0 8>=0
// //     console.log(val); //10 // 9
// //     val--   // 10-- = 9  /9--
// // }


// // let val1=20

// // do{
// //     console.log(val1); val1-- // 20 20++ = 21
// // }
// // while(val1>=0) //19>=0 //18>=0 // 21>=0

// // // for of loop

// // let str7 = "javascript"
// // let array1 = [1,2,3,4,5]

// // for(let ab of array1){
// //     console.log(ab);    
// // }

// // for(let bc in str7){
// //     console.log(bc);
    
// // }

// // let obj2 = {
// //     fruit1 : "apple",
// //     car : "jaguar",
// //     toy : "helicopter"
// // }

// // for(let hj in obj2){
// //     console.log(obj2[hj]);
    
// // }

// // console.clear()

// // //function

// // function abc(a){
// //    console.log("i am a function",a);
// // }

// // abc("hello")

// // function sum(a,b){
// //     console.log(a+b);
    
// // }

// // sum(10,30)


// // let basic = {
// //     name1 : "mani",
// //     name2 : "ram"
// // }

// // function base(){
// //     console.log(`the first name is : ${basic.name1}`);
// //     console.log(`the second name is : ${basic.name2}`);
// // }

// // base()


// // // scopes

// // //var - global scope, function scope
// // //let - block scope
// // //const - block scope


// // function scopes(){
// //     if(true){
// //         var a2 = "hello"
// //     }
// //     console.log(a2);
    
// // }
// // scopes()


// // console.log(hello);
// // var hello = "global scope"



// // function add(a,b){
// //     console.log(a+b);    
// // }

// // add(20,20)

// // // default parameter method

// // // function form1(a,b,c="no"){
// // //     console.log(`name is : ${a}, age is : ${b},disability : ${c}`)  
// // // }

// // // form1("navi",22)

// // function sum(a,b){
// //     return (a-b);
// // }

// // let stored = sum(10,1)

// // console.log(stored);



// // let name1 = "ram" // 1

// // function named(callName){ //3 ram
// //     return callName //4 ram
// // }

// // let a3 = named(name1) //2 ram

// // console.log(a3);



// // // function types /


// // // named function

// // named1()
// // function named1(){
// //     console.log("i am a named function");
// // }

// // // anonymous function

// // var anonymous = function(){
// //     console.log("i am a anonymous function"); 
// // }
// // anonymous()

// // // arrow function

// // let arrow =()=>{
// //     console.log("i am a arrow function");    
// // }
// // arrow()





// // let name2 = "mani"

// // let arr = (a)=>{
// //     return(`the employee name is ${a}`); 
// // }
// // let storeData = arr(name2)

// // console.log(storeData);

// // let ano = function(){
// //   console.log(storeData+" stackly");
// // }
// // ano()


// // console.clear();

// // //higher order function
// // //callback function

// // function function1(){
// //     console.log("i am a higher order function");  
// // }

// // function function2(){
// //     console.log("i am a callback function"); 
// // }

// // function1(function2())


// // let add1 = (callback,a,b)=>{// callback = sub,a=20, b=40
// //     console.log(a+b) // 20+40
// //       // sub(20,20)
// // }

// // let sub=(num1,num2)=>{ // num1=20,num2=20
// //     console.log(num1-num2);  
// // }

// // add1(sub(20,20),20,40) // sub,20,40



// // console.clear();

// // //uncurrying function

// // function add(a,b,c){
// //     console.log(a+b+c);   
// // }

// // add(10,20,30)


// // // currying function


// // function add11(a){
// //    return function(b){
// //      return function(c){
// //         console.log(a+b+c); 
// //      }
// //    }
// // }

// // add11(10)(20)(30)


// //   // self invoke function

// // //   (function () {
// // //     alert("hello this discount on now 50off");
// // //   })();


// // // generator function

// // function*genFun(){
// //     yield "one value"
// //     yield "two value"
// //     yield "three value"
// //     yield "fourth value"
// // }

// // let storegen = genFun()

// // console.log(storegen.next().value);
// // console.log(storegen.next());
// // console.log(storegen.next());
// // console.log(storegen.next());
// // console.log(storegen.next());

// // console.clear();


// // // data structure

// // // array

// // let fruits = ["apple",,"orange","banana","graph",1,2,true,[1,2],{hello:2}]

// // console.log(fruits);
// // console.log(fruits[1]);
// // console.log(fruits[fruits.length-1]);


// // // multiple value we can store in array
// // // we can hold inside the value different dataTypes
// // // homogeneous
// // // hetrogeneous
// // // flexible

// // // object 

// // let employeeDetials = {
// //     eName : "mani",
// //     age : 22,
// //     knownLanuage : ["html","css","js"],
// //     levelOfLanuage : {
// //         html : "advanced",
// //         css : "advanced",
// //         js : "learning"
// //     },
// //     ifCompleteTrainig : function(){
// //         console.log("certificate");
        
// //     }
// // }

// // console.log(employeeDetials.eName);
// // console.log(employeeDetials.age);
// // console.log(employeeDetials.knownLanuage[1]);
// // console.log(employeeDetials.levelOfLanuage.js);

// // employeeDetials.ifCompleteTrainig();


// // // iteration


// // // for loop
// // // for of - array,string,function
// // // for in - object

// // let arr1 = [10,20,30,40,50]

// // for(let i=0;i<=arr1.length-1;i++){
// //     console.log(arr1[i]);  
// // }

// // console.clear();

// // let arr12 = [1,2,3,4,5,6]
// // let str12 = "javascript"

// // function*gen(){
// //     yield 1
// //     yield 2
// //     yield 3
// // }

// // let store = gen()

// // let obj12 = {
// //     ename : "a",
// //     age : 12,
// //     is : true
// // }


// // for (let one of store) {
// //   console.log(one);
// // }

// // for(let two in obj12){
// //     console.log(obj12[two]);
    
// // }


// // console.clear();


// // // es6 edition

// // // spread opretor

// // // array   -  [...]

// // // object  -   {...}

// // // two arr or two obj we can merge and clone



// // let one = ["apple","orange","banana"]

// // let two = ["potato","brinjal","carrot"]


// // let All = [...one,...two,"graps"]


// // console.log(All);



// // let obj1 = {
// //     eName : "a",
// //     eId   :  "123Ab",
// //     eRole : "trainee"
// // }

// // let obj21 = {
// //     eName1 : "b",
// //     eId1   : "ABC12",
// //     eRole1 :"developer"
// // }



// // let AllEmpDetials = {...obj1,...obj21} 

// // console.log(AllEmpDetials);

// // // rest operator

// // // function - (...)

// // // we can multiple argument store

// // function rest(a,b,c,d,e,...f){
// //     console.log(d,e,f);
     
// // }

// // rest(1,2,3,4,5,6,7,8,9)

// // console.clear();


// // /// destracture


// // let sample = [10,20,30,40]

// // console.log(sample[1]);

// // let firstVal = sample[3]

// // console.log(firstVal+firstVal);

// // // destracture

// // let [b1,b2,b3,b4] = sample

// // console.log(b1,b2,b3,b4);
// // console.log(b1+b4);

// // let multiArr = [10,20,30,40,1,2,3,4,5,6]


// // let [c1,c2,c3,...c4]=multiArr

// // console.log(c1);
// // console.log(c4);

// // let sum1=0

// // for(let calc of c4){
// //     sum1 = 40 + calc
// //     console.log(sum1);  
// // }

// // console.clear();


// // let nestedArr = [10,20,[30,40,[50]]]

// // let [d1,d2,[d3,d4,[d5]]]=nestedArr

// // console.log(d5);

// // console.clear();

// // // array manipulate method


// // // push()  --> last add [if you use add method means you can multiple value add]

// // // pop()   --> last remove [if use to remove only single value can remove]

// // // shift()  --> first remove

// // // unshift() --> first add

// // // splice() --> inside we can add / remove

// // let simple = [1,2,3,4]

// // simple.push(5,6,7,8)

// // simple.pop()

// // simple.shift()

// // simple.unshift(0,1)



// // console.log(simple);


// // // splice(starting index,delete count, adding)

// // let mu = [10,20,30,40]

// // mu.splice(1,2,2,3)

// // console.log(mu);

// // console.clear();



// // // merge method

// // // concat()
// // // slice()
// // // flat()
// // // fill()


// // // 1. concat method


// // let one1 = [1,2,3,4]
// // let two1 = [5,6,7,8]

// // let total = one1.concat(two1)

// // console.log(total);

// // // 2.slice

// // let three = [1,2,3,4,5,6]

// // let threeVal = three.slice(1,4)

// // console.log(threeVal);


// // // 3.flat 

// // let four = [1,2,[3,[4,[5,[6]]]]]

// // let fourVal = four.flat(Infinity)

// // console.log(fourVal[5]);


// // // 4.fill()

// // let five = [1,2,3,4] // 1,2,3,"four"

// // five.fill("four",3,4)  // value,si,ei

// // console.log(five);


// // // sort

// // let six = ["A",3,4,1,2,5,"a",7,11,111111111111111,[3,5]]

// // let sixVal = six.flat()
// // sixVal.sort()

// // console.log(sixVal);


// // // reverse 

// // let seven = [4,5,1,2,3]

// // seven.reverse()

// // console.log(seven);


// // // includes 

// // let eight = [1,5,9,7,5]

// // let eightVal = eight.includes(91)

// // console.log(eightVal);


// // // covert arr to str


// // // join()  // toString


// // let nine = [7,8,5,4]

// // let nineVal = nine.join()

// // console.log(nineVal);


// // let ten = [5,7,8]

// // let tenVal = ten.toString()

// // console.log(tenVal);


// // // index of

// // let eleven = [10,20,30,40,10]

// // console.log(eleven.indexOf(10));

// // // lastIndexOf 

// // console.log(eleven.lastIndexOf(10));

// // console.clear();


// // // higher order method

// // // 1.forEach()
// // // 2.map()
// // // 3.filter()
// // // 4.find()
// // // 5.reduce()


// // let toys = ["cars","bikes","puzzles","ladder games"]

// // // forEach()


// // let hello11 = toys.forEach((c,i,t)=>{
// //     return(c);  
// // })

// // console.log(hello11);


// // // map()

// // let hello12 = toys.map((c,i,to)=>{
// //     return(c);  
// // })

// // console.log(hello12);


// // // filter

// // let employee = [
// //     {eName : "a", salary : 100000},
// //     {eName : "b", salary : 200000},
// //     {eName : "c", salary : 300000}
// // ]


// // let salaryDate = employee.filter((c,i,to)=>{
// // return c.salary > 100000
// // })

// // console.log(salaryDate);

// // // find

// // let salaryFirstEmployee = employee.find((a,b,c)=>{
// // return a.salary >= 100000
// // })

// // console.log(salaryFirstEmployee);

// // // reduce


// // // let count = 0
// // //  for(let i=0; i<guessCountNum.length ; i++){
// //     //     count = count + guessCountNum[i]
// //     // } 
// //     // console.log(count);
    
// //     let guessCountNum = [1,2,3,4,5]

// // var counted = guessCountNum.reduce((acc,c,i,to)=>{
// //     return acc + c // 0 + 1 = 1 // 1 + 2 = 3 // 3 + 3 = 6 // 6+4 = 10
// //     // 10 + 5 = 15 // 15 + 0 = 15
// // },10) // 1 // 3 // 6 // 10 // 15

// // console.log(counted);











// // console.clear();

// // // higher order function

// // // sort


// // let hum1 = [9,4,5,2,8,1,10]

// // // 1 2 4 5 8 9 10 

// // let sortVal = hum1.sort()

// // console.log(sortVal);


// // // higher order sort method


// // let hSortVal = hum1.sort((a,b)=>{
// // return b-a
// // })

// // console.log(hSortVal);

// // // some - logical or



// // let someArr = [1,7,3,5]

// // let someVal = someArr.some((c,i,to)=>{
// //     return c%2==1// 1%2==1->true, 2%2==1->false, 3%2==1-> true,5%2==1->true
// // }) 
// // //true || false || true || true = true
// // console.log(someVal);


// // // every - logical And

// // let everyVal = someArr.every((c,i,to)=>{
// //     return i%2==1 // 0%2==1-->false, true, false, true
// // })

// // // false && true && false && true = false 

// // console.log(everyVal);


// // console.clear();


// // // string methods


// // // charAt


// // let str = "javascript"

// // let charAtVal = str.charAt(0)

// // console.log(charAtVal);


// // // charCodeAt

// // let CharCodeAtVal = str.charCodeAt(2)

// // console.log(CharCodeAtVal);

// // // includes

// // let includesVal = str.includes("k")

// // console.log(includesVal);

// // // indexOf


// // let indexOfVal = str.indexOf("a",2)

// // console.log(indexOfVal);


// // // lastIndexOf

// // let lastIndexOfVal = str.lastIndexOf("a",2)

// // console.log(lastIndexOfVal);


// // str = "javascript"
// // // repeat 

// // let strVal = str.repeat(10)

// // console.log(strVal);

// // // replace

// // let newstr = "js is a dynamic"

// // let replaceVal = newstr.replace("js","javascript")

// // console.log(replaceVal);

// // // slice 



// // let sliceVal = str.slice(4,10)

// // console.log(sliceVal);


// // // split

// // let newString = "iron-man hello world"

// // let splitVal = newString.split("o")

// // console.log(splitVal);

// // // startswidth

// // str = "javascript"

// // let startswidthVal = str.startsWith("j")

// // console.log(startswidthVal);

// // // endwidth

// // let endsWidthVal = str.endsWith("t")

// // console.log(endsWidthVal);

// // let ran = "aNImal" // NIMAL

// // // toLowercase

// // let lowerVal = ran.toLowerCase()

// // console.log(lowerVal);

// // // toUppercase

// // let upperVal = ran.toUpperCase()

// // console.log(upperVal);

// // let slice1 = upperVal.slice(1,6)

// // console.log(slice1);




// // console.clear();


// // let hum = [2, 3, 4, 8, 10,11];

// // for (let i=0; i<hum.length;i++) {
// //   if(hum[i]%2==1){
// //     console.log(hum[i]);
// //   }
// // }


// // console.clear();


// // // let hello = 12

// // // while(hello>=90){
// // //     console.log("hello");
// // //     hello++
// // // }


// // // let dos = 10

// // // do{
// // //     console.log("hello"); dos++
    
// // // }
// // // while(dos>=22)

// // // Math method


// // // Math.abs()

// // let finalVal = -300

// // console.log(-300);


// // console.log(Math.abs(finalVal));

// // // Math.sign()

// // console.log(Math.sign(-68668975));
// // console.log(Math.sign(68665));
// // console.log(Math.sign(0));

// // // Math.sqrt()

// // console.log(Math.sqrt(997));

// // // Math.cbrt()

// // console.log(Math.cbrt(8));

// // // Math.pow()

// // console.log(Math.pow(5,3)); //5^3 = 5*5*5 = 125

// // // Math.min()

// // let min = [34,54,22,18,6,90]

// // console.log(Math.min(...min));

// // // Math.max()

// // console.log(Math.max(...min));

// // // Math.random()

// // console.log(Math.random()*10);


// // // tofixed

// // let random = Math.random()*10

// // console.log(random.toFixed(3));


// // // ceil()

// // console.log(random);

// // console.log(Math.ceil(random));

// // // floor()

// // console.log(Math.floor(random));


// // // round()

// // console.log(Math.round(random));


// // // trunc()

// // console.log(Math.trunc(random));


// // console.clear();


// // // date object

// // let date = new Date

// // console.log(date);


// // // get

// // // getFullYear()

// // console.log(date.getFullYear());

// // // getMonth()

// // console.log(date.getMonth());

// // // getDay()

// // console.log(date.getDay());

// // // getDate()

// // console.log(date.getDate());

// // // getHours()

// // console.log(date.getHours());

// // // getMinutes()

// // console.log(date.getMinutes());

// // // getSeconds()

// // console.log(date.getSeconds());



// // // set


// // console.log(date);

// // // setFullYear

// // date.setFullYear(2000)

// // console.log(date);

// // // setmounth

// // date.setMonth(0)

// // console.log(date);

// // // setDate()

// // date.setDate(30)

// // console.log(date);


// // //local time



// // console.log(date.toLocaleTimeString());

// // console.log(date.toLocaleDateString());


// // console.log(date.toLocaleString());


// // // date / month / year


// // let date1 = new Date

// // let datee = date1.getDate()

// // let month = date1.getMonth()+1

// // let monthVal = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]

// // let finalMonth = monthVal[month]

// // let year = date1.getFullYear()

// // console.log(`${datee} / ${month} / ${year} `);
// // console.clear();



// // // setTimeout
// // // setInterval


// let date = new Date

// console.log(date.toLocaleTimeString());


// // setTimeout

// setTimeout(()=>{
//     let date = new Date();

//     console.log(date.toLocaleTimeString());

// },5000)

// // setTimeIntravel

// // setInterval(()=>{
// //     let date = new Date();

// //     console.log(date.toLocaleTimeString());

// // },1000)

// function one(){
//     console.log("one");
// }

// function two(){
//     console.log("two");
// }
// function three(){
//     console.log("three");
    
// }

// one()
// setTimeout(two,2000)
// three()


// // promise

// let promiseData = new Promise((response,error,coming)=>{
//     let dataStatus = false
//     if(dataStatus){
//         response("data success")
//     }else{
//         error("data not received")
//     }
// })

// promiseData
// .then((succes)=>{
//     console.log(succes);
// })
// .catch((error)=>{
//     console.error(error);    
// })


// // Api call

// // https://fakestoreapi.com/products/1

// fetch("https://fakestoreapi.com/products/")
// .then((data)=>{
//     console.log(data);
//    return  data.json()    
// })
// .then((pureJs)=>{
//     console.log(pureJs);
//     console.log(pureJs.price);
//    let con =  pureJs.filter((c)=>{
//         return(c.price > 100);    
//     })

//     console.log(con);
    
    
// })
// .catch((error)=>{
//     console.error(error);
    
// })


// Dom - Document object model

// selecting element

let tagSelect = document.getElementsByTagName("h1")

console.log(tagSelect);

let classSelect = document.getElementsByClassName("one")

console.log(classSelect);

let selectId = document.getElementById("two")

console.log(selectId);


// querySelector

let Tag1 = document.querySelector("h2")

console.log(Tag1);

let class1 = document.querySelector(".three")

console.log(class1);

let id1 = document.querySelector("#four")

console.log(id1);

// querySelectorAll

let divAll = document.querySelectorAll("div")

console.log(divAll);

// traversing element
// manipulate element
