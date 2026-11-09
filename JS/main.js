const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
  });
}
const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();//da el año solito
