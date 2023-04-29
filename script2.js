let Container=document.getElementById("container")
//converting stringify version of object
let myUser=JSON.parse(localStorage.getItem("User"))
// console.log(myUser)
Container.innerHTML=`<p>Full Name:${myUser.username}</p>
<p>Email:${myUser.email}</p>
<p>Password:${myUser.password}</p>
<button id="btn">Logout</button>`
let button=document.getElementById("btn")
// console.log(button)
button.addEventListener("click",()=>{
    console.log("click")
    localStorage.removeItem("User");
})