VANTA.HALO({
    el: "#ani",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
  })



let setdata=()=>{
    let namee=document.querySelector("#hy").value

localStorage.setItem("name",namee)
localStorage.setItem("age","21")
let show=document.querySelector("#show")

show.innerHTML=localStorage.getItem("name","age",manee)


}
let show=document.querySelector("#show")

show.innerHTML=localStorage.getItem("name","age",manee)
let cl=()=>{
    localStorage.setItem("name","muskan")
    localStorage.setItem("age","21")

    localStorage.removeItem("name")
    location.reload()

     localStorage.clear()

   
}