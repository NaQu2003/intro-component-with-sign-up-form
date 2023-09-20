const form = document.querySelector('.form-js');
const nameInput = document.getElementById("name-input");
const lnameInput = document.getElementById('lname-input')
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

//Error Icons
const errorNameIcon = document.querySelector('.error-name')
const errorlNameIcon = document.querySelector('.error-lname')
const errorEmailIcon = document.querySelector('.error-email')
const errorPasswordIcon = document.querySelector('.error-password')
//Error texts
const errorNameP = document.querySelector('.error-name-p')
const errorlNameP = document.querySelector('.error-lname-p')
const errorEmailP = document.querySelector('.error-email-p')
const errorPasswordP = document.querySelector('.error-password-p')
//Email pattern
const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


function submitEvent(){
    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        checkName();
        checklName();
        checkEmail();
        checkPassword();
      
   
   
    })
}

function checkName(){
    if(nameInput.value ===''){
        errorNameIcon.style.display="block";
        errorNameP.style.display="block";
        return false;
        
    }else{
        errorNameIcon.style.display="none";
        errorNameP.style.display="none";
        
        return true;
    }
}
function checklName(){
 
    if(lnameInput.value ===''){
        errorlNameIcon.style.display="block";
        errorlNameP.style.display="block";
        return false;
    }else{
        errorlNameIcon.style.display="none";
        errorlNameP.style.display="none";
        return true;
    }
}
function checkEmail(){
    if(emailInput.value.match(emailPattern)){
        errorEmailIcon.style.display = "none";
        errorEmailP.style.display="none";
        return true;
    }else{
        errorEmailIcon.style.display = "block";
        errorEmailP.style.display="block";
        return false;
    }
}
function checkPassword(){
    if(passwordInput.value ===''){
        errorPasswordIcon.style.display="block";
        errorPasswordP.style.display="block";
        return false;
    }else{
        errorPasswordIcon.style.display="none";
        errorPasswordP.style.display="none";
        return true;
    }
}