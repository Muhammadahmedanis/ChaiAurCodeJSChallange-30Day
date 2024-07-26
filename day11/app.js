// TASK-1
let getData = () => {
    return new Promise((resolve, reject) => {
        resolve("Ok")
    })
}
let getVal = () => {
    setTimeout(() => {
        let a = getData();
        a
        .then(res => console.log(res))
        .catch(err => console.log("error", err))
    }, 2000)
}
getVal()

// TASK-2
let getData2 = () => {
    return new Promise((resolve, reject) => {
        reject("error")
    })
}
let getVal2 = () => {
    setTimeout(() => {
        let b = getData2();
        b
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, 2000)
}
getVal2()


// TASK-3

// TASK-4
let getData3 = async() => {
    return new Promise((resolve, reject) => {
        resolve("fine")
        reject("error")
    })
}
let getVal3 = async() => {
    try {        
        let c = await getData3();
        console.log(c);
    } catch (error) {
        console.log(error);
    }
}
getVal3();


// TASK-5
let getData4 = async() => {
    return new Promise((resolve, reject) => {
        reject("error")
    })
}
let getVal4 = async() => {
    try {        
        let c = await getData4();
        console.log(c);
    } catch (error) {
        console.log(error);
    }
}
getVal4();


// TASK-6
let getData5 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) =>{
            resolve((res.json()))
        })
        .catch((err) => reject(err))
    })
}
let getVal5 = () => {
    let result = getData5();
    result
    .then(data => console.log(data))
    .catch(err => console.log("err"))
}
// getVal5()


// TASK-7
let getData6 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then(async(res) =>{
            resolve(await (res.json()))
        })
        .catch((err) => reject(err))
    })
}
let getVal6 = async() => {
    try {
        let r = await getData6();
        console.log(r);
    } catch (error) {
        console.log(error);
    }
}
// getVal6()


// TASK-8
let getData7 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then(async(res) => {
            resolve(await (res.json()))
        })
        .catch((e) => {reject(e)})
    })
}
let getData8 = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(async(res) => {
            resolve(await (res.json()))
        })
        .catch((err) => reject("err"))
    })
} 

let getVal7 = async() => {
    try {
        let promiseArr = [];
        promiseArr.push(getData7(), getData8());
        let final = await Promise.all(promiseArr);
        console.log(final);
    } catch (error) {
        console.log(error);
    }
}
// getVal7()

// TASK-9
let getData9 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            fetch('https://fakestoreapi.com/products')
            .then(async(res) => {
                resolve(await (res.json()))
            })
            .catch((e) => {reject(e)})
        }, 2000)
    })
}
let getData10 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products/categorie')
            .then(async(res) => {
                resolve(await (res.json()))
            })
            .catch((err) => reject("err2"))
        }, 1000)
    })
} 

let getVal8 = async() => {
    try {
        let final = await Promise.race([getData9(), getData10()]);
        console.log(final);
    } catch (error) {
        console.log(error);
    }
}
getVal8()