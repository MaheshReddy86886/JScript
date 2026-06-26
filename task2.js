/*
Task 1 - User Introduction
Ask the user:
•	Name
•	Age
Print:
My name is Naveen
I am 18 years old
*/

let name=prompt("Please enter your name:");
let age=prompt("Please enter your age:");
console.log("My name is " + name );
console.log(`I am ${age} years old.`);

/* 
=================        Task 2 - Degree Confirmation  ==========

Ask:
Did you complete degree?

using:
confirm()

If true:
Degree Completed
Else:
Degree Not Completed
Print in console.
*/

if(confirm("Did you complete degree?"))
    console.log("Degree completed.");

else
    console.log("Degree not completed.");

/* 
===================           Task 3 - Mobile Price         =============

Create variables:
mobilePrice = 15000
discount = 2000
Find final price.

Output:
Final Price : 13000
*/


let mobile_Price = 15000;
let discount = 2000;
let final_price= mobile_Price - discount;

console.log(`Final price: ${final_price}`);

/*
==================        Task 4 - Age Eligibility   ==========

Ask age using prompt.
Check:
18 or above

Output:
Eligible for Vote
otherwise:
Not Eligible
Use comparison operator.
*/

let voter_age= prompt("Please enter your age:");
if(voter_age>=18)
    console.log("Eligible for voting.");
else
    console.log("Not eligible for voting.");

/*
===================       Task 5 - Shopping Cart      ==============

Create array:

let cart = [
  "Rice",
  "Milk",
  "Sugar",
  "Tea Powder"
]

Print:
First Product
Last Product
Total Products
*/

let cart = [
  "Rice",
  "Milk",
  "Sugar",
  "Tea Powder"
]

console.log(`first product: ${cart[0]}`);
console.log(`last product: ${cart[cart.length-1]}`);
console.log(`total products: ${cart.length}`);

/* 
=================    Task 6 - Student Details   ==========

Create object:

let student = {
    name : "Naveen",
    age : 18,
    course : "MERN"
    }

Print:
Student Name
Student Course
*/

let student = {
    name : "Naveen",
    age : 18,
    course : "MERN"
}
console.log(`Student name: ${student.name}`);
console.log("Student course:" + student.course); 

/* 
=============     Task 7 - Employee Salary Calculator  ========

Create:
salary = 25000
bonus = 5000
Find total salary.

Output:
Total Salary : 30000
*/


let salary = 25000;
let bonus = 5000;
let total_sal = salary + bonus;
console.log(`Total salary: ${total_sal}`);

/*

Task 8 - Website Login Check
Create:
let username = "admin"
let password = "1234"

Ask user through prompt.
If both match:
Login Successful
Else:
Invalid Credentials

*/

let user_name = prompt("Please enter username.");
let user_pass = prompt("Please enter password.");

if(user_name == "admin" && user_pass == "1234")
    console.log("Login successful.");
else
    console.log("Login failed.");

/*
================  Task 9 - Food Delivery App    =======
Create:
foodPrice = 350
deliveryCharge = 50
Calculate:
Total Bill
GST 5%
Grand Total
*/


let food_price = 350;
let delivery_charge=50;
let total_price = food_price + delivery_charge;
let gst=(5/100)*total_price;
let total_bill= total_price + gst;

console.log(`Total bill: ${total_price}`);
console.log(`GST:${gst}`);
console.log(`Grand Total: ${total_bill}`);

/*
===========    Task 10 - E-Commerce Product Details========

let product = {
   name : "Laptop",
   price : 50000,
   brand : "ASUS",
   stock : true
}

Print:
Product Name
Brand
Price
Stock Available
*/


let product = {
   name : "Laptop",
   price : 50000,
   brand : "ASUS",
   stock : true
}

console.log("product Name: " + product.name);
console.log("product Brand: " + product.brand);
console.log("product Price: " + product.Price);
console.log("Stock Available:", product.stock);

/*
=========      Task 11 - Attendance System  ========
Ask:
Present?
using:
confirm()

Output:
Attendance Marked
or
Absent
*/

if(confirm("Are you present."))
    console.log("Attendance Marked");
else
    console.log("Absent");

/* 
========    Task 12 - Banking Application  ========
Ask user:
Current Balance
Withdraw Amount

Check:
withdraw <= balance

Output:
Transaction Successful
Remaining Balance : xxx

otherwise:
Insufficient Balance
*/ 


let curr_balance=prompt("Enter your current Bank balance.");
let withdraw_amount=prompt("Enter your withdraw amount.");

if(withdraw_amount<=curr_balance){
    console.log("Transaction succesfull.");
    console.log(`Remaining Balance:${curr_balance-withdraw_amount}`);
}
else
    console.log("Insufficient Balance.");



/*
========    Build a Mini Employee Management System =====

Store in object:
{
   name,
   age,
   department,
   salary
}
Print:
Employee Name
Employee Age
Department
Annual Salary

Then check:
salary > 30000

Output:
Senior Employee
or
Junior Employee

*/


console.log("==============     Employee Management System      =============")

let emp_details
{
   emp_name=prompt("Enter employee name.")
   emp_age=prompt("enter employee age.")
   emp_department=prompt("enter employee department. ")
   emp_salary=prompt("enter employee salary.")
}

console.log("Employee Name:" + emp_name);
console.log("Employee Age:" +emp_age);
console.log(`Employee Department: ${emp_department}`);
console.log(`Employee salary: ${emp_salary}`);

if(emp_salary > 30000)
    console.log("Senior Employee.")
else
    console.log("Junior Employee.")