// === CONFIG ===
const WHATSAPP_NUMBER = "2349132689706"; // Lolly Africa WhatsApp
const STORAGE_KEY = "lolly_cart_v1";

// === PRODUCTS ===
const products = [
  { id: 1,  name: "Premium Long Grain Rice", unit: "5kg bag", price: 12500, emoji: "🍚", cat: "grains", tag: "Bestseller" },
  { id: 2,  name: "Local Brown Beans",       unit: "2kg",     price: 4800,  emoji: "🫘", cat: "grains" },
  { id: 3,  name: "Garri Ijebu",             unit: "4 cups",  price: 2200,  emoji: "🥣", cat: "grains" },
  { id: 4,  name: "Yellow Garri",            unit: "4 cups",  price: 2000,  emoji: "🥣", cat: "grains" },
  { id: 5,  name: "Pure Palm Oil",           unit: "5 litres",price: 9500,  emoji: "🛢️", cat: "oils", tag: "Fresh" },
  { id: 6,  name: "Groundnut Oil",           unit: "5 litres",price: 11000, emoji: "🫗", cat: "oils" },
  { id: 7,  name: "Dried Pepper (Ata Gungun)", unit: "500g", price: 3500,  emoji: "🌶️", cat: "oils" },
  { id: 8,  name: "Curry & Thyme Pack",      unit: "Combo",   price: 1500,  emoji: "🧂", cat: "oils" },
  { id: 9,  name: "Fresh Tomatoes",          unit: "Basket",  price: 4500,  emoji: "🍅", cat: "fresh" },
  { id: 10, name: "Sweet Plantain",          unit: "Bunch",   price: 3000,  emoji: "🍌", cat: "fresh" },
  { id: 11, name: "Ugu (Pumpkin Leaves)",    unit: "Bundle",  price: 1200,  emoji: "🥬", cat: "fresh" },
  { id: 12, name: "Fresh Pepper Mix",        unit: "1kg",     price: 2500,  emoji: "🌶️", cat: "fresh" },
  { id: 13, name: "Frozen Chicken",          unit: "1kg",     price: 5500,  emoji: "🍗", cat: "protein", tag: "New" },
  { id: 14, name: "Smoked Catfish",          unit: "Medium",  price: 3800,  emoji: "🐟", cat: "protein" },
  { id: 15, name: "Crate of Eggs",           unit: "30 pcs",  price: 6500,  emoji: "🥚", cat: "protein" },
  { id: 16, name: "Beef (Fresh Cut)",        unit: "1kg",     price: 7000,  emoji: "🥩", cat: "protein" },
  { id: 17, name: "Plantain Chips",          unit: "Pack",    price: 800,   emoji: "🍟", cat: "snacks" },
  { id: 18, name: "Chapman Drink",           unit: "1 litre", price: 1800,  emoji: "🥤", cat: "snacks" },
  { id: 19, name: "Zobo Drink",              unit: "1 litre", price: 1500,  emoji: "🍹", cat: "snacks" },
  { id: 20, name: "Agege Bread",             unit: "Family",  price: 1500,  emoji: "🍞", cat: "bakery" },
  { id: 21, name: "Sliced Wheat Loaf",       unit: "700g",    price: 2200,  emoji: "🥖", cat: "bakery" },
  { id: 22, name: "Meat Pie",                unit: "Pack of 4", price: 2800, emoji: "🥟", cat: "bakery" },
];

// === STATE ===
let cart = loadCart();
let activeCat = "all";

// === HELPERS ===
function loadCart() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function saveCart() { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
function fmt(n) { return "₦" + n.toLocaleString("en-NG"); }

// === RENDER PRODUCTS ===
const grid = document.getElementById("productGrid");
function renderProducts() {
  const list = activeCat === "all" ? products : products.filter(p => p.cat === activeCat);
  grid.innerHTML = list.map(p => `
    <article class="card">
      <div class="card-img">
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ""}
        <span class="emoji">${p.emoji}</span>
      </div>
      <div class="card-body">
        <div>
          <div class="card-name">${p.name}</div>
          <div class="card-unit">${p.unit}</div>
        </div>
        <div class="card-foot">
          <span class="card-price">${fmt(p.price)}</span>
          <button class="add-btn" data-id="${p.id}" aria-label="Add ${p.name}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".add-btn").forEach(b => {
    b.addEventListener("click", () => addToCart(+b.dataset.id));
  });
}

// === CATEGORY FILTER ===
document.querySelectorAll(".chip").forEach(c => {
  c.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(x => x.classList.remove("active"));
    c.classList.add("active");
    activeCat = c.dataset.cat;
    renderProducts();
  });
});

// === CART LOGIC ===
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart(); renderCart();
  const p = products.find(p => p.id === id);
  showToast(`${p.name} added to cart`);
}
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); renderCart();
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); renderCart();
}

// === RENDER CART ===
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartFootEl  = document.getElementById("cartFoot");
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");

function renderCart() {
  const items = cart.map(c => ({ ...c, ...products.find(p => p.id === c.id) }));
  const totalQty = items.reduce((s,i) => s + i.qty, 0);
  const total = items.reduce((s,i) => s + i.qty * i.price, 0);

  cartCountEl.textContent = totalQty;
  cartCountEl.style.display = totalQty ? "grid" : "none";
  cartTotalEl.textContent = fmt(total);

  if (!items.length) {
    cartItemsEl.style.display = "none";
    cartFootEl.style.display = "none";
    cartEmptyEl.style.display = "flex";
    return;
  }
  cartItemsEl.style.display = "flex";
  cartFootEl.style.display = "block";
  cartEmptyEl.style.display = "none";

  cartItemsEl.innerHTML = items.map(i => `
    <div class="cart-item">
      <div class="cart-item-img">${i.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">${fmt(i.price * i.qty)}</div>
        <button class="remove" data-rm="${i.id}">Remove</button>
      </div>
      <div class="qty">
        <button data-dec="${i.id}" aria-label="Decrease">−</button>
        <span>${i.qty}</span>
        <button data-inc="${i.id}" aria-label="Increase">+</button>
      </div>
    </div>
  `).join("");

  cartItemsEl.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => changeQty(+b.dataset.inc, 1));
  cartItemsEl.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => changeQty(+b.dataset.dec, -1));
  cartItemsEl.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => removeFromCart(+b.dataset.rm));
}

// === DRAWER ===
const drawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("cartOverlay");
function openCart() {
  drawer.classList.add("open"); overlay.classList.add("open");
  document.body.classList.add("no-scroll");
}
function closeCart() {
  drawer.classList.remove("open"); overlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
}
document.getElementById("cartBtn").onclick = openCart;
document.getElementById("closeCart").onclick = closeCart;
overlay.onclick = closeCart;

// === WHATSAPP CHECKOUT ===
document.getElementById("checkoutBtn").onclick = () => {
  if (!cart.length) return;
  const items = cart.map(c => ({ ...c, ...products.find(p => p.id === c.id) }));
  const total = items.reduce((s,i) => s + i.qty * i.price, 0);

  const lines = items.map(i => `- ${i.name} x${i.qty} = ${fmt(i.price * i.qty)}`).join("\n");
  const message =
    `Hello Lolly Africa, I want to place an order:\n\n${lines}\n\nTotal: ${fmt(total)}\n\nPlease confirm availability and delivery. Thank you!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

// === TOAST ===
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// === NAVBAR SCROLL ===
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// === INIT ===
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
