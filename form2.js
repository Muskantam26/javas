let hm=()=>{

  
    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpCpass=document.querySelector("#Cpass").value
    
    let errname=document.querySelector("#ename")
    let errnum=document.querySelector("#enumber")
    let erremail=document.querySelector("#eemail")
    let errpass=document.querySelector("#epass")
    let errCpass=document.querySelector("#eCpass")
    
    
    if(inpname==""){
        errname.innerHTML="please enter your name"
         errname.style.color="red"
        return false
       
    }
    if(inpnum==""){
        errnum.innerHTML="please enter your number"
         errnum.style.color="red"
        return false
       
    }
    else if(isNaN (inpnum)){    // if number then ans will be false
        errnum.innerHTML="please enter number only"
        errnum.style.color="red"
        return false
    }
    else if(inpnum.length!==10){
        errnum.innerHTML="please enter your correct your number"
        errnum.style.color="red"
        return false
    }
    if(inpemail==""){
        erremail.innerHTML="please fill the email field"
         erremail.style.color="red"
        return false
       
    }
    else if(!(inpemail.includes('@') && inpemail.includes('.com'))){
        erremail.innerHTML="please fill the correct gmail"
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
    
    