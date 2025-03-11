let password =  document.querySelector("#password");
let eye =  document.querySelector("#input-img");

eye.addEventListener("click", function(){
    if (password.type == "password"){
        password.type = "text";
        eye.src = "../eye-icons/eye-open.png";
    }

    else{
        password.type = "password";
        eye.src = "../eye-icons/eye-close.png";
        }       
})
