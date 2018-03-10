// var left = document.getElementById("color1").addEventListener("change",function(){
    //get changed color
//     document.getElementsByTagName("body").
// });
// var right = document.getElementById("color2").addEventListener("change",function(){
//     console.log("changed!");
// });
// var left = document.getElementsByName("color2");

// console.log(right);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);