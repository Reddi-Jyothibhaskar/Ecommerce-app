// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Sample featured products (can be fetched from localStorage or data folder later)
const featuredProducts = [
  { name: "Modern Sofa", price: 2999, image: "assets/images/sofa.jpg" },
  { name: "Smartphone", price: 15999, image: "assets/images/oppo.jpeg" },
  { name: "Bluetooth Speaker", price: 1999, image: "assets/images/speakers.jpeg" },
  { name: "Wrist Watch", price: 999, image: "assets/images/watch.jpeg" },
  { name: "Kitchen Mixer", price: 2499, image: "assets/images/mixer.jpeg" },
];

const container = document.getElementById("featured-products");

featuredProducts.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
  `;
  container.appendChild(card);
});
