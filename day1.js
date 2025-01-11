
'use strict'

//create function:

function muskan(){
  

    console.log("muskantam")
}
function tam(){
    console.log("tamrakr")
}
tam();//call function
muskan();//call function

function go(){
    var a="musk";
    var b="hello";

    console.log(a+b);//concatination  addtion of string
}
go();

//Type conversioon:/type coercion:
//string has highest priority:
//number has second priority:

function gm(){
    var a="musk";
    var b=55;

    console.log(a+b);
}
gm();

function gn(){
    var a=55;
    var b=true;

    var c=55;
    var d=null;


    console.log(a+b);
    console.log(c+d);

    var e=55;
    var f=undefined;


    console.log(e+f);//print:NAN(not a number)
}
gn();



//BOM:=====================browser object model: intraction with the browser

//alert:
//prompt:
//confirm:
//let 
//const
//var
//prompt: take input from user

//voting question:
// function letgo(){
// let age=prompt("enter your age")
// if (age>18){
//     alert("you can vote")

// }
// else{
//     alert("you cant vote")
//}



//}
//letgo();

// using ternory operator chack you can vote or not:

// function letg(){
//     let age=prompt("enter your age")
//     age>=18?alert("you can wait"):alert("you cant");


// }
// letg();



// confirm:

// if user liked website say thankyu or if sorry:

// let chack=confirm("did you like are website")
// if(chack==true)
// {
//     alert("thankyou")
// }
// else{
//     alert("sorry")
// }

//using ternory operator:

// let check=confirm("did you like are website")
// check==true? alert("thankyou"):alert("sorry")

// print number using for loop:
// for(let i=1; i<11; ++i){
//     console.log(i);
// }

// function web(){

// let check=confirm("have you completed course and have a certificate")
// if(check==true){
//     alert("completed")
// }
// else{
//     alert("not completed")
// }

// }

// web();
// function con(){
//  let price=prompt("enter price of item purchased")
//      let b=confirm("Do you have coupon")
//      if(b==true){
//         let discount=price*10/100
//         price=price-discount
//         alert(price)
//      }
//     else{
//          alert(price)
//      }

 
// }
// con();


// function musk(){
// let marks=prompt("score")
// if(marks>=33){
//     alert("pass")
// }
// else{
//     alert("fail")
// }
// }
// musk();


// function tam(){
// let number=prompt("enter number")
// if(number%2==0){
//     alert("even")

// }
// else{
//     alert("odd")
// }
// }
// tam();

// function tamr(){
// let check=confirm("are you sure to delete")
// if(check==true){
//     alert("item deleted")

// }
// else{
//     alert("cancelled")
// }
// }
// tamr();

// function bid(){
// let number=prompt("enter number")
// if(number>0){
//     alert("positive")
// }
// else{
//     alert("negative")
// }
// }
// bid();

function ai(){
let n=prompt("enter number")

do{
    n=prompt("enter number")
}
while(n<10)
}
ai();





