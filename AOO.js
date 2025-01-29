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

    show.innerHTML+=
    (`<div>
       
  <h1>${e.name} </h1>
        <h1>${e.age}</h1>
        <h1> ${e.city}</h1>
          </div> `)
    show.style.color="red"

    let aoo=[{
        name:"roshni",
        age :20,
        city:"bhopal"
        
        },
        {
            name:"shush",
            age :21,
            city:"sgp" 
        },
        
        {
            name:"shushie",
            age :19,
            city:"indore"
        }
        ,{
        name:"boy",
        age :21,
        city:"bhopal"
        
        },
        {
            name:"shushmita",
            age :21,
            city:"delhi" 
        },
        
        {
            name:"sunshine",
            age :23,
            city:"mumbai"
        }
        
        
        ]
        
        // let d= document.querySelector(".name")
        // d.style.display="flex"
        
        
        let a= document.querySelector("#data")
        
        aoo.map((e) =>{
        a.innerHTML+=(`
           <table>
           <thead>
           <tr>
            <td>${e.name}</td>
            <td> ${e.age}</td>
             <td> ${e.city}</td>
             <tr>
             </thead>
             </table>
        
            `)
        // a.style.display="flex"
         a.style.gap="20px"
         a.style.width="40%"
         a.style.height="100vh"
        // a.style.backgroundColor="pink"
        // a.style.color="green"
        
        
        
        
        })
    

})
console.log(a)




