// TASK-1
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// TASK-2
arr1 = [1, 2, 3, 4, 5];
console.log(arr1[0]);
console.log(arr1[arr1.length-1]);

// TASK-3
let arr2 = ["Apple", "Mango", "Orange"]
arr2.push("Banana");
console.log(arr2);

// TASK-4
arr2 = ["Apple", "Mango", "Orange"]
arr2.pop();
console.log(arr2);

// TASK-5
arr2 = ["Apple", "Mango", "Orange",]
arr2.shift();
console.log(arr2);

// TASK-6
arr2 = ["Apple", "Mango", "Orange",]
arr2.unshift("Graps");
console.log(arr2);

// TASK-7
let arr3 = [2, 4, 6, 8];
let result = arr3.map((val) => {
    return val*2;
})
console.log(result);

// TASK-8
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result2 =  arr4.filter((val) => {
    return val % 2 == 0
})
console.log(result2);

// TASK-9
let arr5 = [10, 20, 30, 40, 50];
let result3 = arr5.reduce((accumalotor, currVal) => {
    return accumalotor + currVal;
},0)
console.log(result3);

// TASK-10
let arr6 = [10, 20, 30, 40, 50];
for(let i = 0; i < arr6.length; i++){
    console.log(arr6[i]);
}

// TASK-11
let arr7 = [11, 22, 33, 43, 55];
arr7.forEach((val) => {
    console.log(val);
})

// TASK-12
// let arr8 = [1,2,3,4];
// for(var i = 0; i < 2; i++){
//     for(var j = 0; j < 2;j++){
//         document.write(arr8[i][j] + " ");
//     }
// }
// TASK-13


