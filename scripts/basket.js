const basketsContainer = document.querySelector(".baskets-container");
const orderSummary = document.querySelector(".order-summary");

function renderOrderSummary() {
  const calculation = calculateAll();

  const html = `
         <table>
          <tr>
            <th>Subtotal</th>
            <td>$${calculation.total.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Taxes (0.5%)</th>
            <td>$${calculation.tax.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Discounts (5%)</th>
            <td>$${calculation.discount.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Shopping</th>
            <td>${calculation.items} ${calculation.items > 1 ? "items" : "item"}
            </td>
          </tr>
        </table>
        <hr />
        <div>
          <div>TOTAL</div>
          <div>$${(
            calculation.total +
            calculation.tax -
            calculation.discount
          ).toFixed(2)}</div>
        </div>  
  `;

  orderSummary.innerHTML = html;
}

function calculateAll() {
  let items = 0;
  let total = 0;

  baskets.forEach((basket) => {
    const product = getProduct(basket.id);

    items += basket.items;
    total = total + basket.items * getPrice(product.price, product?.discount);
  });

  const tax = total * 0.005;
  const discount = total * 0.05;

  return {
    items,
    total,
    tax,
    discount,
  };
}

renderOrderSummary();

function renderBaskets() {
  let html = "";

  baskets.forEach((basket) => {
    const product = getProduct(basket.id);

    html += `
    <div class="basket-container">
          <img
            class="basket-image"
            src="assets/images/products/${product?.image}"
            alt="${product.name}"
          />

          <div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">
             ${product.description}
            </div>
            <div class="product-price"> ${getOriginalPrice(
              basket.items,
              product.price,
              product?.discount
            )} $${(
      getPrice(product.price, product?.discount) * basket.items
    ).toFixed(2)}</div>
            <div>${basket.items}  ${basket.items > 1 ? "items" : "item"} 
            <button data-product-id="${basket.id}" data-items="${
      basket.items
    }" title="Decrease items"  class="decrease-button">-</button>
           <button data-product-id="${basket.id}" data-items="${
      basket.items
    }" title="Increase items" class="increase-button">+</button>
    
    </div>
            <button data-product-id="${basket.id}" data-items="${
      basket.items
    }" class="delete-button">Delete</button>
          </div>
    </div>
    `;
  });

  if (baskets.length === 0) {
    html = `<div>
    <h1>Your basket is empty!</h1>
    <a href="desks.html">Shop Now</a>
    </div>
    `;
  }
  basketsContainer.innerHTML = html;
}

basketsContainer.addEventListener("click", (event) => {
  const { target } = event;

  const { productId, items } = target.dataset;

  if (!productId) return;

  const basket = getBasket(productId);

  if (target.classList.contains("delete-button")) {
    deleteBasket(productId);
  } else if (target.classList.contains("increase-button")) {
    basket.items++;
  } else if (target.classList.contains("decrease-button")) {
    if (!(items > 1)) {
      return;
    }

    basket.items--;
  }

  renderBaskets();
  saveBasketsToLocalStorage();
  renderOrderSummary();
});

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

function getPrice(price, discount) {
  const newPrice = discount
    ? (price - price * (discount / 100)).toFixed(2)
    : price;

  return newPrice;
}

function getOriginalPrice(items, price, discount) {
  const oldPrice = (items * price).toFixed(2);

  if (discount) {
    return `
    <del>$${oldPrice}</del>
    <span>(-${discount}%)</span>
    `;
  } else {
    return "";
  }
}
