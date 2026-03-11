function updateScore(){

let checks = document.querySelectorAll("input[type=checkbox]");
let checked = document.querySelectorAll("input[type=checkbox]:checked");

let percent = Math.round((checked.length/checks.length)*100);

document.getElementById("result").innerText = percent + "%";

}
