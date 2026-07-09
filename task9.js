/*
Task 1: Employee Age Calculator
Scenario:
An HR portal stores employees' Date of Birth. Display their current age.
*/

let employees = [
    { id: 101, name: "Rahul", department: "Developer", dob: "2002-06-03" },
    { id: 102, name: "Anjali", department: "HR", dob: "1998-11-15" },
    { id: 103, name: "Kiran", department: "Testing", dob: "2000-04-23" },
    { id: 104, name: "David", department: "Developer", dob: "1996-01-10" }
];

//   Calculate All Employees current age
let todayDate = new Date();
employees.forEach((c, i, t) => {
    let dob = new Date(c.dob);
    let age = todayDate.getFullYear() - dob.getFullYear();
    let monthDiff = todayDate.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() <  dob.getDate())) {
        age--;
    }
    console.log("Employee Name: " + c.name + "\nAge: " + age)
})

//  •	Create a DOB using new Date()

let date1 = new Date("1994-06-15");
console.log(date1.toLocaleDateString());

//  •	Use getFullYear()

let year = date1.getFullYear();
console.log("Year: " + year);

//    •	Calculate current age

let age = todayDate.getFullYear() - year;
let month = todayDate.getMonth() - date1.getMonth();
if (month < 0 || (month === 0 && date1.getDate() >  todayDate.getDate())) {
    age--;
}
console.log("Employee Age: " + age + " Years");

/*
Task 2: Online Appointment Scheduler
Scenario:
A hospital wants to reschedule an appointment.
Requirements:
•	Create today's date.
•	Change the appointment to:
o	Year → 2027
o	Month → December
o	Date → 15
o	Time → 10:30 AM
•	Print the updated appointment.
*/

let appointmentUpadteddate = new Date()
appointmentUpadteddate.setFullYear(2027)
appointmentUpadteddate.setMonth(11)
appointmentUpadteddate.setDate(15)
appointmentUpadteddate.setHours(10)
appointmentUpadteddate.setMinutes(30)
console.log("Updated Appointment Date : " + appointmentUpadteddate.toLocaleString())

/*
Task 3: Multi-Country Meeting Time
Scenario:
Your company has meetings with India, USA, and Japan.
Requirements:
Display the current time in:
•	India
•	New York
•	Tokyo
*/
//    India Time
let asianTime = todayDate.toLocaleTimeString("en-IN",
{
    timeZone: "Asia/Kolkata"
})
console.log("Asia/Kolkata : " + asianTime)

//  New York Time

let americanTime = todayDate.toLocaleTimeString("en-US",
    {
        timeZone: "America/New_York"
    }
)
console.log("America/New_York : " + americanTime)

//  Tokyo Time
let japanTime = todayDate.toLocaleTimeString("ja-JP",
    {
        timeZone: "Asia/Tokyo"
    }
)
console.log("Asia/Tokyo : " + japanTime)

/*

Task 4: Product Warranty Expiry
Scenario:
A customer purchased a laptop today. Warranty is valid for 2 years.
Requirements:
•	Get today's date.
•	Add 2 years using:
*/

let PurchaseDate = new Date()
console.log(`Today's Date : ${PurchaseDate.toLocaleDateString()}`)

PurchaseDate.setFullYear(PurchaseDate.getFullYear() + 2)
console.log(`Warranty Expiry : ${PurchaseDate.toLocaleDateString()}`)

/*
Task 5: Digital Clock
Scenario:
Create a live digital clock for a website.
*/
let currentDate = new Date()
let current_time = currentDate.toLocaleTimeString()
console.log(`Before set Interval Current Time : ${current_time}`)

setInterval(() => {
    let date = new Date()
    console.log(`${date.toLocaleTimeString()}`)
}, 1000)