const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const btnBTT = document.querySelector(".fa-circle-arrow-up");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");

    menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
    windowPosition = window.scrollY > 300;
    btnBTT.classList.toggle("hidden", !windowPosition);
});

