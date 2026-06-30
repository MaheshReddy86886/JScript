/*
Task 1 - Employee Login Eligibility
Concepts
•	Variables
•	Comparison Operators
•	Logical Operators
•	if else
Scenario
HR wants to verify whether an employee can access the office.
Requirements
•	Take employee age.
•	Take employee ID availability (true/false).
•	Take employee attendance percentage.
•	Allow entry only if:
o	Age >= 18
o	ID available
o	Attendance >= 75

Expected Output
Access Granted
or
Access Denied
*/


let age = Number(prompt("Enter your Age."))

if (age >= 18) {
    let emp_id = confirm("Do you have employee id.")

    if (emp_id) {
        let attendance = Number(prompt("Enter Attendance Percentage."))
        if (attendance >= 75)
            console.log("Access Granted.")
        else
            console.log("Attendenace is less then 75%\nAccess Denied")
    }
    else
        console.log("Employee Id not Availble\nAccess Denied")
}
else
    console.log("Age Less then 18\nAccess Denied")



/*
Task 2 - Student Grade System
Concepts
•	if else if
Input
Marks = 87
Output
Grade A

Rules
90-100 -> A+
80-89  -> A
70-79  -> B
60-69  -> C
Below 60 -> Fail
*/

let marks = Number(prompt("Enter your Marks."))
if (marks >= 90 && marks <= 100)
    console.log("Grade : A+")
else if (marks >= 80 && marks <= 89)
    console.log("Grade : A")
if (marks >= 70 && marks <= 79)
    console.log("Grade : B")
if (marks >= 60 && marks <= 69)
    console.log("Grade : C")
if (marks <= 60)
    console.log("FAIL.")



/*
Task 3 - ATM Withdrawal
Concepts
•	Arithmetic
•	if else
Variables
Balance = 5000
Withdraw = 3000
Conditions
•	Enough balance
•	Withdraw amount should be multiple of 100

Output
Transaction Successful
Remaining Balance : 2000
*/

let Balance = 5000
let withdraw = 3000


if (withdraw <= Balance) {
    if ((withdraw % 100) === 0) {

        console.log("Transcation Successful.")
        console.log(`Remaining Balance: ${Balance - withdraw}`)
    }
    else
        console.log("Withdraw amount should be multiple of 100.");
}
else
    console.log("Unsufficient Balance")



/*
 Task 4 - Food Ordering App
Concepts
•	switch
Menu
1 Pizza
2 Burger
3 Shawarma
4 Biryani
5 Juice

Input
choice = 4
Output
You Ordered Biryani
*/

let choice = Number(
    prompt(` Enter your Order:
        1.Pizza.
        2.Burger.
        3.Shawarma.
        4.Biriyani.
        5.Juice`))
switch (choice) {
    case 1: console.log("You Ordered Pizza.")
        break;
    case 2: console.log("You Ordered Burger.")
        break;
    case 3: console.log("You Ordered Shawarma.")
        break;
    case 4: console.log("You Ordered Biriyani.")
        break;
    case 5: console.log("You Ordered Juice.")
        break;
    default: console.log("Invalid Order");
}



/*

Task 5 - E-Commerce Discount
Concepts
•	Operators
•	if else
Rules
Purchase > 5000
Premium User
↓
20% Discount
Otherwise
10% Discount

Display:
Original Price
Discount
Final Price
*/

let premium_user = confirm("Are you a Premium User?")
let purchase = Number(prompt("how much you buyed"))
let discount;
let final_price;
if (purchase > 5000 && premium_user) {
    discount = (20 / 100) * purchase
    final_price = purchase - discount
}
else {
    discount = (10 / 100) * purchase
    final_price = purchase - discount

}
console.log(`Original price:${purchase}`)
console.log(`Discount:${discount}`)
console.log(`Final Price:${final_price}`)



/*

Task 6  - Attendance Report
Concepts
•	for loop
Print
Day 1 Present
Day 2 Present
...
Day 30 Present
*/

for (let i = 1; i <= 30; i++) {
    console.log(`Day ${i} Present`)
}


/*
Task 7 - Even Number Generator
Concepts
•	Loop
•	Modulus

Print
2
4
6
8
10
...
100
*/

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0)
        console.log(i)
    else
        continue
}


/*

Task 8 - Mobile Number Validation
Concepts
•	if
•	Logical Operator
Conditions
Length = 10

Starts with

6
7
8
9

Output
Valid Mobile Number
or
Invalid Mobile Number
*/

let mob_num = prompt("Enter your Mobile number:")
if (mob_num !== null) {
    let len_num = mob_num.length
    if (len_num === 10) {
        if (mob_num[0] == 6 || mob_num[0] == 7 || mob_num[0] == 8 || mob_num[0] == 9) {
            console.log("Valid Mobile Number.")
        }
        else {
            console.log("Invalid Mobile Number.")
        }
    }
    else {
        console.log("Enter 10 digit valid mobile number:")
    }
}
else
    console.log("User cancelled the input.")



/*
Task 9 - Shopping Cart
Concepts
•	Array
cart = [
"Milk",
"Bread",
"Egg",
"Rice",
"Oil"
]
 
Print
First Item
Last Item
Total Items
*/

cart = ["Milk", "Bread", "Egg", "Rice", "Oil"]
console.log(`First Item: ${cart[0]}`)
console.log(`Last Item:${cart[cart.length - 1]}`)
console.log(`Total Items:${cart}`)
console.log(`Count of Items:${cart.length}`)


/*
Task 10 - Employee Database
Concepts
•	Object
employee = {
name
salary
department
experience
}
 
Print
Employee Name
Department
Experience
*/

let employee = {
    name: prompt("Enter your name:"),
    salary: Number(prompt("Enter your Salary:")),
    department: prompt("Enter your Department"),
    experience: Number(prompt("Enter your Experience:"))
};

console.log(`Employee Name:${employee.name}`)
console.log(`Department:${employee.department}`)
console.log(`Experience:${employee.experience}`)


/*
 
Task 11 - Company ID Generator
Concepts
•	Template Literal
Input
Name = Naveen
ID = 1045
Department = Development
 
Output
Welcome Naveen
Your Employee ID is EMP1045
Department : Development
*/

let name = 'Naveen'
let id = 1045
let Department = "Development"
console.log(`Welcome ${name}`)
console.log(`Your Employee ID is EMP${id}`)
console.log(`Department : ${Department}`)


/*
 Task 12 - User Registration
Concepts
•	prompt()
•	confirm()
•	alert()
Flow
Enter Name
Enter Age
Do you accept Terms?
↓
Registered Successfully
*/

let name1 = prompt("Enter your Name:")
if (name != null) {
    let age = prompt("Enter your Age ")
    if (age != null) {
        let conformation = confirm("Do you accept Terms?")

        if (conformation)
            alert("Registered Successfully")
        else
            alert("Accept the Terms.\nRegistered Not successfully")
    }
    else {
        alert("provide proper Age.\nRegistered Not successfully")
    }
}
else {
    alert("Enter Name Properly.\nRegistered Not successfully")
}


/*
Task 13 - Salary Increment Calculator
Concepts
•	Arithmetic Operators
Input
Salary = 35000
 
Increment = 15%
Output
Old Salary
Increment Amount
New Salary
*/

let sal = 35000
let increment = 15 / 100
let new_sal = sal + (increment) * sal;
console.log("Old Salary :" + sal)
console.log("Increment Amount:" + (increment * sal))
console.log("New Salary:" + new_sal)

/*
Task 14 - Restaurant Bill Generator
Concepts
•	Variables
•	Operators
Input
Burger = 150
Pizza = 300
Juice = 80
 
Calculate
Subtotal
GST 18%
Grand Total
*/

let Burger = 150
let Pizza = 300
let juice = 80
let subtotal = Burger + Pizza + juice
let Gst = (18 / 100) * subtotal
console.log("Subtotal:" + subtotal)
console.log("GST 18% :" + Gst)
console.log("Grand Total:" + (subtotal + Gst))


/*
Task 15 - Company Attendance Dashboard
Concepts
•	Loop
•	Object
•	if else
Employees
Rahul - Present
Arun - Absent
Kamal - Present
Priya - Present
Divya - Absent
 
Print
Present Employees
Absent Employees
Total Present
Total Absent
*/

let Employees = [
    { name: "Rahul", status: "Present" },
    { name: "Arun", status: "Absent" },
    { name: "Kamal", status: "Present" },
    { name: "Priya", status: "Present" },
    { name: "Divya", status: "Absent" }
]
let len = Employees.length
let tot_present = 0
let tot_absent = 0
console.log("========   Present Employees  ========")
for (i = 0; i < len; i++) {
    if (Employees[i].status === "Present") {
        console.log(Employees[i].name)
    }
}
console.log("Total Present:" + tot_present)
console.log("========   Absent Employees  ========")
for (i = 0; i < len; i++) {
    if (Employees[i].status === "Absent")
        console.log(Employees[i].name)
}
for (i = 0; i < len; i++) {
    if (Employees[i].status === "Absent")
        tot_absent++
    else
        tot_present++
}
console.log("Total present:" + tot_present)
console.log("Total absent:" + tot_absent)


/*  Mini Project 
Employee Management System (Console Version)
*/

console.log("Employee Management System.")


let employees = []
outer:
while (true) {
    let choice = Number(
        prompt(`
        1.Add Employee
        2.View All Employees
        3.Search Employees
        4.Calculate Salary with bonus
        5.check Experience level
        6.Delete employee
        7.Exit.
        `)
    )
    switch (choice) {
        case 1: alert("===== Adding Employee  ======")
            let emp = {
                id: Number(prompt("Enter Employee Id.")),
                name: prompt("Enter Employee Name."),
                salary: Number(prompt("Enter Employee Salary.")),
                department: prompt("Enter Employee Department."),
                experience: Number(prompt("Enter Employee Experience.")),
            }
            employees[employees.length] = emp;
            alert("Employee Added Successfully.")
            console.log(employees)
            break;
        case 2:
            alert("Displaying all Employees.")
            if (employees.length === 0) {
                alert("No employees.")
                break;
            }
            else {
                for (let i = 0; i < employees.length; i++)
                    console.log(`Id: ${employees[i].id}
                 Name: ${employees[i].name}
                 Salary: ${employees[i].salary}
                 Department: ${employees[i].department}
                 Experience: ${employees[i].experience}
                `)
                break;
            }
        case 3:
            alert("Searching Employees by Employee Id:")
            let emp_id = Number(prompt("Enter Employee Id."))
            let count = 0;
            if (employees.length) {
                for (let i = 0; i < employees.length; i++) {
                    if (emp_id === employees[i].id) {
                        console.log(`Id: ${employees[i].id}
                 Name: ${employees[i].name}
                 Salary: ${employees[i].salary}
                 Department: ${employees[i].department}
                 Experience: ${employees[i].experience}
                `)
                        count++
                        break;
                    }
                }
                if (count === 1)
                    alert("Employee Found.")
                else
                    alert("Employee Not Found.")
            }
            else
                alert("NO Employees Data.")
            break;
        case 4:
            alert("Calculate Salary with Bonus:")
            let emp_id1 = Number(prompt("Enter Employee Id."))
            let count1 = 0;
            if (employees.length) {
                for (let i = 0; i < employees.length; i++) {
                    if (emp_id1 === employees[i].id) {
                        let bonus = (15 / 100) * employees[i].salary
                        console.log(`Name: ${employees[i].name}
                    Old Salary: ${employees[i].salary}
                    Bonus Amount 15% : ${bonus}
                    New salary: ${bonus + employees[i].salary}
                   `)
                        employees[i].salary = bonus + employees[i].salary
                        count1++
                        break;
                    }
                }
                if (count1 === 1)
                    alert("Employee Found.")
                else
                    alert("Employee Not Found.")
            }
            else
                alert("NO Employees Data.")
            break;
        case 5:
            alert(" Check Experience Level")
            let emp_id2 = Number(prompt("Enter Employee Id."))
            let count2 = 0;
            if (employees.length) {
                for (let i = 0; i < employees.length; i++) {
                    if (emp_id2 === employees[i].id) {
                        if (employees[i].experience < 2) {
                            console.log(`Name: ${employees[i].name}
                    Experience: ${employees[i].experience}
                    Experience Level : Junior Level
                   `)
                        }
                        else if ((employees[i].experience >= 2) && (employees[i].experience <= 5)) {
                            console.log(`Name: ${employees[i].name}
                        Experience: ${employees[i].experience}
                        Experience Level : Mid Level
                        `)
                        }
                        else {
                            console.log(`Name: ${employees[i].name}
                        Experience: ${employees[i].experience}
                        Experience Level : Senior Level
                        `)
                        }
                        count2++
                        break;
                    }
                }
                if (count2 === 1)
                    alert("Employee Found.")
                else
                    alert("Employee Not Found.")

            }
            else
                alert("NO Employees Data.")

            break;
        case 6:
            alert("Delete Employee details by Employee Id:")
            let emp_id3 = Number(prompt("Enter Employee Id."))
            let count3 = 0;
            if (employees.length) {
                for (let i = 0; i < employees.length; i++) {
                    if (emp_id3 === employees[i].id) {
                        for (let j = i; j < employees.length - 1; j++) {
                            employees[j].id = employees[j + 1].id
                            employees[j].name = employees[j + 1].name
                            employees[j].salary = employees[j + 1].salary
                            employees[j].department = employees[j + 1].department
                            employees[j].experience = employees[j + 1].experience

                        }
                        employees.length = employees.length - 1;
                        count3++
                        break;
                    }
                }
                if (count3 === 1) {
                    alert("Employee Deleted Successfully.")

                }
                else
                    alert("Employee Not Found.")
            }
            else
                alert("NO Employees Data.")
            break;
        case 7:
            alert("Thank You! Exiting Employee Management System.");
            break outer;

        default:
            alert("Invalid Choice");
    }
}
