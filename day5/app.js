// TASK-1
let fun1 = (a) => {
    return a % 2 == 0 ? "Een" : "Odd";
}
console.log(fun1(3));

// TASK-2
let fun2 = (b) => {
    return b*b;
}
console.log(fun2(2));

// TASK-3
let fun3 = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}
console.log(fun3(13, 5));

// TASK-4
let fun4 = (str1, str2) => {
    // return str1 + str2
    return str1.concat(str2);
}
console.log(fun4("Good", "Night"));

// TASK-5
let fun5 = (x,y) => {
    return x + y;
}
console.log(fun5(3,6));

// TASK-6
let fun6 = (spChar) => {
    return spChar.charCodeAt(0) >= 65 && spChar.charCodeAt(0) < 91 || spChar.charCodeAt(0) >= 97 && spChar.charCodeAt(0) < 122 ? true : false;
}
console.log(fun6("!"));

// TASK-7
let fun7 = (q, w = 8) => {
    return q * w;
}
console.log(fun7(3,4));

// TASK-8
let fun8 = (name, age) => {
    return `Welcome ${name} to my page`
}
console.log(fun8("Ali", 21));

// TASK-9
let fun9 = () => {

}

// TASK-10
let fun10 = (p) => {
    return fun11(p)
}
let fun11 = () => {

}
console.log(fun10(12));





