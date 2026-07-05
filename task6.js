/*
1. Employee Login (Scope)
Create a function where:
•	var companyName = "Stackly IT" should be accessible outside the if block. 
•	let employeeId and const password should only be accessible inside the block. 
•	Print all variables and identify which one throws an error. 
*/

function scope_fun() {
    var a = 10;
    if (true) {
        var x = 100
        let b = 20
        const c = 30

        console.log("inside if block")
        console.log("x = " + x)
        console.log("a = " + a)
        console.log("b = " + b)
        console.log("c = " + c)
    }
    console.log("outside if block")
    console.log("x = " + x)              //  Function Scope
    console.log("a = " + a)             //   Function Scope
    //   console.log("b = " + b)       //    block Scope
    //   console.log("c = " + c)      //     Block scope
}
scope_fun();
// console.log(a); // Error
// console.log(x); // Error



/*
2. ATM Machine (Hoisting)
Create a program where:
•	Try printing accountBalance before declaring it with var. 
•	Try the same using let. 
•	Try the same using const. 
•	Explain the different outputs. 
*/

console.log("========  Hoisting Topic   =========")

function var_fun() {
    console.log("Before Declaration Var Variable --->  accountBalance : " + accountBalance)
    var accountBalance = Number(prompt("Enter the Account Balance"))
    console.log("After Declaration Account Balance: " + accountBalance);
}
let let_fun = function () {
    console.log("Before Declaration let Variable --->  accountBalance : " + acc_balance)
    let acc_balance = Number(prompt("Enter the Account Balance"))
    console.log("After Declaration : " + acc_balance);
}
let const_fun = () => {
    console.log("Before Declaration const Variable --->  accountBalance : " + account_balance)
    const account_balance = Number(prompt("Enter the Account Balance"))
    console.log("After Declaration : " + account_balance);
}

var_fun()
// let_fun()        // Accessing it before declaration throws a ReferenceError.
// const_fun()     //  Accessing it before declaration throws a ReferenceError.

/*       Explination for Hoisting
var
Variable is hoisted.
Before declaration, it prints undefined.
After declaration, it prints the assigned value.

let
Variable is hoisted.
It remains in the Temporal Dead Zone (TDZ) until its declaration.
Accessing it before declaration throws a ReferenceError.

const
Variable is hoisted.
It also remains in the Temporal Dead Zone (TDZ).
Accessing it before declaration throws a ReferenceError.
*/

/* 3. Food Delivery App (Named Function) */


function named_fun(str)    // Named Function
{
    console.log(`Orderd Placed : ${str}`)
}
named_fun("Chicken Biriyani")


/* 4. WhatsApp Status (Anonymous Function) */

let anonymous_fun=function(str)  // Anonymous Function
{
    console.log(`Status Updated  : ${str}`)
}
let status = "Busy in Meeting"
anonymous_fun(status)


/* 
5. Weather App (Arrow Function) */

let arr_fun=(city,temp)=>
{
console.log(`${city} Temperature is ${temp}°C`)
}
let city=prompt("Enter City Name.")
let temp=prompt("Enter city Temperature.")
arr_fun(city,temp);


/*  6  . Flipkart Offer (IIFE)
Immediately display:
Today's Offer
Flat 60% Discount
using an IIFE.
*/

(function (object, discount) {
    alert(`Today's offer on ${object}
Flat ${discount}% Discount`);
})(prompt("Enter the dress"), prompt("Enter the dress Discount"));


/*
7. Online Payment (Higher Order + Callback)
Create:
•	makePayment() 
•	paymentSuccess() 
Requirement:
After payment,
Payment Processing...
Payment Successful
*/

let makePayment=function(callback)
{
    console.log("Payment Processing ........")
    callback()
}
let paymentSuccess = function()
{
    console.log("Payment Successful")
}

makePayment(paymentSuccess)


/*
8. YouTube Playlist (Generator Function)
Create a generator that returns:
Video 1
Video 2
Video 3
Video 4
After all videos are finished:
Playlist Completed
*/

function* youtubePlaylist()
{
    yield "Video 1"
    yield "Video 2"
    yield "Video 3"
    yield "Video 4"
    yield "Playlist Completed."
}
let playlist=youtubePlaylist()
console.log(playlist.next().value)
console.log(playlist.next().value)
console.log(playlist.next().value)
console.log(playlist.next().value)
console.log(playlist.next().value)


/*
9. Student Result (Return)
Create a function:
calculateTotal()
Return the total marks.
Store it in a variable and print:
Total Marks : 485
*/

let calculateTotal = function()
{
   let marks = 485
   return marks
}
let marks =calculateTotal()
console.log("Total Marks : " + marks)


/*
10. Shopping Cart (Return)
Create:
cartTotal(price1, price2, price3)
Return:
Total Amount
*/

let cartTotal=function(price1, price2, price3)
{
let total_price = price1 + price2 + price3
return total_price
}
let price1 = 500
let price2 =1200
let price3 =800
let total_price = cartTotal(price1,price2,price3)
console.log("Total Amount : " +total_price)


/*
11. Salary Calculator (Uncurrying)
Create:
salary(basic, hra, bonus)
Output:
Total Salary : 58000
*/

let salary = function(basic, hra, bonus)
{
    return basic + hra + bonus
}
let basic = 40000
let hra = 10000
let bonus = 8000
let tot_sal = salary(basic, hra, bonus)
console.log("Total Salary : " +tot_sal)


/*
12. Food Bill (Currying)
Convert this:
foodBill(food, drinks, dessert)
into a curried function.
Call like:
foodBill(200)(100)(80)
Output:
380
*/

function foodBill(food) {
    return function (drinks) {
        return function (dessert) {
            let total_bill = food + drinks + dessert
            return total_bill
        }
    }
}
let total_bill = foodBill(200)(100)(80)
console.log("Total Bill : " + total_bill)


/*
13. E-commerce Coupon Generator
Using a generator function, return coupons one by one:
WELCOME10
SAVE20
SUPER30
MEGA50

After all coupons:
No More Coupons
*/

function* gen_fun()
{
    yield "WELCOME10"
    yield "SAVE20"
    yield "SUPER30"
    yield "MEGA50"
    yield "No More Coupons"
}
let coupons = gen_fun()
console.log(coupons.next().value)
console.log(coupons.next().value)
console.log(coupons.next().value)
console.log(coupons.next().value)
console.log(coupons.next().value)


/*
14. Bank Transaction (Higher Order + Callback)
Create:
withdraw(callback)
Callback should print:
Transaction Successful
Expected Output:
Processing...
Transaction Successful
*/

let withdraw=function(callback)
{
    console.log("Processing ........")
    callback()
}
let payment_Success = function()
{
    console.log("Transaction Successful")
}

withdraw(payment_Success)

/* 15.       Employee Profile (Scope)

Task:
•	Print company. 
•	Try printing designation. 
•	Try printing salary. 
•	Explain why some variables work and others don't. 

*/

function employeeProfile() {

    if (true) {
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;

        console.log("Inside if block");
        console.log("Company : " + company);
        console.log("Designation : " + designation);
        console.log("Salary : " + salary);
    }

    console.log("Outside if block");
    console.log("Company : " + company);

    // console.log("Designation : " + designation);  // Throws Error
    // console.log("Salary : " + salary);           //  Throws Error
}

employeeProfile();

/*

---> company is declared with var, so it has function scope. It is accessible anywhere inside employeeProfile(), even outside the if block.
---> designation is declared with let, so it has block scope. It is accessible only inside the if block.
---> salary is declared with const, so it also has block scope. It is accessible only inside the if block.
*/