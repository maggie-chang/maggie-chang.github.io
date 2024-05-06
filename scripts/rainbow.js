let colorArr = ["darkred", "darkorange", "gold", "darkseagreen", "cadetblue", "darkslateblue", "darkviolet"]
let cat = document.createElement("ul");

for (let i = 0; i < colorArr.length; i++){
    let li = document.createElement("li");
    li.innerText = colorArr[i];
    li.style.color = colorArr[i];
    cat.appendChild(li);
}

document.body.appendChild(cat);