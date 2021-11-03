const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");
const conetentEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName("span");


function toggleNav () {
    navTriggerEl.addEventListener("click", function() {
        navEl.classList.toggle("open")
        conetentEl.classList.toggle("shift")
        hamburgerX()
    })
}

function hamburgerX (){
    for (let item of hamburgerBarsEl){
        item.classList.toggle("change")
    }
}
toggleNav();