let inputNameValue = document.getElementById("name");
let inputEmailValue = document.getElementById("email");
let inputTelephoneValue = document.getElementById("phone");
let inputMessageValue = document.getElementById("messageBox");
let error = document.getElementById("error");
let regex = new RegExp('[a-z0-9]+@[a-z]+.com');

document.getElementById("forms").addEventListener("submit", function(e){
    e.preventDefault();

    error.innerText = '';

    if(inputNameValue.value === ""){
        error.innerText = 'Please enter your name';
        return;
    } else if(inputNameValue.value.length < 3){
        error.innerText = 'Name must be more than 3 characters';
        return;
    }

    if(inputEmailValue.value === ""){
        error.innerText = 'Please enter your email';
        return;
    } else if(!regex.test(inputEmailValue.value) == true){
        error.innerText =  "Email is not valid'";
        return;
    } 

    if(inputTelephoneValue.value == "") 
    {
        error.innerText = "Phone number must exist!";
        return;
    }else if(inputTelephoneValue.value[0] != '0' || inputTelephoneValue.value[1] != '8')
    {
        error.innerText = "Phone number start with 08!";
        return;
    }

    if(inputMessageValue.value === ""){
        error.innerText = 'Message cannot be blank';
        return;
    } else if(inputMessageValue.value.split(' ').length < 4){
        error.innerText = 'Message must contain more than 3 words';
        return;
    }


    document.getElementById("forms").submit();
});
