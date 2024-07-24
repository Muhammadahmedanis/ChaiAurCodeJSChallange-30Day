// Task-1
let name = "Hadi";
let age = 21;
const str = `my name ${name} and i am ${age} years old`; 
console.log(str);

// Task-2
let fullName = "Abdul Hadi";
let title = "Developer";
console.log(`${fullName} and ${title}`);

// Task-3
let arr = ["Apple", "Orange", "Banana"]
let [a, b, c] = arr;
console.log(a, b, c);

// Task-4
let book = {
    bookName: "Great war",
    author: "Allama Iqbal",
    publishYear: 1967,  
}
let {bookName, author} =  book 
console.log(bookName, author);

// Task-5
let arr2 = ["Ali", 19, true]
console.log([...arr2, "Deeloper", "man"]);

// Task-6
let fun = (...num) => {
    return num.reduce((accu, currVal) => accu + currVal ,0);
}
console.log(fun(1, 2, 3));

let f = [1, 2, 3];
let q = f.reduce((accu, currVal) => {return accu + currVal}, 0);
console.log(q);

// Task-7
let fun2 = (x) => {
    return x*y;
}
console.log(fun2(3, 4));

// Task-8
let bookTitle = "Key points";
let bookAuthor = "Mirza Ghalib";


const data = {
    bookTitle,
    bookAuthor,
    getVal(a){
        console.log(a); 
    }    
}
console.log(data);
data.getVal(10);

// Task-9
const personAge = 'age';
const person = {
    name: "Hadi",
    [personAge]: 21,
}
console.log(person);