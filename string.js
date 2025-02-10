//  function muskan(){
//  alert("please sign in")
// }
// muskan();

// function ishika(){
// alert("ishika")
// }
// //ishika();

// function sign(){
// alert("do you want to sign up")
// }
//sign();

// ===========================================day 2=========================================================

function string(){
    //alert("hey") :show on browser window
    // console.log("hello") : show on console
     document.write("<h1>hey</h1>")//show on html window

}
string();

// ===================method of string=============================

function day2(){
 let text="javascriptiseasy"
// console.log(typeof(text));
// document.write(text.length): string to check length of string.
 document.write(text.slice(4,13))//slice method
// let text1="sid"
// let text2="JAVASCRIPT"
// document.write(text1.concat(text2))//concat method
// document.write(text.toUpperCase())//uppercase method
// document.write(text2.toLowerCase())//lowercase method

// let text3="    JAVASCRIPT          "
// console.log(text3.trim());

}
//day2();


function day2(){
    let text1="hello-developer"
     console.log(text1.charAt(2));
     console.log(text1.charCodeAt(0));
     console.log(text1.split("-"));//string convert to array
     console.log(text1.indexOf("o"));
    
    }
    day2();

    //=========================================================day3================================================================================ 

    function day3(){
          let text="I am learning javascript and Javascript is fum"
          document.write(text.replace("javascript","JS"))
          document.write(text.replace(/javascript/g,"JS"))//this will change to  same name as javascript
         document.write(text.replace(/javascript/gi,"JS"))  


          //global=>g    i=>case insenstive 

        //   let arr=[2,4,5,6,"muskan"]//array

    }
   // day3();

// function hm(){
//   alert("This is \"JS\" and \"js\" is good" )
// }
// hm();

// ============================================================Day4====================================================================

//                                       Template letrals:
// ========================================================================================================
function day4(){

// let text=`This is "JS" and "js" is good`
// let text=`This is "JS" 
// and "js" is good`
let text=`This is "JS" <h1>and "js" is</h1> good`
document.write(text)
let name="muskan"
let age=20;
// let ans="hello" +name+ "and your age is "+age;
let ans=`hello ${name} your age is ${age}`

document.write(ans)
// alert(text)
// support single qoutes ('')and double qoutes ("").
// support multiline string.
// support html tags.
}
// day4();
