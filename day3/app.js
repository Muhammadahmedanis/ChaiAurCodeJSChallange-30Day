// TASK-1
let checkNum = -10;
if(checkNum == 0){
    console.log('num is:', checkNum);
}
else if (checkNum > 0){
    console.log("num is +ve greater than zero:", checkNum);
}
else{
    console.log("num is -ve:", checkNum);
}

// TASK-2
let userAge = 14;
if(userAge >= 18){
    console.log("Eligible to vote");
}
else {
    console.log("not eligible to vote");
}

// TASK-3
let num1 = 33, num2 = 16, num3 = 9;
if(num1 > num2 && num1 > num3){
    console.log("num1 is greater:", num1);
}
else if(num2 > num3 && num2 > num1){
    console.log("num2 is greater:", num2);
}
else {
    console.log("num3 is greater:", num3);
}

// TASK-4
let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break; 

    default:
        break;
}

// TASK-5

let score = +prompt('Enter num');
if(score >= 80){
    grade = "A"
}
else if(score >= 70){
    grade = "B"
}
else if(score >= 60){
    grade = "C"
}
else if(score >= 60){
    grade ="D"
}
else if(score >= 50){
    graade = "E"
}
else {
    grade = "F"
}

switch (grade) {
    case "A":
        console.log("A grade");
        break;
    case "B":
        console.log("B grade");
        break;
    case "C":
        console.log("C grade");
        break;
    case "D":
        console.log("D grade");
        break;

    default:
        console.log("F grade");
        break;
}

// TASK-6
let checkEvenOdd = 11;
let result = checkEvenOdd % 2 == 0 ? "even num" : "odd num";
console.log(result);

// TASK-7
let checkLeapYear = 2000;
if(checkLeapYear % 4 == 0){
    console.log("leap year");
}
else if(checkLeapYear % 400 == 0){
    console.log("leap year");
}
else {
    console.log("not leap year");
}





