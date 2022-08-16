const lgn=document.querySelector(".login-container");
const sgnup=document.querySelector(".signup-container");
const lgnbtn=document.getElementById("Login");
const sgnupbtn=document.getElementById("SignUp");
const close=document.querySelectorAll(".close")
// console.log(close);
lgnbtn.addEventListener("click",function(){
   lgn.style.display ="block"; 
   sgnup.style.display ="none";
})

sgnupbtn.addEventListener("click",function(){
   sgnup.style.display ="block"; 
   lgn.style.display ="none";
})
for(let i=0;i<close.length;i++){
close[i].addEventListener("click",function(){
   sgnup.style.display ="none"; 
   lgn.style.display ="none";
})
} 

