const email = document.getElementById("email");
const btn = document.getElementById("button");
const errormessage = document.querySelector(".error_message");
const success = document.getElementsByClassName("Thanks-for-sub");
const main = document.getElementsByTagName("main");
const subemail = document.getElementsByClassName("sub-email");
const dismiss = document.getElementById("dismiss");


function successfull(subscribedEmail){
    success[0].removeAttribute("hidden");
    main[0].style.display="none"
    subemail[0].innerHTML = subscribedEmail;
     
    // Added to return to the main page
    dismiss.addEventListener("click",()=>{
        success[0].setAttribute("hidden",true);
        main[0].style.display="flex";
        email.value ="";

    })
}

function validate(e){
    e.preventDefault();
    const emailReg  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailReg.test(email.value)){
        email.classList.add("error");
        errormessage.style.display="block";
        console.log("Not valid");
    }
    else{
        email.classList.remove("error");
        errormessage.style.display = 'none';
        email.classList.add("valid-entry");
        console.log(" correct");
        successfull(email.value)
        
    }

}

btn.addEventListener("click", validate);
