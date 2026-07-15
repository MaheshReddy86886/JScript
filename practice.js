/*
Task 1: Employee Profile
Store an employee's name, ID, salary, department, and 
active status using appropriate data types. 
Print the details using template strings.
*/

let emp_Name = "John Doe";
let emp_ID = 101;
let emp_Salary = 60000;
let empDepartment = "IT";
let emp_status = "Active";
console.log(`Employee Name: ${emp_Name}`);
console.log(`Employee ID: ${emp_ID}`);
console.log(`Employee Salary: ${emp_Salary}`);
console.log(`Employee Department: ${empDepartment}`)
console.log(`Employee Status: ${emp_status}`);

/*
Task 2: Student Admission Form

Store:
Name
Age
Percentage
Passed (boolean)
Address (object)

Print all details.
*/

let studentDetails = {
    Name: "Mahesh Reddy",
    Age: 26,
    Passed: true,
    address: {
        doorNo: '1 -29',
        village: 'Velugonu',
        mandal: "Rapur",
        District: "SPSR Nellore"
    }
}

console.log(studentDetails)


let accountNumber = 123456789012
let accHoldername = "Mahesh Reddy"
let currentBalance = 1500000
if (confirm("Do You Want Deposit Amount.....")) {
    let depositAmount = Number(prompt("Enter deposit amount"))
    currentBalance += depositAmount;
    console.log("Transaction is done")

}
 if (confirm("Do You Want Withdraw Amount.....")) {
    let withdrawAmount = Number(prompt("Enter withdraw amount"))
    if ((currentBalance > 0) && (currentBalance > withdrawAmount)) {
        currentBalance += withdrawAmount;
        console.log("Transaction is done")
    }
    else
        console.log("insuffieeint Balance...")
}
else
    console.log("Transaction Failed...")

console.log("Available Balance :-", currentBalance)