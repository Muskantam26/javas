// let clickme=document.querySelector("#btn")

// clickme=addEventListener("click",()=>{
//     alert("Hello")
// })

// let purejava=document.querySelector("#pure")
// let clickm=document.querySelector("divv")


// // "click": for one time click .     //"dbclick": for double click
// purejava=addEventListener("dblclick",()=>{
//      divv.style.background="blue"
// })
// let run=()=>{
//     console.log("run function")
// }
// purejava=addEventListener.querySelector("click",run)


// keydown : which button we click that button print

// let inp=document.querySelector("#inpbox")
// inp=addEventListener("keydown",(e)=>{
// console.log(e.key);
// })

// inp=addEventListener("input",()=>{
//     console.log(inp.value);
// })
let inp=document.querySelector("#inpbox")
let input=document.querySelector("#inpp")
inp=addEventListener("input",()=>{
    // document.write(`<h1>${inpbox.value}</h1>`);
     input.innerHTML=inpbox.value
    
})