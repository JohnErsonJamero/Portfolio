function compareLogin(event){
    event.preventDefault();
}
const USERNAME = "Kai";
const PASSWORD = "4951";
const userName = document.getElementById("username").value;
const passWord = document.getElementById("password").value;
const errMessage = document.getElementById("errorMessage").value;

if(usernam === USERNAME && passWord === passWord){
    alert("Correct, HOORAY");
    window.location.href = "message.html";
}else{
    alert("mali");
    errorMessage.textContent = "Invalid Username or Password!";

}

const myLogInbutton = document.getElementById("btnLogIn");
myLogInbutton.addEventListener("click", compareLogin);