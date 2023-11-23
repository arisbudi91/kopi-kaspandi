// Toggle class active untuk hamburger menu
const NavbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  NavbarNav.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen untuk menghilangkan
const hamburger = document.querySelector("#hamburger-menu");
const search = document.querySelector("#search-button");
const cart = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !cari.contains(e.target)) {
    cari.classList.remove("active");
  }
  if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  // if (
  //   !itemDetailButton.contains(e.target) &&
  //   !itemDetailButton.contains(e.target)
  // ) {
  //   itemDetailModal.style.display = "none";
  // }
});

// Toggle class active untuk search form
const cari = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

// Ketika tombol search di klik
document.querySelector("#search-button").onclick = (e) => {
  cari.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

// Ketika icon cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Close Modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Close Modal diluar konten
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
