const buttonEl = document.querySelector(".btn");
// document.body.appendChild(buttonEl);
buttonEl.style.left = Math.random() * 700 + "px";
buttonEl.style.top = Math.random() * 700 + "px";

buttonEl.addEventListener("click", function(){
    window.location.assign("/");
});

