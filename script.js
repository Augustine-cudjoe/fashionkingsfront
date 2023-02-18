let submit=document.getElementById("submit");
let first=document.getElementById("first");
let last=document.getElementById("last");
let email=document.getElementById("email");
let password=document.getElementById("pass");
let comfirmpassword=document.getElementById("pass2");
let errorText=document.getElementById("error");
submit.addEventListener("click", function(){
    firstVal=first.value.trim();
    lastVal=last.value.trim();
    emailVal=email.value.trim();
    passVal=pass.value.trim();
    passVal=pass2.value.trim();

    if (firstVal==""){
        errorText.innerText="First name can't be empty";
    } else if (lastVal==""){
        errorText.innerText="Last name can't be empty";
    } else if (emailVal==""){
        errorText.innerText="Email can't be empty";
    } else if (passVal==""){
        errorText.innerText="password can't be empty";
    } else if (passVal.length < 8){
        errorText.innerText="Password must be greater than 8";
    } else if (pass2Val!=passVal){
        errorText.innerText="Comfirm password";
    } else {
        errorText.className="correct";
        errorText.innerText="succesfully complete"
    }
})
var options = document.getElementById('mySelectID').options;
for (let i = 0; i < options.length; i++) { 
  console.log(options[i].value);//log the value
}