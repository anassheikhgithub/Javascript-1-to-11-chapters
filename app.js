// chapter 3

var age = 30;
alert("Your age is: " + age);
var visitCount = 5; 
document.write("You have visited this site " + visitCount + " times.");
var birthYear = 1995;
document.write("My birth year is " + birthYear + "<br>");
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");



let x = 5, y = "Hello", z = true;


// chapter 6 to 9

var a = 2, b = 1;
var result = --a - --b + ++b + b--;



// chapter 9 to 11

let city = prompt("Enter city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}
let gender = prompt("Enter your gender:");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}
let color = prompt("Enter color of traffic signal:");

switch (color.toLowerCase()) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid color");
}
let fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
// a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// e
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// f
if("car" < "cat"){
    alert("car is smaller than cat");
}
let subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

let totalObtainedMarks = subject1 + subject2 + subject3;
let percentage = (totalObtainedMarks / totalMarks) * 100;
let grade;

if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'Fail';
}

alert(`Total Marks: ${totalMarks}\nMarks Obtained: ${totalObtainedMarks}\nPercentage: ${percentage}%\nGrade: ${grade}`);
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (Math.abs(secretNumber - userGuess) === 1) {
    alert("Close enough to the correct answer.");
}
let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
    alert(`${number} is divisible by 3.`);
} else {
    alert(`${number} is not divisible by 3.`);
}


let temperature = parseFloat(prompt("Enter temperature in Celsius:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;

if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    console.log("Invalid operation.");
}

console.log(`Result: ${result}`);









// book practic 1 to 11 chapters


// chapter 1
// alert("Hello World");

// 12345
// true
// "Anas Sheikh"



// alert("Anas");


// chapter 2

//  var fullName =" Anas Sheikh";

// alert(fullName)
// alert(fullName)

// alert(fullName)
// alert(fullName)

//  variable update

// var fullName =" Anas Sheikh";

// alert(fullName)

// fullName = "yaho"

// alert(fullName)

// camel case
// myFullName

// snack case
// my_full_name



// chapter 3

// var num = 10;
// alert(num)

// var num = 10;
// var inc = num + 10;

// alert(inc);


// var num = 20;
// num = num + 10;

// alert(num)


// var num = 20;
// alert(num + 10 + "5" + 10) 


// chapter 4

// var full_Name = "Anas";
// alert(full_Name)


// var fullName = "Anas";
// alert(fullName)

// var alert = "Anas";
// console.log(alert)

// console.log("Anas");


// chapter 5

// var num = 10;
// console.log(num + 10)

// var num = 10;
// console.log(num - 10)

// var num = 10;
// console.log(num * 10)

// var num = 10;
// console.log(num / 2)

// var num = 10;
// console.log(num % 2)


// chapter 6

// var num = 10;
// num++;
// // num = num + 1
// console.log(num)

// var num = 10;
// num--;
// // num = num + 1
// console.log(num)

// var num = 10;
// num++;
// // num = num + 1
// console.log(num++)
// console.log(num)

// var num = 10;
// num++;
// // num = num + 1
// console.log(++num)
// console.log(num)

// var num = 10;
// num++;
// // num = num + 1
// console.log(--num)
// console.log(num)


// chapter 7

// var total = 2 + 3 * 4;
// console.log(total)

// var total = (2 + 3) * 4;
// console.log(total)

// var a = 4
// var b = 3

// c = a++ - b-- + --a + a++;
// console.log(c)

// var a = 4
// var b = 3

// var c = --b + --a - ++b + a++ - --a;
// console.log(c)


// chapter 8


// var num = "2" + 2;
// console.log(num)

// var num = "2" + 2;
// console.log(typeof num)

// var firstName = "Anas";
// var lastName = "sheikh";

// // var fullName = firstName + " " + lastName;

// var fullName = "Mr." + firstName + " " + lastName + "!";

// console.log(fullName)

// document.write("<h1>" + fullName + "</h2>") 



// chapter 9

// var firstName = prompt();
// var lastName = prompt();

// var fullName = "Mr. "+ firstName + " " + lastName + "!";

// console.log(fullName)

// var firstName = prompt("Enter your firstName");
// var lastName = prompt("Enter your lastName");

// var fullName = "Mr. "+ firstName + " " + lastName + "!";

// console.log(fullName)

// var firstName = prompt("Enter your firstName" , "Anas");
// var lastName = prompt("Enter your lastName" , "Sheikh");

// var fullName = "Mr. "+ firstName + " " + lastName + "!";

// console.log(fullName) 


// chapter 10

// if(true){
//    alert("Helo Anas")
// }

// if(false){
//     alert("Helo Anas")
//  }

// var gender = prompt("Enter your Gender", "Male")

// if(gender === "Male"){
//     alert("Helo, Anas")
// }

// if(gender === "Female"){
//     alert("Helo, farah")
// }


// var gender = prompt("Enter your Gender", "Male")
// var message = "Not match";

// if(gender === "Male"){
//     message = "Helo, Anas";
// }

// if(gender === "Female"){
//     message = "Helo, farah";
// }

// alert(message)



// chapter 11

// var education = prompt("Enter your Education");

// if(education !== 'matric'){
//     console.log("Eligible")
// }

// var age = 20;
// if(age < 25){
//     console.log("Eligible")
// }

// var age = 25;
// if(age <= 25){
//     console.log("Eligible")
// }

// var age = 19;
// if(age >= 20){
//     console.log("Eligible")
// }else{
//     console.log("Not Eligible")
// }

// var lanakiyahaiapne = prompt("wahan mil kiya raha hai?");

// if(lanakiyahaiapne === "Icecreame"){
//     console.log("toh le ana")
// }

// else if(lanakiyahaiapne === "Fruitjuice"){
//     console.log("chlo le ana")
// }

// else if(lanakiyahaiapne === "mangosheik"){
//     console.log("aby yr ly ana")
// }

// else{
//     console.log("Kch bhi le ao khali hath na ana")
// }