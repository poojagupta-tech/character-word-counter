var btn = document.querySelector("button");
var area = document.querySelector("#area");
var h5 = document.querySelector("h5");
var h6 = document.querySelector("h6");


btn.addEventListener("click",function(){

let text = area.value;
let character = text.length;
  let words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

h5.textContent = `Characters: ${character}`;
h6.textContent = `Words: ${words}`;
});


















