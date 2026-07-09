/*
Task 1: Employee Salary Dashboard
Concepts: map(), filter(), reduce(), find()
Scenario:
A company has employee details.
*/

// •	Display all employee names using map().

let employees = [
    { id: 101, name: "Rahul", department: "Developer", salary: 50000, active: true },
    { id: 102, name: "Anjali", department: "HR", salary: 105000, active: false },
    { id: 103, name: "Kiran", department: "Testing", salary: 145000, active: true },
    { id: 104, name: "David", department: "Developer", salary: 60000, active: true }
];

let employeeNames = employees.map((c, i, t) => {
    return c.name
})
console.log("Employee Names : " + employeeNames)

// Show employees with salary greater than ₹50,000 using filter().

let highSalaryEmployees = employees.filter((c, i, t) => {
    return c.salary > 50000;
})
console.log(highSalaryEmployees)

//   •	Find the first employee whose salary is above ₹1,00,000 using find().

let firstEmployee = employees.find((c, i, t) => {
    return c.salary > 100000
})
console.log(firstEmployee)

//  •	Calculate the total salary expense using reduce().

let total_sal = employees.reduce((a, c, i, t) => {
    return a + Number(c.salary)
}, 0)
console.log(total_sal)


/*
Task 2: E-Commerce Cart Management
Concepts: Spread Operator, Rest Operator
Scenario:
A customer adds products to their shopping cart.

*/

let cart1 = ["Laptop", "Mouse"];
let cart2 = ["Keyboard", "Monitor"];

//   •	Merge two product arrays using the spread operator.
let cart = [...cart1, ...cart2]
console.log(cart)

// •	Add a new product while keeping the original array unchanged.

let updatedCart = [...cart, "Headphones"];
console.log(updatedCart);

//   •	Create a function checkout(...products) using the rest operator.

let checkout = function (...products) {
    console.log("Products in checkout : ", products)
}
checkout("Laptop", "Mouse", "Keyboard", "Monitor", "Headphones")

//  •	Print total number of products received.

let countProducts = function (...products) {
    return products.length
}
let count = countProducts("Laptop", "Mouse", "Keyboard", "Monitor")
console.log("Total Products in Cart : " + count)


/*

Task 3: Student Report Card
Concepts: Object Destructuring, Array Destructuring
Scenario:
A school stores student details.
Requirements:
•	
•	Print:
o	Student Name
o	Department
o	Total Marks
o	Average Marks
*/

let student = {
    id: 101,
    name: "Rahul",
    age: 22,
    department: "Computer Science",
    marks: [85, 83, 95, 90, 88, 72]
};

//   Extract name, department, and marks using object destructuring.

let { name, department, marks } = student;
console.log("Name : " + name)
console.log("department : " + department)
console.log("marks : " + marks)

//  •	Extract the first three subject marks using array destructuring.

let [mark1, mark2, mark3] = marks.slice(0, 3)
console.log("Mark 1 : " + mark1)
console.log("Mark 2 : " + mark2)
console.log("Mark 3 : " + mark3)

/*

•	Print:
  Student Name,Department ,Total Marks,Average Marks
*/

let studentDetails = {
    ...student,
    totalMarks: marks.reduce((a, c) => a + c, 0),
    averageMarks: marks.reduce((a, c) => a + c, 0) / marks.length
}

let { totalMarks, averageMarks } = studentDetails;

console.log("Name : " + name);
console.log("Department : " + department);
console.log("Total Marks : " + totalMarks);
console.log("Average Marks : " + averageMarks);

/*
Task 4: Product Search System
Concepts: String Methods
Scenario:
Users search for products on an online shopping website.
*/

let itemName = "    Gaming Laptop  ";

// •	Remove extra spaces using trim().

itemName = itemName.trim()
console.log(itemName)

//   •	Convert search text to lowercase

itemName = itemName.toLowerCase()
console.log(itemName)

//  •	Check whether the product contains the search keyword using includes().

let found = itemName.includes("gaming")
console.log(found)

//   •	Highlight the searched word using replace().

let updatedItemname = itemName.replace("laptop", "Notebook")
console.log(updatedItemname)

/*
Task 5: Movie Collection Manager
Concepts: Array Methods
Scenario:
A movie streaming platform manages its movie list.
*/

let movies = ["Leo", "Pushpa", "KGF", "RRR"];

//  •	Add new movies using push().

movies.push("Vikram")
console.log(movies)

// •	Remove the last movie using pop().

movies.pop()
console.log(movies)

// •	Remove the first movie using shift().

movies.shift()
console.log(movies)

// •	Add a featured movie at the beginning using unshift().

movies.unshift("Bahubali The Epic")
console.log(movies)

//  •	Replace one movie using splice().

movies.splice(2, 1, "Animal")
console.log(movies)

//  •	Sort movie ratings in descending order.

let movieRate = [9.5, 7.0, 6.5, 9.0, 8.0]

let movieRatings = movieRate.sort((a, b) => {
    return b - a
})
console.log(movieRatings)

// •	Check whether a movie exists using includes().
let foundMovie = movies.includes("RRR")
console.log(foundMovie)