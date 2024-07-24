// TASK-1
let objBook = {
    title: "Good habits",
    Author: "Alla Iqbal",
    publishedYear: 1978 
}
console.log(objBook);

// TASK-2
console.log(objBook.title);
console.log(objBook.Author);
console.log(objBook.publishedYear);

// TASK-3
obj = {
    title: "Good habits",
    Author: "Alla Iqbal",
    publishedYear: 1978,
    getal: function() {
        return `${this.title} by ${this.Author}`;
    }
}
console.log(obj.getal());

// TASK-4
obj = {
    title: "Good habits",
    Author: "Alla Iqbal",
    publishYear: 1978,
    updYear(year) {
        this.publishYear = year;
    }
}
console.log(obj);
obj.updYear(1999);
console.log(obj);


// TASK-5
let lib = {
    name: "Sky",
    book: [
        {title: "danger", publish: 1967},
        {title: "paradime", publish: 1947},
        {title: "heaven", publish: 1978},
    ]
}
console.log(lib);
// TASK-6
console.log(lib.name);
console.log(lib.book);
lib.book.forEach((val) => {
    console.log(val.title);
})

// TASK-7
obj = {
    title: "Goof habits",
    publishYear: 1978,
    get: function () {
        return `${this.title} by ${this.publishYear}`;
    }
}
console.log(this.obj.get());

// TASK-8
obj = {
    title: "7 Wonders in the world",
    author: "Shakespere",
    publishYear: 1945,
}
for(let key in obj){
    console.log(key,':',obj[key]);
}

// TASK-9
obj = {
    title: "7 Wonders in the world",
    author: "Shakespere",
    publishYear: 1945,
}
let a = Object.keys(obj);
for(let key in a ){
    console.log(a[key]);
}
let b = Object.values(obj);
for(let key in b){
    console.log(b[key]);
}