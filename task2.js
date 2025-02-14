// let hm=()=>{

//         let time = new Date()

//     let age=document.querySelector("#agg")
//     let a=document.querySelector("#ag").value
   
//     age.innerHTML=time.getFullYear()-a

// }
// let stop;
// count = 0;
// let h=()=>{
//     let out = document.querySelector("#time2");
//     let inp = document.querySelector("#time").value;
//      if(inp>=1){
//         count = inp;
//         out.innerHTML = count;
//        stop = setInterval(()=>{
//             count--;
//             out.innerHTML=count;
//             if(count==1){
//               clearInterval(stop)
//             }
//         },1000)
//      }
// };

// let tim=()=>{
//   let time =new Date;

//   let cc=document.querySelector("#digital")

//   cc.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    
// }

// alarm clock


let c=null;
let a;
let clock=()=>{
   c=document.querySelector("#alarmtime").value
   a=document.querySelector("#status")

   
if(!(c.includes(':'))){
  a.innerHTML = "Please enter a valid time!";
  return;
}
  a.innerHTML="alaram set for"+c;
};
let stop=setInterval(()=>{
  let time=new Date;
  

  let cu=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  console.log(cu)

  if(c==cu){
    alert("time to wake up");
  }
  if(c==cu){
    clearInterval(stop)
  }
 
},1000);


