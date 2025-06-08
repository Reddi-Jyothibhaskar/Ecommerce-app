const nameInput = document.getElementById("user-name");
const emailInput = document.getElementById("user-email");
const phoneInput = document.getElementById("user-phone");
const addressInput = document.getElementById("user-address");
const form = document.getElementById("profile-form");

// Load existing profile
function loadProfile() {
  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};
  nameInput.value = profile.name || "";
  emailInput.value = profile.email || "";
  phoneInput.value = profile.phone || "";
  addressInput.value = profile.address || "";
}

// Save profile
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const profile = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value
  };
  localStorage.setItem("userProfile", JSON.stringify(profile));
  alert("Profile saved successfully!");
});

loadProfile();
