const wishlistContainer = document.getElementById("wishlist-items");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Get product details from stored wishlist ids
const wishlistProducts = products.filter(p => wishlist.includes(p.id));

function renderWishlist() {
  wishlistContainer.innerHTML = "";
  if (wishlistProducts.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlistProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="removeFromWishlist(${p.id})">Remove</button>
    `;
    wishlistContainer.appendChild(card);
  });
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(item => item !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  location.reload();
}

renderWishlist();
