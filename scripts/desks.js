const productsContainer = _(".products-container");
const timeoutIds = [];

function _(selector) {
  return document.querySelector(selector);
}

function updateBasketCounts() {
  let counts = 0;

  baskets.forEach((item) => {
    counts += item.items;
  });
  const basketCounts = _(".basket-counts");
  basketCounts.innerText = counts;
}

updateBasketCounts();

function renderProducts(products) {
  let html = "";

  _(".product-counts").innerText =
    "Found " +
    products.length +
    (products.length > 0 ? " products" : " product");

  products.forEach((product) => {
    html += `
          <div class="product-container">
              <div class="price">${getPrice(
                product.price,
                product?.discount
              )} </div>
              <div class="image-container"
              >
                <img alt="${
                  product.name
                }" class="product-image" src="assets/images/products/${
      product.image
    }" />
              </div>
  
              <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${getButton(
                  product.description,
                  40
                )}</div>
 
                <div class="selection-container">
                  <select>
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    
                  </select>
                </div>

                  <div class="button-container"> 
                  <button class="add-button" data-product-id="${
                    product.id
                  }">Add to basket</button>
                </div>
              </div>
            </div>
          `;
  });

  productsContainer.innerHTML = html;

  const buyBtns = document.querySelectorAll(".add-button");

  buyBtns.forEach((btn, index) => {
    const { productId } = btn.dataset;
    btn.addEventListener("click", () => {
      const selectedValue = Number(
        btn.parentElement.previousElementSibling.children[0].value
      );

      let matchingProduct;
      btn.classList.add("added");

      if (timeoutIds[index]) {
        clearTimeout(timeoutIds[index]);
      }

      timeoutIds[index] = setTimeout(() => {
        btn.classList.remove("added");
      }, 3000);

      baskets.forEach((item) => {
        if (item.id === productId) {
          matchingProduct = item;
        }
      });

      if (matchingProduct) {
        matchingProduct.items += selectedValue;
      } else {
        baskets.push({
          id: productId,
          items: selectedValue,
        });
      }

      updateBasketCounts();
      saveBasketsToLocalStorage();
    });
  });

  const seemoreBtns = document.querySelectorAll(".see-more-button");

  seemoreBtns.forEach((btn) => {
    const text = btn.dataset.text;
    const description = btn.previousElementSibling;
    btn.addEventListener("click", () => {
      btn.classList.toggle("see-more");

      if (btn.classList.contains("see-more")) {
        btn.textContent = "See less";
        description.textContent = text;
      } else {
        btn.textContent = "See more";
        description.textContent = getShort(text, 40);
      }
    });
  });
}

renderProducts(products);

// Search feature

const searchButton = _("#search-button");
const searchInput = _("#search-input");

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value;
  searchProducts(keyword);
});

searchButton.addEventListener("click", () => {
  const keyword = searchInput.value;
  searchProducts(keyword);
});

function searchProducts(keyword) {
  if (!keyword.trim()) return;

  const newProducts = products.filter((product) => {
    let found = false;

    if (
      product.name
        .toLowerCase()
        .includes(keyword.trim().toLowerCase().trim()) ||
      product.description
        .toLocaleLowerCase()
        .includes(keyword.trim().toLowerCase())
    ) {
      found = true;
    }

    return found;
  });

  renderProducts(newProducts);
}

// shorten text
function getButton(text, length = 20) {
  return `
  <span>${getShort(text, length)}</span>
  ${
    text.length > length
      ? `<a data-text='${text}' class='see-more-button'>See more</a>`
      : ""
  }
  `;
}

function getShort(text, length = 20) {
  return `${text.slice(0, length)}...`;
}

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
