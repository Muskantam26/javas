// let text1="this is string"
// let arr1=["muskan",21,"bhopal"]

// let objj={
//     name:"muskan",
//     age:21,
//     city:"bhopal",
//     Fruits:["apple","orange","mango"],
//     cybrom:function(){
//         // console.log("hello muskan");

//         console.log(`hello ${this.name} and you age is ${this.age}`);

//     }
   
// } 
// console.log(objj);
// console.log(objj.age);//object access

// objj.email="mskntmrkr@gmail.com"//insert
// console.log(objj);

// objj.name="muskan tamrakar"//update
// console.log(objj);

// delete objj.city //delete
// console.log(objj);

// console.log(objj.Fruits[1]);//acceess array

// objj.cybrom();//access function


// destructuring

// let Student={
//     name:"bid",
//     age:21,
//     city:"bhopal",
  
// }
// let {name,age,city}=Student
// console.log(city);

// spread operator (...) :- to merge object or arrays



let student1={name:"bid",age:21}

let student2= {city:"bhopal",grade:"A"}

let student4= {phoneno:123456789,pincode:12345}

let student3={...student1,...student2,...student4};
console.log(student3);

let stu={
    arr:[1,2,3,4]
}
let st={
    arr1:[5,6,8,7]
}
let stud={...stu,...st};
console.log(stud);


// Anonymus function:

let go= function(){
    console.log("anonymus function")
}
go();

// IIFE:immediately invoke function expression:

(
    function(){
        console.log("IIFE")
    }
)()

// Arrow function(=>)

    let goo=()=>{
        console.log("arrow function")
    }
    goo()