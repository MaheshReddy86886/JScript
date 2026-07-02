let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
/*
Task 1 - Find the Highest Salary
Print
Highest Salary : 60000
Employee Name : John
*/

let heigh_sal = 0
let emp_name;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > heigh_sal) {
        heigh_sal = employees[i].salary
        emp_name = employees[i].name
    }
}
console.log(`name: ${emp_name}`)
console.log(`Heighest salary: ${heigh_sal}`)


/*
Task 2 - Find Employee by ID
Using the same array,
Search for
let searchId = 103;

Output
Employee Found
Name : Arun
Salary : 45000

If the ID is not available,
Employee Not Found
*/

let emp_id = 103;
let count = 0
for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === emp_id) {
        console.log("Employee Found.")
        console.log(`Name : ${employees[i].name}`)
        console.log(`Name : ${employees[i].salary}`)
        count++
    }
}
if (count === 0)
    console.log("Employee Not Found")


/*
Task 3 - Calculate Salary with Bonus
Bonus
let bonus = 5000;

Task
Calculate the salary after bonus for every employee.

Output
Naveen : 35000
John : 65000
Arun : 50000
*/

let bonus = 5000;
for (let i = 0; i < employees.length; i++) {
    let emp_sal = employees[i].salary + bonus
    console.log(employees[i].name + " : " + emp_sal)
}



/*
Task 4 - Experience Check
Rules
•	Experience ≥ 5 → Senior Employee
•	Otherwise → Junior Employee

Output
Naveen - Junior Employee
John - Senior Employee
Arun - Senior Employee
*/

let employees1 = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];
for (let i = 0; i < employees1.length; i++) {
    if (employees1[i].experience >= 5) {
        console.log(employees1[i].name + ": Senior Employee.")
    }
    else
        console.log(employees1[i].name + ": junior Employee.")

}


/*
Task 5 - Display Only Employee Names
Print only
Naveen
John
Arun
*/

if (employees.length) {
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i].name)
    }

}
else
    console.log("No Employees are here.")


/*
Task 6 - Display Employee IDs
Output
101
102
103
*/

if (employees.length) {
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i].id)
    }

}
else
    console.log("No Employees are here.")


/*

Task 7 - Find Total Salary
Calculate the total salary paid by the company.
Output
Total Salary : 135000
*/

let tot_sal = 0
if (employees.length) {
    for (let i = 0; i < employees.length; i++) {
        tot_sal += employees[i].salary
    }
    console.log("Total Salary: " + tot_sal)

}
else
    console.log("No Employees are here.")


/*
Task 8 - Employees Earning More Than ₹40,000
Output
John
Arun
*/

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000)
        console.log(employees[i].name)
}


/*

Task 9 - Increase Salary
Increase every employee's salary by ₹5000.

Expected Output
Naveen : 35000
John : 65000
Arun : 50000
*/

let increase_sal = 5000
for (let i = 0; i < employees.length; i++) {
    employees[i].salary += increase_sal
}
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + ": " + employees[i].salary)
}


/*
Task 10 - Employee Report
Print using Template Literals.

*/
for (let i = 0; i < employees.length; i++) {
    console.log(`Employee Name : ${employees[i].name}
Employee ID : ${employees[i].id}
Employee salary : ${employees[i].salary}`)
}



//  Challenge Task (Best for Interviews)

// 1.	Total number of employees.

console.log(`Total Number Of Employees : ${employees.length}`)

// 2.	Highest salary.

let heigh_sal1 = 0
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > heigh_sal1) {
        heigh_sal1 = employees[i].salary
    }
}
console.log(`Heighest salary: ${heigh_sal1}`)

// 3.	Lowest salary.

let i = 0
let lowest_sal = employees[i].salary
for (i = 1; i < employees.length; i++) {
    if (employees[i].salary < lowest_sal) {
        lowest_sal_sal = employees[i].salary
    }
}
console.log(`Lowest salary: ${lowest_sal}`)

// 4.	Total salary of all employees.

let tot_sal2 = 0
for (let i = 0; i < employees.length; i++) {
    tot_sal2 += employees[i].salary
}
console.log("Total Salary: " + tot_sal2)

// 5.	Employee earning the highest salary.

console.log("<---------   Employee earning the highest salary.  ------->")
let heigh_sal2 = 0
let emp_name1;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > heigh_sal2) {
        heigh_sal2 = employees[i].salary
        emp_name1 = employees[i].name
    }
}
console.log(`${emp_name1} : ${heigh_sal2}`)

//6.	Employee earning the lowest salary.

console.log("<-------   Employee earning the lowest salary.   -------->")
let j = 0
let k = 0;
let low_sal = employees[j].salary
for (j = 1; j < employees.length; j++) {
    if (employees[j].salary < low_sal) {
        low_sal = employees[j].salary
        k = j
    }
}
console.log(`${employees[k].name}: ${employees[k].salary}`)

// 7.	Employees whose salary is greater than ₹40,000.

console.log("<-----  Employees whose salary is greater than ₹40,000   ------->")
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000)
        console.log(employees[i].name)
}

//8.	Search an employee by ID.

console.log("====   Search an employee by ID.  ====")
let emp_id1 = Number(prompt("Enter Employee id To search Employee:"));
let count1 = 0
for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === emp_id1) {
        console.log("Employee Found.")
        console.log(`Name : ${employees[i].name}`)
        console.log(`Name : ${employees[i].salary}`)
        count1++
    }
}
if (count1 === 0)
    console.log("Employee Not Found")

//  9.	Add ₹5,000 bonus to every employee and display the new salary.

console.log("<---------  Add ₹5,000 bonus to every employee and display the new salary. ----->")
let increase_sal1 = 5000
for (let i = 0; i < employees.length; i++) {
    employees[i].salary += increase_sal1
}
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + ": " + employees[i].salary)
}

// 10.	Print a professional employee report using template literals.

for (let i = 0; i < employees.length; i++) {
    console.log("===================================")
    console.log("          EMPLOYEE REPORT          ")
    console.log("===================================")
    console.log(`Employee Name : ${employees[i].name}
Employee ID : ${employees[i].id}
Employee salary : ${employees[i].salary}`)
    console.log("===================================")
}