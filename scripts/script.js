// JavaScript Document
console.log("hi");

const button = document.querySelector("nav > button");

button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
});

const carousel = document.querySelector('.carousel ul');

carousel.addEventListener('scroll', () => {
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
    }
});

