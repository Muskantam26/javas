// DOM:document object model.this is a tree like structure:

// function hey(){

// let par=document.getElementById("musk")
// // document.getElementsByClassName("")
// // document.querySelector("#musk")
// par.innerHTML="hello i am developer"

// }
function f1(){
       document.getElementById("text") //Method 1
    
      let a= document.querySelector("#text")  //Method 2
      a.innerHTML="1 class of DOM"
    a.style.color="green";
    a.style.backgroundColor="red";
    
    }
    function f2(){
    console.log(a);
    const a=0
    }
    f2()
                                                                            //  DAY 2
    function f3(){
      let a=document.querySelector("#t")
      t.innerHTML="<h1>hello</h1>";
      t.style.color="red";
    t.style.backgroundColor="orange";
    document.body.style.backgroundColor="blue";
    }
    function f4(){
      let a=document.querySelector("#t")
      t.innerHTML="Color changes";
      t.style.color="green";
    t.style.backgroundColor="lightpink";
    document.body.style.backgroundColor="yellow";
    t.style.fontStyle="arial";
    }
    function f5(){
      let a=document.querySelector("#t")
      t.innerHTML="Reset done";
      t.style.color="black";
      t.style.backgroundColor="violet";
      document.body.style.backgroundColor="white";
      t.style.fontSize="42px"
      these all are used for mode such as light mode and dark mode 
    }
    f5()
    
                                                        HOMEWORK
    show text and display none text using one button only
    
    function text (){   
      let text=document.querySelector("#clik")
      if (text.style.display == 'none') {
          text.style.display = 'block'
         
      } else {
          text.style.display ='none'  
      }   
    }
    text()
    
    function imgg(){
      let i1=document.querySelector("#i")
      i1.style.backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/038/987/289/small/ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg')"
    i1.style.backgroundPosition="center"
    
      if (i1.style.display == 'none') {
            i1.style.display = 'block'
           
        } else {
            i1.style.display ='none'  
      }
    } 
    
    function resetimgg(){
      let i1=document.querySelector("#i")
      i1.style.backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/038/987/289/small/ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg')"
    i1.style.display='none'
    }
    
    function chgsource(){
      let chgimg=document.querySelector('#img2')
      chgimg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07izPZIkeDIHvcTgL4KaWENdvy3SW2eW7hEJVS61CXoawnUJkc-TCoCI&s"
    }
    
    function c1(){
      let d5=document.querySelector("#d4")
      d5.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07izPZIkeDIHvcTgL4KaWENdvy3SW2eW7hEJVS61CXoawnUJkc-TCoCI&s')"
      d5.style.backgroundRepeat = "no-repeat";
      
    }
    
    function c2(){
      let d5=document.querySelector("#d4")
      d5.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9B_-oS-OSqikogvfc7bM8WqlS7aqgQSYjyWk3Ry93YQgI8KYu_f0UL1k&s')"
      d5.style.backgroundRepeat = "no-repeat";
    }
    function c3(){
      let d5=document.querySelector("#d4")
      d5.style.backgroundImage="url('data:image/jpeg;base64,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')"
      d5.style.backgroundRepeat = "no-repeat";
    }