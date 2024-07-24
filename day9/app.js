// TASK-1
let getName = document.getElementById("head");
getName.innerText = "By class"

// TASK-2
let bgColor = document.getElementsByClassName("bgColor");
bgColor[0].style.background = "pink";

// TASK-3
let crContainer = document.createElement("div");
let containerText = document.createTextNode("World");
crContainer.appendChild(containerText);
document.body.appendChild(crContainer);

// TASK-4
let list = document.getElementById("list");
let crLi = document.createElement("li");
let liText = document.createTextNode("Tuesday");
crLi.appendChild(liText);
list.appendChild(crLi);

// TASK-5
list.firstElementChild.remove();

// TASK-6
let getAllPara = document.getElementById("getAllPara");
getAllPara.lastElementChild.remove()

// TASK-7
let image = document.getElementById("image");
image.addEventListener("mouseover", () => {
    image.src = "https://img.freepik.com/free-vector/happy-pakistan-day-hand-drawn_23-2148846041.jpg?size=626&ext=jpg&ga=GA1.1.506587914.1717573383&semt=sph";
})


// TASK-8
let chgClass = document.getElementById("chgClass");
chgClass.addEventListener("mouseover", () => {
    chgClass.classList.add("a")
})
chgClass.addEventListener("mouseout", () => {
    chgClass.classList.remove("a")
})

// TASK-9
let changeText = document.getElementById("clk");
let para = document.getElementById("para");
changeText && changeText.addEventListener("click", () => {
    para.innerText = "empty....."
})

// TASK-10
let chgColor = document.getElementById("chgColor");
chgColor && chgColor.addEventListener("mouseover", () => {
    chgColor.style.borderColor = "red";
})
chgColor && chgColor.addEventListener("mouseout", () => {
    chgColor.style.borderColor = "black";
})


