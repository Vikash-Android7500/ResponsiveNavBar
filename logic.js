const NavMenu = document.querySelector(".navMenu");
const hembergun = document.querySelector(".hambergun");
const NavLink = document.querySelectorAll(".navLink");

hembergun.addEventListener("click", () => {
  hembergun.classList.toggle("active");
  NavMenu.classList.toggle("active");
});

// Menu click hide
NavLink.forEach(element => {
  element.addEventListener("click", () => {
      hembergun.classList.remove("active");
      NavMenu.classList.remove("active");
  })
});
