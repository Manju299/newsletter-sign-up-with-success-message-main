const email = document.getElementsByClassName("email");
const btn = document.getElementById("button");
const emailReg  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



function validate(e){
    e.preventDefault();
    console.log(email.value);
    if(emailReg.test(email.value)){
        console.log("valid");
    }
    else{
        console.log("Enter correct email id");
    }

}



btn.addEventListener("click", validate);
