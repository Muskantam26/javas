let sub=()=>{

  
let inpname=document.querySelector("#name").value
let inpnum=document.querySelector("#number").value
let inpemail=document.querySelector("#email").value
let inppass=document.querySelector("#pass").value
let inpCpass=document.querySelector("#Cpass").value

let errname=document.querySelector("#errorname")
let errnum=document.querySelector("#errornumber")
let erremail=document.querySelector("#erroremail")
let errpass=document.querySelector("#errorpass")
let errCpass=document.querySelector("#errorCpass")


if(inpname==""){
    errname.innerHTML="please fill the name field"
     errname.style.color="red"
    return false
   
}
if(inpnum==""){
    errnum.innerHTML="please fill the number field"
     errnum.style.color="red"
    return false
   
}
else if(isNaN (inpnum)){    // if number then ans will be false
    errnum.innerHTML="please enter number only"
    errnum.style.color="red"
    return false
}
else if(inpnum.length!==10){
    errnum.innerHTML="please correct your number"
    errnum.style.color="red"
    return false
}
if(inpemail==""){
    erremail.innerHTML="please fill the email field"
     erremail.style.color="red"
    return false
   
}
else if(!(inpemail.includes('@') && inpemail.includes('.com'))){
    erremail.innerHTML="please fill correct gmail"
    erremail.style.color="red"
    return false
}
if(inppass==""){
    errpass.innerHTML="please fill the pass field"
     errpass.style.color="red"
    return false
   
}
if(inpCpass==""){
    errCpass.innerHTML="please fill the pass field"
     errCpass.style.color="red"
    return false
   
}
if(inppass!=inpCpass){
errpass.innerHTML="confirm password is incorrct"
return false
}
else if(!(inppass.match([/1234567890/])&& inppass.match([/!@#$%&*^()/])&& inppass.match([/a-z/])&& inppass.match([/A-Z/]))){
    errpass.innerHTML="please create strong password"
    errpass.style.color="red"
    return false
}







}


