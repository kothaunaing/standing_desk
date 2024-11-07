// Popup
const popup = _("#welcome-popup");
const closePopupButton = _("#close-welcome-popup");

popup.classList.add("opened-popup");
closePopupButton.addEventListener("click", () => {
  popup.classList.remove("opened-popup");
});
// Hero section

try {
  new Typed(".typing-text", {
    strings: [
      "Transform Your Workspace!",
      "Boost Your Productivity!",
      "Enhance Your Posture!",
      "Work in Comfort and Style!",
      "Stand Up for Better Health!",
      "A Desk for Every Task!",
      "Elevate Your Workday!",
      "Discover Ergonomic Excellence!",
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    smartBackspace: true,
    shuffle: true,
  });
} catch (error) {
  console.log(error.message);
}

// Slideshow start

const slideShowsContainer = _(".slideshow-container");

function renderSlideshows() {
  let html = "";
  const specialProducts = products.filter((product) => {
    return product?.discount;
  });

  specialProducts.forEach((slide, i) => {
    html += `
          <div class="slide fade">
            <div class="number">${i + 1} / ${specialProducts.length}</div>
            <div class="price">${getPrice(slide.price, slide?.discount)}</div>
            <img alt="${
              slide.image
            }" class="slideshow-image" src="assets/images/products/${
      slide.image
    }" />
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

// Handling swiping functionality for carousel

let touchStartX = 0;
let touchEndX = 0;

slideShowsContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
});

slideShowsContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  if (touchEndX < touchStartX - 50) {
    nextButton.click();
  } else if (touchEndX > touchStartX + 50) {
    prevButton.click();
  }
}

// Slideshow end

// Price
function getPrice(price, discount) {
  const newPrice = discount
    ? (price - price * (discount / 100)).toFixed(2)
    : price;

  const html = `
  ${
    discount
      ? `<del>$${price}</del> (-${discount}%)  $${newPrice} `
      : "$" + price
  }
  `;

  return html;
}
