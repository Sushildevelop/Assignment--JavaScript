let var1 = document.createElement("h1")
var1.innerText = "hello World"
document.body.appendChild(var1)

let par = document.getElementById("text")
let button = document.getElementById("btn")

button.addEventListener("click", () => {
    par.innerText = "Java is a Object Oriented Programming Language"
})