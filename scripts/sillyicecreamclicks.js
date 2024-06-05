const sillyBody = document.querySelector("body");
const clickWrapper = document.querySelector(".click-wrapper");
let numClicks = 0;
let clickedcircle = document.createElement("div");
let counter = document.createElement("div");

sillyBody.addEventListener("click", function () {
    numClicks++;
    let clickedtimes = document.querySelector(".clickedtimes")
    console.log(numClicks)
    clickedtimes.innerText = numClicks;
    if (numClicks == 204) {
        clickedtimes.innerText = "too many clicks";
        window.location.assign("/");
    }
});

clickedcircle.classList.add("bigcircle");
counter.classList.add("clickedtimes");

clickedcircle.appendChild(counter);

clickWrapper.appendChild(clickedcircle);
