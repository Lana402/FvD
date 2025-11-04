/*Copilot, Prompt:Expandable dropdown menu */
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-button");
  const menuContainer = document.querySelector("#menu-container");
  const closeBtn = document.querySelector(".close-icon");


  menuButton.addEventListener("click", () => {
    menuContainer.classList.add("active");
    menuButton.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    menuContainer.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";

    /*Copilot, Prompt: Slide-down animation*/
    const menu = document.getElementById('menu-container');
    const toggleButton = document.getElementById('menu-toggle');

    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    

  });
});