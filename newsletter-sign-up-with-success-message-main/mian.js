const email = document.getElementById("email");
const btn = document.getElementById("button");
const errormessage = document.querySelector(".error_message");

function error(){
    email.style.borderColor = "rgba(255, 0, 0, 0.5)";
    email.style.backgroundColor="rgba(255, 0, 0, 0.3)";
    email.style.color="rgba(255, 0, 0, 0.5)"
}

function hide(){
    email.style.borderColor = "rgb(181, 181, 181)";
    email.style.backgroundColor="white";
    email.style.color="black";  
    // email.style.color="red"


}   


function validate(e){
    e.preventDefault();
    


    const emailReg  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailReg.test(email.value)){
         error();
         errormessage.removeAttribute("hidden");
        // email.style.backgroundColor.opacity = 0.5;
        console.log("Not valid");
    }
    else{
        hide();
        console.log(" correct");
        errormessage.setAttribute("hidden",true);
    }

}



btn.addEventListener("click", validate);
