// TASK-1
let a = 0
let fun = (a) => {
    if(!a){
        throw Error("not defined");
    }
    return `not get ${a}`
}
let getal = () => {
    try {
        let res = fun(a);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
getal()


// TASK-2
let fun2 = (x, y) => {
    let res = x % y;
    if(res == 0){
        throw Error(`null value ${res}`)
    }
    return `value is ${res}`
}
let getVal2 = () => {
    try {
        let res = fun2(6, 2)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
getVal2()


// TASK-3

// TASK-4

// TASK-5
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let fun4 = (user) => {
    if(user.trim().length != 0 && user.startsWith("a")){
        return `${user}`
    }

    throw Error("not valid name")
}

let getVal3 = () => {
    try {
        let res2 = fun4(inp.value)
        console.log(res2);
    } catch (error) {
        console.log(error);
    }
}
btn && btn.addEventListener("click", getVal3);

// TASK-6
let getData1 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            resolve(res.json())
        })
        .catch(err  => reject(err))
    })
}
let getData2 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => {
            resolve(await (res.json()))
        })
        .catch(err  => reject(err))
    })
}


let result = Promise.any([getData1(), getData2()]);
result
.then(res => console.log(res))
.catch(err => console.log(err))


// TASK-7
let getData3 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then(async(res) => {
            resolve(await (res.json()))
        })
        .catch(err  => reject(err))
    })
}
let getData4 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(async(res) => {
            resolve(await (res.json()))
        })
        .catch(err  => reject(err))
    })
}


let getAnyData = async() => {
    try {
        let result = await Promise.any([getData3(), getData4()]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getAnyData()