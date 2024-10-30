// Header start

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

// Slideshow start
const slideShowsContainer = _(".slideshow-container");
const slideShows = [
  {
    image: "product-1.webp",
    caption: "This is good",
  },
  {
    image: "product-2.png",
    caption: "This is very good",
  },
  {
    image: "product-3.jpg",
    caption: "This is very very good",
  },
  {
    image: "product-4.webp",
    caption: "Good desk",
  },
  {
    image: "product-5.webp",
    caption: "Standing desk",
  },
];

function renderSlideshows() {
  let html = "";

  slideShows.forEach((slide, i) => {
    html += `
          <div class="slide fade">
            <div class="number">${i + 1} / ${slideShows.length}</div>
            <img alt="${
              slide.image
            }" class="slideshow-image" src="assets/images/${slide.image}" />
            <div class="caption">
              <p>${slide.caption}</p>
            </div>
          </div>
    `;
  });

  slideShowsContainer.innerHTML = `
          ${html}
         <button class="previous-button">
            <i class="fa fa-arrow-left"></i>
          </button>
          <button class="next-button">
            <i class="fa fa-arrow-right"></i>
          </button>
   `;
}

renderSlideshows();

const nextButton = _(".next-button");
const prevButton = _(".previous-button");
let slideIndex = 1;
let intervalId = undefined;
let timeoutId = undefined;

showSlides(slideIndex);
automateSlides();

nextButton.addEventListener("click", () => {
  showSlides((slideIndex += 1));
  clearInterval(intervalId);

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(automateSlides, 3000);
});

prevButton.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
  clearInterval(intervalId);

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(automateSlides, 3000);
});

function automateSlides() {
  intervalId = setInterval(() => {
    nextButton.classList.add("hover-button");
    nextButton.classList.remove("hover-button");
    nextButton.click();
  }, 3000);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
}
