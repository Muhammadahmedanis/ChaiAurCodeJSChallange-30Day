// TASK-1
// TASK-2
let image = document.getElementById("image");
let imageBtn =document.getElementById("imageBtn");
imageBtn && imageBtn.addEventListener("click", () => {
    if(image.style.display === "none"){
        image.style.display  = "block";
    }
    else {
        image.style.display = "none";
    }
})

// TASK-4
// TASK-5
let inp1 = document.getElementById("inp1");
inp1 && inp1.addEventListener("keypress", () => {
    console.log(inp1.value);  
})

// TASK-6
let para2 = document.getElementById("para2");
let inp2 = document.getElementById("inp2");
inp2 && inp2.addEventListener("keyup", () => {
    para2.innerText = inp2.value;
    // console.log(inp2.value);
})

// TASK-7
// TASK-8
let para = document.getElementById("para");
let dropDown =  document.getElementById("drop-down");
dropDown.addEventListener("change", (e) => {
    para.innerText = e.target.value;
    // console.log(e.target.value);
})

// TASK-9
let list  = document.getElementById("list");
list && list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") console.log(e.target.textContent);
})

// TASK-10
list  = document.getElementById("list");
list && list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") console.log(e.target.textContent);
    let crLi = document.createElement("li");
    liText = document.createTextNode("July");
    crLi.appendChild(liText);
    document.body.appendChild(crLi);
})