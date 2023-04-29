let main_body=document.getElementById("main-body")
let Name=document.getElementById("name")
let Email=document.getElementById("email")
let Password=document.getElementById("pass")
let ConfirmPass=document.getElementById("pass2")
let Button=document.getElementById("btn")
let Massage=document.getElementById("msg")
let form=document.getElementById("form")
function setItem(){
    let nameVal=Name.value;
    let emailVal=Email.value;
    let passVal=Password.value;
    let confirmPassVal=ConfirmPass.value;
    
    if((nameVal=="")||(emailVal=="")||(passVal=="")||(passVal=="")){
      
     Massage.style.color="red"
     Massage.textContent="Error : All the fields are mandatory"
    }else{
        Massage.style.color="green"
        Massage.textContent="Successfully signed Up!"
        form.setAttribute("action","http://127.0.0.1:5500/profile.html");
        var user={
            username:nameVal,
            email:emailVal,
            password:passVal,
            confirmpass:confirmPassVal
        };
        localStorage.setItem("User",JSON.stringify(user))
    }
        
   
}


Button.addEventListener("click",setItem)
