const accendiButtonEl = document.getElementById("accendi-btn");

const yellowLamp = document.getElementById("yellow-lamp");
const whiteLamp = document.getElementById("white-lamp");

accendiButtonEl.addEventListener("click", function(){
    yellowLamp.classList.add("active");
    whiteLamp.classList.add("active");
});