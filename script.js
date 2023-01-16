const form=document.querySelector("#form");
let signup=document.getElementById("signup");
let signin=document.getElementById("signin");
let Name=document.getElementById("disable");
let Name2=document.getElementById("disable2");

form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})
function form_verify(){
signin.onclick=function(){
    Name.style.display="none";
    Name2.style.display="none";
}
signup.onclick=function(){
    Name.style.display="block";
    Name2.style.display="block";
}
}



