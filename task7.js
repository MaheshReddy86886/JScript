/*
Task 1 - Employee Bonus (Spread Operator)
let employee = {
    name: "Naveen",
    salary: 35000
}
Create another object using the spread operator and add
bonus : 5000
department : "Developer"
Print the new object.
*/

let employee1 = {
    name: "Naveen",
    salary: 35000
}
let employee2 = {
    ...employee1,
    bonus: 5000,
    department: "Developer"
}
let employee = {...employee1, ...employee2}
console.log(employee)


/*Task 2 - Create a function
calculateBill(...)
Accept any number of product prices.
Print
•	Total items
•	Total price
Example
10 20 30 40

Output
Items : 4
Total : 100
*/

let calculateBill = function (...price) {
    let cost = 0;
    for (let i = 0; i < price.length; i++) {
        cost += price[i]
    }
    console.log(`Items : ${price.length}\nTotal Price : ${cost}`)
}
calculateBill(10, 20, 30, 40)

/*
Task 3 - Student Details (Object Destructuring)
let student = {
    name:"Rahul",
    age:22,
    course:"MERN",
    city:"Chennai"
}
Print
Rahul
22
MERN
Chennai
using destructuring only.
*/

let student = {
    name: "Rahul",
    age: 22,
    course: "MERN",
    city: "Chennai"
}
let { name, age, course, city } = student;
console.log(`Name : ${name}`)
console.log(`Age : ${age}`)
console.log(`Course : ${course}`)
console.log(`City : ${city}`)


/*
Task 4 - Online Food Order
let foods=["Pizza","Burger","Fries"]

Add
Coke
Ice Cream
using push().
Remove Fries.
Print final array.
*/

let foods = ["Pizza", "Burger", "Fries"]
foods.push("Coke", "Ice Cream")
foods.splice(2, 1)
console.log(foods)


/*
Task 5 - Bank Transactions
let transactions=[1000,2000,3000,4000]
Remove first transaction.
Add
500
at beginning.
*/

let transactions = [1000, 2000, 3000, 4000]
transactions.shift()
transactions.unshift(500)
console.log(transactions)


/*
Task 6 - Company Departments
let dept1=["HR","Sales"]
let dept2=["Developer","Testing"]
Merge them using
concat()
*/

let dept1 = ["HR", "Sales"]
let dept2 = ["Developer", "Testing"]
console.log(dept1.concat(dept2))


/*
Task 7 - Product Search
let products=["Laptop","Mouse","Keyboard","Monitor"]
Check whether
Keyboard exists.
Print
Available
or
Not Available
*/

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"]

if (products.includes("Keyboard"))
    console.log("Available")
else
    console.log("Not Available")


/*
Task 8 - User Login (Callback Function)
Create
login()
dashboard()

When login completes,
dashboard should execute using callback.
Output
Login Success
Dashboard Opened
*/

let login = (callback) => {
    console.log("Login Success");
    callback();
}
let dashboard = () => {
    console.log("Dashboard Opened");
}
login(dashboard);


/*   Task 9 - Coupon Generator (Generator Function)
Generate coupons
WELCOME10
SAVE20
MEGA50
FREE100

Print each one using
next()
*/

function* couponFun() {
    yield "WELCOME10"
    yield "SAVE20"
    yield "MEGA50"
    yield "FREE100"
}
let coupons = couponFun()
console.log(coupons.next().value)
console.log(coupons.next().value)
console.log(coupons.next().value)
console.log(coupons.next().value)

/*
Task 10 - Course Registration (Currying)
Create
course("JavaScript")("Morning")("Batch-36")

Output
Course : JavaScript
Batch : Morning
Room : Batch-36
*/

function course1(Course) {
    return function (Batch) {
        return function (Room) {
            console.log("Course :" + Course)
            console.log("Batch :" + Batch)
            console.log("Room :" + Room)
        }
    }
}
course1("JavaScript")("Morning")("Batch-36")

/*
Task 11 - Movie Collection
let movies=["Leo","GOAT","Dragon","Retro","Coolie"]
Use
slice()

Print only
Dragon
Retro
*/

let movies = ["Leo", "GOAT", "Dragon", "Retro", "Coolie"]
let newMovies = movies.slice(2, 4)
console.log(newMovies)

/*
Task 12 - Employee IDs
let ids=[101,102,103,104,105]

Replace
103
104
with
501
502
using splice().
*/

let ids = [101, 102, 103, 104, 105]
ids.splice(2, 2, 501, 502)
console.log(ids)


/*
Task 13 - Sort Product Prices
let price=[5000,250,700,12000,50]
Sort and print.
*/

let price = [5000, 250, 700, 12000, 50]
price.sort((a, b) => a - b);     //  Asscending Order
console.log(price);


/*
Task 14 - Nested Categories
let data=["Electronics",["Mobiles",["Samsung","Apple"]]]
Use destructuring.

Print
Electronics
Mobiles
Samsung
Apple
*/

let data = ["Electronics", ["Mobiles", ["Samsung", "Apple"]]]
let [type, [device, [brand1, brand2]]] = data
console.log(type)
console.log(device)
console.log(brand1)
console.log(brand2)


/*
Task 15 - Company Team
let developers=["John","David"]
let designers=["Ram","Kiran"]
Merge both arrays using spread operator.
*/
let developers = ["John", "David"]
let designers = ["Ram", "Kiran"]
let team = [...developers, ...designers]
console.log(team)


/*
Task 16 - Return Function
Create
calculateSalary()

Return
salary + bonus
Store the returned value in another variable and print it.
*/

let calculateSalary = () => {
    let salary = 45000
    let bonus = 5000
    return salary + bonus
}
let totalSal = calculateSalary()
console.log(totalSal)

/*
Task 17 - Scope Checking
Inside an if block declare
var
let
const
Try accessing them outside.
Explain
•	Which works?
•	Which gives an error?
*/

function demo() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

    }
    console.log(a);                  // Var variable prints the output because scope is in the function  
    //   console.log(b);            // throws an error because scope of let variable is block
    //    console.log(c);          // throws an error because scope of const variable is block

}
demo();

/*
Task 18 - Customer Orders
Find
•	First index of Pizza
•	Last index of Pizza
*/

let orders = ["Pizza", "Burger", "Pizza", "Sandwich", "Pizza"]
let firstIndex = orders.indexOf("Pizza")
let lastIndex = orders.lastIndexOf("Pizza")
console.log(`First index of Pizza ; ${firstIndex}`)
console.log(`Last index of Pizza ; ${lastIndex}`)


/*Task 19 - Flatten Product Categories
Convert into
[1,2,3,4,5,6]
using flat().
*/

let items = [1, 2, [3, 4, [5, 6]]]
let flatItems = items.flat(Infinity)
console.log(flatItems)


/*Task 20 - Mini Shopping Cart Challenge
let cart=["Mouse","Keyboard"]
Perform the following:

*/
let cart = ["Mouse", "Keyboard"]

//  1.	Add "Monitor" using push().
cart.push("Monitor")
console.log(cart)

// 2.	Add "Laptop" at the beginning.
cart.unshift("Laptop")
console.log(cart)

// 3.	Remove "Keyboard" using splice().
cart.splice(2, 1)
console.log(cart)

// 4.	Check whether "Mouse" exists.
if (cart.includes("Mouse"))
    console.log("Mouse Exists");
else
    console.log("Mouse Not Found");
// 5.	Merge with accessories using the spread operator.
let accessories = ["Webcam", "Speaker"]
cart = [...cart, ...accessories]

//Finally print the completed cart.
console.log(cart)

