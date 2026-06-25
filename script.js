//  Task 1 - Employee Name
// Ask the employee for their name using prompt().
// Print the employee name in the console.
// Display "Welcome <Employee Name>" on the webpage using document.writeln().

let emp_name = prompt("Please enter your name:");
console.log(emp_name);
document.writeln("Welcome " + emp_name + "<br>");

// Task 2 - Company Entry Confirmation
// Show a confirm box:
// "Are you ready to join today's JavaScript training?"
// Print the user's answer (true/false) in the console.


let Emp_Conformation = confirm("Are you ready to join today's JavaScript training?");
console.log(Emp_Conformation);

// Task 3 - Customer Greeting
// Show an alert saying:
// "Welcome to Stackly Solutions!"
// Then print "Customer entered the website." in the console.


alert("Welcome to Stackly Solutions!");
console.log("Customer entered the website.");


// Task 4 - Student Details
// Ask the student for:
// 1. Name
// 2. Age
// Print both values in the console.


let std_name1 = prompt("Please enter your name:");
let std_age = prompt("Please enter your age:");
console.log("Student name: " + std_name1 + "\nStudent age: " + std_age
);

// Task 5 - Product Price
// Create a variable using let to store a product price.
// Update the price with a new value.
// Print the updated price using console.log().

let prod_Name = "Dell Laptop";
let prod_price = 64000;
prod_price = 57000;
console.log("Product name: " + prod_Name + "\nUpdated price: " + prod_price);


// Task 6 - Login Validation
// Ask the user to enter their username.
// If the username is empty,
// show a warning using console.warn().
// Otherwise print:
// "Login Successful: <username>"


let user_name = prompt("Please enter your name:");
if (user_name == null)
    console.warn("Warning:Username is empty.");
else

    console.log("login Successfull:" + user_name);


// Task 7 - Website Maintenance
// Display an alert:
// "Website is under maintenance."
// After that print an error message in the console using console.error().


alert("Website is under maintenance.");
console.error("Error:Website is currently unavailable.");


// Task 8 - Feedback Collection
// Ask the user:
// "How was today's JavaScript session?"
// Print the feedback in the console.
// Display:
// "Thank you for your feedback!"
// on the webpage.

let feedback_collection = prompt("How was todays's JavaScript session? ");
console.log("Feedback: " + feedback_collection);
document.writeln("Thank you for your feedback! <br>");

// Task 9 - Profile Information
// Ask the user for:
// Name
// City
// Favorite Programming Language
// Print all three values in the console.

let profile_name = prompt("Please enter your name:");
let profile_city = prompt("Please enter your city:");
let profile_lang = prompt("Please enter your favorite programming language:");
console.log("Name: " + profile_name + "\nCity: " + profile_city + "\nFavorite Programming Language: " + profile_lang);



// Task 10 - Mini Registration Form
// Ask the user for:
// Full Name
// Email
// Mobile Number
// Print all details in the console like:

let full_name = prompt("Please enter your full name:");
let email = prompt("Please enter your email:");
let mobile_number = prompt("Please enter your mobile number:");

console.log("===== Registration Details =====");

console.log("Name   : " + full_name);
console.log("Email  : " + email);
console.log("Mobile : " + mobile_number);

alert("Registration Successful!");


document.writeln("Hello <br>");
document.writeln("Mahesh");




