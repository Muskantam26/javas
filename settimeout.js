// setTimeout((s)=>{

//     console.log("running......")
//     let he=document.querySelector("#on")
//     he.innerHTML="muskan"
       
// } ,5000)

let count=0;
let inter=setInterval((s) => {
    
    let he=document.querySelector("#on")
    // he.innerHTML="hello muskan"
// console.log("running....")
// console.log(count);
// count++;
he.innerHTML=count;
count++;



}, 2000);

let stopp=()=>{
    clearInterval(inter)
}

// 