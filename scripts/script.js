// JavaScript Document
console.log("hi");

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("nav button");
    const menu = document.getElementById("main-menu");

    menuButton.addEventListener("click", () => {
        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!expanded));
    });

    const carousel = document.querySelector('.carousel ul');
     carousel.addEventListener('scroll', () => {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
            carousel.scrollLeft = 0;
        }
    });
});
   