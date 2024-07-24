// TASK-1
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// TASK-2
let tableNo = 5; 
for(let i = 1; i <= 10; i++){
    console.log(`${tableNo} x ${i} = ${tableNo*i}`);
}

// TASK-3
let i = 1, sum = 0;
while ( i != 10){
    sum += i;
    i++;
}
console.log("Sum of num 1 to 10:",sum);

// TASK-4
let j = 10;
while (i >= 1){
    console.log(i);
    i--;
}

// TASK-5
let g = 1;
do {
    console.log(g);
    g++;
} while (g <= 5);

// TASK-6
let num = 5, fac = 1;
for(i = num; i > 0; i-- ){
    fac  = fac * i; 
}
console.log(`factorial of ${num}: ${fac}`);

// TASK-7
for(let i = 1; i <= 5 ; i++){
    for(let j = 1 ; j <=i ; j++){
        document.write("*")
    }
    document.write("<br/>")
}

// TASK-8
for(let i = 1; i <= 10; i++){
    if(i == 5) continue
    else console.log(i);
}

// TASK-9
for(let i = 1; i <= 10; i++){
    if(i == 7) break;
    else console.log(i);
}