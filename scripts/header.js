const closeButton = _(".close-button");
const navBar = _(".nav-bar");

function toggleMenu() {
  navBar.classList.toggle("closed");

  if (navBar.classList.contains("closed")) {
    closeButton.innerHTML = '<i class="fa fa-bars menu-icon"></i>';
  } else {
    closeButton.innerHTML = '<i class="fa fa-times close-button-icon"></i>';
  }
}

toggleMenu();

closeButton.addEventListener("click", toggleMenu);

function _(selector) {
  return document.querySelector(selector);
}

// Header end
