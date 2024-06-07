const buttonEl = document.querySelector(".btn");
// document.body.appendChild(buttonEl);
buttonEl.style.left = Math.random() * 700 + "px";
buttonEl.style.top = Math.random() * 700 + "px";

buttonEl.addEventListener("click", function(){
    window.location.assign("/");
});

let colorArr = ["darkred", "darkorange", "gold", "darkseagreen", "cadetblue", "darkslateblue", "darkviolet"]
const bgColor = document.querySelector("body");

document.body.style.background = colorArr[Math.floor(Math.random()*colorArr.length)];
document.body.appendChild(bgColor);