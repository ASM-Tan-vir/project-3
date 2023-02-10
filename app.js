const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu-sharp" ? "close" : "menu-sharp";
  navLinks.classList.toggle("top-[5%]");
}

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector("#overlay");
  const resBtn = document.querySelector("#ragistration-btn");
  const closeBtn = document.querySelector("#close-modal");

  const toggleModal = () => {
    overlay.classList.toggle("hidden");
    overlay.classList.toggle("flex");
  };

  resBtn.addEventListener("click", toggleModal);

  closeBtn.addEventListener("click", toggleModal);
});