const accendiButtonEl = document.getElementById("accendi-btn");

const yellowLamp = document.getElementById("yellow-lamp");
const whiteLamp = document.getElementById("white-lamp");
const spegniButtonEl = document.getElementById("spegni-btn");

accendiButtonEl.addEventListener("click", function(){
    yellowLamp.classList.add("active");
    whiteLamp.classList.add("active");
    spegniButtonEl.classList.add("active");
    accendiButtonEl.classList.add("active");
});

spegniButtonEl.addEventListener("click", function(){
    accendiButtonEl.classList.remove("active");
    whiteLamp.classList.remove("active");
    yellowLamp.classList.remove("active");
    spegniButtonEl.classList.remove("active");

});