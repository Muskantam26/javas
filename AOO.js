// syntax of array of object
// [{},{},{},{}]


// map method :

// let a=[3,7,1,9,5,6]

// let ans=a.map((e)=>{

//     return e*2
   
// })
// console.log(ans);

// filter method :

// let ans=a.filter((e)=>{

    // return e>5
          // return (e%2==0)
// })

// console.log(ans);
// for each method:return to string:

// let ans =a.forEach((e)=>{

//     console.log(e*2);

// })

let Aoo=[{
    name:"muskan",
    age:20,
    city:"bhopal"
},{
    name:"roshni",
    age:21,
    city:"bhopal"
},{
    name:"ishika",
    age:20,
    city:"bhopal"
}]
let show=document.querySelector("#show")

let a=Aoo.map((e)=>{
    // return e.name +e.age +e.city

    show.innerHTML+=(`<div><h1>${e.name} ${e.age} ${e.city}</h1></div>`)
    show.style.color="red"
    

})
console.log(a)




