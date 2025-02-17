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



let clock=()=>{
  let c=document.querySelector("#alarmtime").value
   let a=document.querySelector("#status")

   let m=document.querySelector("#music")
 
let stopp=setInterval(()=>{
  let time=new Date;
  

  let cu=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`
  console.log(cu)

  if(c==cu){
    a.innerHtml="time to wake up"
    m.play()
  }
  else{
    a.innerHtml="alarm is set"
  }
  // if(c==cu){
  //   clearInterval(stop)
  // }

  setTimeout(()=>{
    clearInterval(m.pause())
    a.innerHtml="set alarm again"
  },8000)
 
},2000);


}

