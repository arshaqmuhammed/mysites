const display = document.getElementById("password-display");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const lengthInput = document.getElementById("length-input");
const lengthDisplay = document.getElementById("length-display");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+/-><".split("");

generateBtn.addEventListener("click", () =>{
    let length = lengthInput.value;
    createPassword(length);
});

lengthInput.addEventListener("input", (event) => {
    lengthDisplay.innerText = event.target.value;
})

copyBtn.addEventListener("click", copyPassword);

function createPassword(length){
    let password = "";
    for(let i=0; i<length; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    display.value = password;
};

function copyPassword(){
    display.select();
    document.execCommand("copy");
}