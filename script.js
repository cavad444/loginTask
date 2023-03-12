
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginInputs = document.querySelectorAll(".login-input");
const textLabels = document.querySelectorAll("span");
const registerInputs = document.querySelectorAll('.register-input');
const loginDiv = document.querySelector('.login-div');
const registerDiv = document.querySelector('.register-div');
const loginLabelsDiv = document.querySelector('.login-labels');
let loginUsername;
let loginPassword;
let registerUsername;
let registerPassword;
let registerPasswordAgain;
userDatabase = {};
loginLabelsDiv.style.display = "none"
loginForm.style.display = "none";
loginInputs.forEach(loginInput => {
    loginInput.addEventListener('change',(event) => {
        const {name, value} = event.target;
        name == "login-username" ? loginUsername = value : loginPassword = value;
    })
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(loginUsername == userDatabase["name"] && loginPassword == userDatabase["password"]){
        
        textLabels.forEach(textLabel => {
            textLabel.id == "username" ? textLabel.innerText = "Your username is: " + userDatabase["name"] : textLabel.innerText = "Your password is: " + userDatabase["password"];
        });
        loginForm.style.display = "none";
        loginLabelsDiv.style.display = "flex";
    }else{
        alert("Username or password is wrong!")
    }
    
});

registerInputs.forEach(registerInput => {
    registerInput.addEventListener('change', (event) => {
        const {name, value} = event.target;
        if(registerInput.name == "register-username"){
           registerUsername = value;
        }else if(registerInput.name == "register-password"){
            registerPassword = value;
        }else{
            registerPasswordAgain = value;
        }
    })
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(registerPassword == registerPasswordAgain){
        userDatabase["name"] = registerUsername;
        userDatabase["password"] = registerPassword;
        console.log(userDatabase);
        registerForm.style.display = "none";
        loginForm.style.display= "flex";
     }else{
        alert("Passwords does not match!")
     }
});



