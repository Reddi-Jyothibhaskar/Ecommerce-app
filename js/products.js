const productList = document.getElementById("product-list");
const searchBox = document.getElementById("search-box");
const sortOptions = document.getElementById("sort-options");
const categoryList = document.getElementById("category-list");

const categories = ["All", "home and furniture", "appliances", "food", "books", "electronics", "fashion", "mobiles", "toys"];

let filteredProducts = [...products];

// Render categories
categories.forEach(cat => {
  const li = document.createElement("li");
  li.textContent = cat;
  li.addEventListener("click", () => filterByCategory(cat));
  categoryList.appendChild(li);
});

// Render all
function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="addToWishlist(${p.id})">Wishlist</button>
    `;
    productList.appendChild(card);
  });
}
renderProducts(filteredProducts);

// Filter by category
function filterByCategory(cat) {
  if (cat === "All") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(p => p.category === cat);
  }
  renderProducts(filteredProducts);
}

// Search filter
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const result = filteredProducts.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(result);
});

// Sort
sortOptions.addEventListener("change", () => {
  let sorted = [...filteredProducts];
  if (sortOptions.value === "low-high") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortOptions.value === "high-low") {
    sorted.sort((a, b) => b.price - a.price);
  }
  renderProducts(sorted);
});

// Wishlist and Cart handlers
function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
