let text1="this is string"
let arr1=["muskan",21,"bhopal"]

let objj={
    name:"muskan",
    age:21,
    city:"bhopal",
    Fruits:["apple","orange","mango"],
    cybrom:function(){
        // console.log("hello muskan");

        console.log(`hello ${this.name} and you age is ${this.age}`);

    }
   
}
console.log(objj);
console.log(objj.age);//object access

objj.email="mskntmrkr@gmail.com"//insert
console.log(objj);

objj.name="muskan tamrakar"//update
console.log(objj);

delete objj.city //delete
console.log(objj);

console.log(objj.Fruits[1]);//acceess array

objj.cybrom();//access function


