// Task 1 - Company Welcome Function
function fun1() {              // Named function
    console.log("Welecome to Stackly IT.")
}
fun1()

// Task 2 - Employee Details

function emp_details(Name, Department, Salary) {
    console.log(`Employee Name : ${Name}`)
    console.log(`Department : ${Department}`)
    console.log(`Salary : ${Salary}`)
}
emp_details("Naveen", "Developer", 30000)

// Task 3 - Calculate Bonus

let bonus = function (salary, bonus) {        // Anonymous Function
    console.log(`Total salary : ${salary + bonus}`)
}
bonus(40000, 5000)

// Task 4 - Student Result

let marks = (marks) => {      //   Arrow function
    if (marks >= 35)
        console.log("Pass.")
    else
        console.log("Fail.")
}
marks(22)

// Task 5 - Return Employee Name

let emp_name=()=>
{
    return prompt("Enter Employee Name.")
}
let employeeName=emp_name()
console.log(`"${employeeName}"`)


// Task 6 - Product Price

let product_price=function()
{
    return Number(prompt("Enter the product  price."))
}
let productPrice=product_price()
let GST=0.15
let GST_Amount = GST * productPrice
console.log(`Product Price : ${productPrice}`)
console.log(`GST Amount: ${GST_Amount}`)
console.log(`Total Price : ${productPrice + GST_Amount}`)


/*

Task 7 - Scope
Predict the output.
function demo(){

    if(true){

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);

}
Question:

•	Which variable prints?   
 -->   'a' prints here
        
•	Which variables give an error?   
----> 'b'  and 'c'  variables given  an error

•	Why?
-->  var is Global-scoped, so it can be accessed anywhere inside the code.
-->  let is block-scoped, so it exists only inside the block.
-->  const is also block-scoped, so it exists only inside the block.

*/

/*

Task 8 - Hoisting

Predict the output.
console.log(a);
var a = 100;

Now check
console.log(b);
let b = 200;

Explain the difference.

---->   var declarations are hoisted and automatically initialized with undefined. 
        Therefore, accessing them before assignment prints undefined.
---->   let declarations are also hoisted, but they remain in the Temporal Dead Zone (TDZ)
        until their declaration is executed.Accessing them before initialization throws a ReferenceError.
*/

//  Task 9 - Named Function

function named_fun() {
    console.log("Good Morning")
}
named_fun()

// Task 10 - Anonymous Function

let anonymous_fun = function (str) {
    console.log(str)
}
anonymous_fun("Welcome Employee.")

//  Task 11 - Arrow Function
let arrow_fun = () => {
    console.log("JavaScript Training")
}
arrow_fun()

// Task 12 - Return Function

let return_fun = () => {
    let str = "Stackly"
    return str
}
let str = return_fun()
console.log(`Welcome ${str}`)

// Task 13 - Higher Order Function

let log_fun = function (x) {
    console.log("Login Successful.")
    x()
}
let dashboard_fun = () => {
    console.log("Dashboard Loaded.")

}
log_fun(dashboard_fun)

// Task 14 - Callback Function

let order_fun = function (x) {
    console.log("Order Received.")
    x(delivered_fun)
}

let preparingFood_fun = function (y) {
    console.log("Preparing Food.")
    y()

}

let delivered_fun = function () {
    console.log("Delivered.")
}

order_fun(preparingFood_fun)

//   Task 15 - Generator Function

function* generator_fun() {
    yield "you have 10% Discount"
    yield "you have 20% Discount"
    yield "you have 30% Discount"
    yield "Better Luck Next Time"
}
let gen_fun = generator_fun()
console.log(gen_fun.next())
console.log(gen_fun.next())
console.log(gen_fun.next())
console.log(gen_fun.next())
console.log(gen_fun.next())

//  Task 16 - Return + Generator

function* fruits() {
    yield "Apple";
    yield "Orange";
    return "Banana";
}

let x = fruits();

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

//  Task 17 - Currying

function discount(a) {
    return function (b) {
        b = (b / 100) * a

        return a - b
    }
}
let final_amount = discount(1000)(10)
console.log(final_amount)

//  Task 18 - Company Salary

function salary(salary) {
    return function (bonus) {
        return function (Allowance) {
            return salary + bonus + Allowance
        }
    }
}

let emp_sal = salary(30000)(5000)(2000)
console.log(emp_sal)

//    Task 19 - Real-Time Login System

function function1(x) {
    console.log("Enter Username")
    x(function3)
}
function function2(y) {
    console.log("Verify Password")
    y(function4)
}
function function3(z) {
    console.log("Login Successful")
    z()
}
function function4() {
    console.log("Load Dashboard")
}

function1(function2)

//Mini Project (Employee Salary Management System)

console.log("===========       Employee Salary Management System     =========")

// 1.	Display employee details.
let empDetails = function () {

    let emp_details = {
        name: prompt("Enter Employee Name."),
        id: Number(prompt("Enter Employee ID.")),
        salary: Number(prompt("Enter Employee salary.")),
        department: prompt("Enter Employee Department.")
    }
    console.log("Employee Name : " + emp_details.name)
    console.log("Employee ID : " + emp_details.id)
    console.log("Employee Salary : " + emp_details.salary)
    console.log("Employee department : " + emp_details.department)
}
empDetails()

//  2.	Calculate salary + bonus using a function.

let employeeSal = function () {
    let emp_salary =
    {
        salary: Number(prompt("Enter Employee salary.")),
        bonus: Number(prompt("Enter Employee Bonus."))
    }
    return emp_salary.salary + emp_salary.bonus
}
let final_sal = employeeSal()
console.log("Employee Salary : " + final_sal)

//   3.	Return the final salary.

let finalsalary = (salary, bonus) => {
    return salary + bonus
}
let tot_sal = finalsalary(50000, 5000)
console.log(`Final Salary : ${tot_sal}`)

// 4.	Use an arrow function to print a welcome message.

let firstMessage = (str) => {
    console.log(str)
}
firstMessage("Welcome to Bengaluru")

//  5.	Use an anonymous function to print the department.
let anonymoseFun = function (employee) {
    console.log(employee.department)
}
let empl_details = {
    name: "Mahesh Reddy",
    id: Number("12345"),
    department: "Developer"
}
anonymoseFun(empl_details)

// 6.	Use a higher-order function to simulate login.

function dashboard() {
    console.log("Dashboard Loaded");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);

// 7.	Use a callback function to load the employee dashboard.

let emp_login = function (x) {
    console.log("Employee Enters Username.")
    x(emp_loginCheck)
}
let emp_pass = function (y) {
    console.log("Verify Password.")
    y(emp_dashboard)
}
let emp_loginCheck = function (z) {
    console.log("Login Successful")
    z()
}
let emp_dashboard = function () {
    console.log("Load Dashboard.")
}
emp_login(emp_pass);

//  8.	Generate monthly bonus coupons using a generator function.

function* monthlyBonus() {
    yield "₹500 Bonus Coupon";
    yield "₹1000 Bonus Coupon";
    yield "₹2000 Bonus Coupon";
    yield "No Bonus This Month";
}
let emp_bonus = monthlyBonus()
console.log(emp_bonus.next())
console.log(emp_bonus.next())
console.log(emp_bonus.next())
console.log(emp_bonus.next())
console.log(emp_bonus.next())

//   9.	Apply tax calculation using currying.

function taxCalculate(a) {
    return function (b) {
        b = a - (b * a)
        return b
    }
}
let Salary = 45000
let Tax = 0.15
let Total_salary = taxCalculate(Salary)(Tax)
console.log("Final Amount : " + Total_salary)

// 10.	Print the final employee report.

console.log("---------------------------------------------------")
console.log("                     EMPLOYEE REPORT               ")
console.log("---------------------------------------------------")
function Employee_details(employee) {
    console.log(`Employee Name: ${employee.name}`)
    console.log(`Employee id: ${employee.id}`)
    console.log(`Employee department: ${employee.department}`)
}



function employeeSal_details(sal) {
    console.log(`Salary: ${sal.salary}`)
    console.log(`Bonus: ${sal.bonus}`)

    let final_salary = sal.salary + sal.bonus
    console.log(`Salary After Bonus: ${final_salary}`)

    let tax_amount = sal.Tax * final_salary
    console.log(`Tax Amount: ${tax_amount}`)

    let final_sal = sal.salary - (sal.Tax * sal.salary)
    console.log(`Salary After Tax Deduction: ${final_sal}`)

}


let employee_details = {
    name: "Mahesh Reddy",
    id: Number(1234),
    department: "Web Development"
}


let salary_details =
{
    salary: Number(40000),
    bonus: Number(5000),
    Tax: Number(0.15)
}

Employee_details(employee_details)

employeeSal_details(salary_details)

console.log("---------------------------------------------------")

