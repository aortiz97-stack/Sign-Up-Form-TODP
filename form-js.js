const passwordInputs = document.querySelectorAll(".error");

function addMessageHTML(e){
    const formContainer = document.querySelector(".form-container");
    if (e!==undefined){        
        let messageDiv = document.createElement("div");
        let messageOpening = document.createElement("h3");
        messageOpening.textContent = "Password must contain the following:";
        messageDiv.appendChild(messageOpening);

        const messageList = ["A lowercase letter", "A capital (uppercase) letter", "A number", "Minimum of 8 characters"]

        for (let i = 0; i < messageList.length; i++){
            let p = document.createElement("p");
            p.classList.add("invalid");
            p.textContent = messageList[i];
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
    input.addEventListener("blur", deleteMessageHTML);
})