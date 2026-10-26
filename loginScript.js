function compareLogin(event){
    event.preventDefault();

    const USERNAME = "Kai";
    const PASSWORD = "1234";
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    if(userName === USERNAME && passWord === PASSWORD){
        alert("Nice, HOORAY!");
        window.location.href = "message.html";
    }else{
        alert("Wrong One, Woops!");
        errorMessage.textContent = "Invalid Username or Password!";

    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click', compareLogin);
