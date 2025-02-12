console.log(new Date());   //print current date    new keyword for object  format 

let time = new Date()
console.log(time.toLocaleString())   //readable
console.log(time.getFullYear())      //year 2025

console.log(time.getMonth())          //0 to 11   jan to dec

console.log(time.getDay())            //0 to 6  sunday to sat

console.log(time.getHours())
console.log(time.getMinutes())

console.log(time.getSeconds())
console.log(time.getMilliseconds())


// let tim=["sunday", "monday", "tuesday", "wednessday", "friday", "saturday"]
// let ctim[time.getDay(1)]
// console.log(c[1])


let tt=()=>{

    let tim=["sunday", "monday", "tuesday", "wednessday", "friday", "saturday"]
    let c=tim[time.getDay()]


    let hyy=document.querySelector("#hy")

    hyy.innerHTML=c


}



// task : age calculator : you need to input box








