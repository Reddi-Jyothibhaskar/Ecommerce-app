const cartContainer = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartProducts = cart.map(itemId => {
  return products.find(p => p.id === itemId);
});

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  if (cartProducts.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.innerText = "0";
    return;
  }

  cartProducts.forEach(p => {
    total += p.price;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="removeFromCart(${p.id})">Remove</button>
    `;
    cartContainer.appendChild(card);
  });

  totalDisplay.innerText = total;
}

function removeFromCart(id) {
  cart = cart.filter(item => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

renderCart();
