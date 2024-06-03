const sillyBody =  document.querySelector("body");
const clickedtimes  = document.querySelector(".clickedtimes")
let numClicks = 0;

sillyBody.addEventListener("click", function(){
    numClicks++;
    console.log(numClicks)
    clickedtimes.innerText = numClicks;
    if (numClicks == 204){
        clickedtimes.innerText = "too many clicks";
        window.location.assign("/");
    }
});
