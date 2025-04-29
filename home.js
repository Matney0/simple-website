let fullName =document.getElementById("fullName");

let submitButton=document.getElementById("add");
let message=document.getElementById("message")
submitButton.addEventListener("click", function() {
    message.innerHTML = "You have submitted your information!";
});

let displayButton=document.getElementById("display");
let displayUser=document.getElementById("displayUser");
displayButton.addEventListener("click", function() {
    displayUser.innerHTML = "Heres the information from the newly added user:"
    
});
