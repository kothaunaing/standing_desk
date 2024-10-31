const basketsContainer = document.querySelector(".baskets-container");

function renderBaskets() {
  let html = "";

  baskets.forEach((basket) => {
    const product = getProduct(basket.id);

    html += `
    <div class="basket-container">
          <img
            class="basket-image"
            src="assets/images/${product?.image}"
            alt="${product.name}"
          />

          <div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">
             ${product.description}
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div>${basket.items}  ${basket.items > 1 ? "items" : "item"}</div>
            <button data-product-id="${basket.id}" data-items="${
      basket.items
    }" class="delete-button">Delete</button>
          </div>
    </div>
    `;
  });

  if (baskets.length === 0) {
    html = "<h1>Your basket is empty!</h1>";
  }
  basketsContainer.innerHTML = html;

  const deleteBtns = document.querySelectorAll(".delete-button");

  deleteBtns.forEach((btn) => {
    const { productId, items } = btn.dataset;

    btn.addEventListener("click", () => {
      if (items > 1) {
        const basket = getBasket(productId);
        basket.items--;
        console.log("minus");
      } else {
        deleteBasket(productId);
        console.log("delete");
      }
      console.log("other");

      renderBaskets();
      saveBasketsToLocalStorage();
    });
  });
}

renderBaskets();

function getProduct(productId) {
  let currentProduct = undefined;

  products.forEach((product) => {
    if (product.id === Number(productId)) {
      currentProduct = product;
    }
  });

  return currentProduct;
}

function getBasket(id) {
  let currentBasket;

  baskets.forEach((basket) => {
    if (id === basket.id) {
      currentBasket = basket;
    }
  });

  return currentBasket;
}

function deleteBasket(id) {
  baskets = baskets.filter((basket) => {
    return basket.id !== id;
  });
}
