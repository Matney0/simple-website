function Customer(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.display = function() {
        return `---- ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    };
}

let submitButton = document.getElementById("add");
let message = document.getElementById("message");
let list = [];

submitButton.addEventListener("click", function() {
    let name = document.getElementById("fullName");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    
    if (!name.value.trim() || !age.value.trim() || !email.value.trim()) {
        message.innerHTML = "All fields must be filled!";
    } else {
        let newCustomer = new Customer(name.value.trim(), age.value.trim(), email.value.trim());
        list.push(newCustomer);
        message.innerHTML = "User added successfully!";
    }
});

let displayButton = document.getElementById("display");
let displayUser = document.getElementById("displayUser");
displayButton.addEventListener("click", function() {
    displayUser.innerHTML = "Here's the information from the newly added user:<br>";
    list.forEach((user, index) => {
        displayUser.innerHTML += `User ${index + 1}: ${user.display()}<br>`;
    });
});
