let signInBtn= document.getElementById("signInBtn");
let signUpBtn= document.getElementById("signUpBtn");
let nameField= document.getElementById("nameField");
let title= document.getElementById("title");

signInBtn.onclick= function(){
    nameField.style.maxHeight = "0";
    title.innerHTML="Sign In";
}

signUpBtn.onclick= function(){
    nameField.style.maxHeight="60px";
    title.innerHTML=" Sign Up";
}

