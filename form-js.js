const passwordInputs = document.querySelectorAll(".error");
const formContainer = document.querySelector(".form-container");

function addMessageHTML(e){
    if (e!==undefined){        
        let messageDiv = document.createElement("div");
        let messageOpening = document.createElement("h3");
        messageOpening.textContent = "Password must contain the following:";
        messageDiv.appendChild(messageOpening);

        const messageList = ["A lowercase letter", "A capital (uppercase) letter", "A number", "Minimum of 8 characters"]
        const idList = ["letter", "capital", "number", "min"]

        for (let i = 0; i < messageList.length; i++){
            let p = document.createElement("p");
            p.classList.add("invalid");
            p.textContent = messageList[i];
            p.id = idList[i];
            messageDiv.appendChild(p);
        }
        formContainer.appendChild(messageDiv);   
    }
}

function deleteMessageHTML(e){
    const formContainer = document.querySelector(".form-container")
    formContainer.removeChild(formContainer.lastChild);
}

passwordInputs.forEach((input)=>{
    input.addEventListener("focus", addMessageHTML);
    input.addEventListener("focus", checkPasswordRequirements);
    input.addEventListener("blur", deleteMessageHTML);

    function checkPasswordRequirements(e){
        function invalidToValid(id){
            let message = document.getElementById(id);
            message.classList.remove("invalid");
            message.classList.add("valid");
        }

        function validToInvalid(id){
            let message = document.getElementById(id);
            message.classList.remove("valid");
            message.classList.add("invalid");
        }
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numberValidation = /[0-9]/g;
        if (input.value.match(lowerCaseLetters)){
            invalidToValid("letter");
        }
        else{
            validToInvalid("letter");
        }
        if (input.value.match(upperCaseLetters)){
            invalidToValid("capital");
        }
        else{
            validToInvalid("capital")
        }
        if (input.value.match(numberValidation)){
            invalidToValid("number");
        }
        else{
            validToInvalid("number")
        }
        if (input.value.length >= 8){
            invalidToValid("min");
        }
        else{
            validToInvalid("min");
        }
    }
    input.onkeyup = checkPasswordRequirements
})


const inputs = document.querySelectorAll(".input");
inputs.forEach((input)=>{
    let box = input.querySelector("input");
    box.addEventListener("focus", ()=>{
        box.style.boxShadow = "1px 1px black 1px";
        box.style.borderColor="blue";
    })
    box.addEventListener("blur", ()=> {
        box.style.boxShadow = "none";
        box.style.borderColor = "black";
    })

})

function addCustomError(id, message){
    let input = document.getElementById(id);
    if (id !=="confirm-password"){
        input.addEventListener("input", (event)=>{
            if (input.validity.patternMismatch){
                input.setCustomValidity(message);
                input.reportValidity();
            }
            else{
                input.setCustomValidity("");
            }
        });
    }
    else{
        input.addEventListener("input", (event)=>{
            let passwordInput = document.getElementById("password");
            if (input.textContent !== passwordInput.textContent){
                input.setCustomValidity(message);
                input.reportValidity();
            }
            else{
                input.setCustomValidity("");
            }
        });
    }
}

addCustomError("phone_number", "Please enter a phone number in the format xxx-xxx-xxxx");
addCustomError("confirm_password", "Please make sure that your passwords match.");

let submitButton = document.querySelector("button");
submitButton.addEventListener("mousedown", ()=>{
    submitButton.style.borderColor = "gray";
});
submitButton.addEventListener("mouseup", ()=>{
    submitButton.style.borderColor = "#200a01";
});
