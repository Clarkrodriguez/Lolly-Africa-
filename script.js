// ============================================================
// LOLLY AFRICA
// ============================================================

const WHATSAPP_NUMBER = "2349132689706";
const STORAGE_KEY = "lolly_cart_v1";
const CUSTOMER_KEY = "lolly_customer_v1";
const DELIVERY_FEE = 1500;
const FREE_DELIVERY_THRESHOLD = 20000;
const MIN_ORDER = 5000;

// === PRODUCTS (add `desc` for richer detail view) ===
const products = [
  { id: 1,  name: "Aeroplane Basmati Rice", unit: "5kg bag", price: 20000, emoji: "🍚", image:"IMG_5862.jpeg", cat: "grains", tag: "Bestseller", desc: "Premium parboiled long-grain rice. Cooks evenly, perfect for jollof, fried rice and party servings." },
  { id: 2,  name: "Aeroplane Basmati Rice",       unit: "1kg",     price: 4500,  emoji: "🫘", cat: "grains", tag: "New", desc: "Sweet brown beans, hand-cleaned and ready to cook. Great for moi moi, akara and porridge." },
  { id: 3,  name: "Aani Basmati Rice",             unit: "5kg",  price: 23000,  emoji: "🥣", cat: "grains", desc: "Authentic Ijebu garri — sour, fine and crunchy. Perfect for soaking or eba." },
  { id: 4,  name: "Khumbs Golden Sella Pure Basmati Rice",            unit: "5kg",  price: 24000,  emoji: "🥣", cat: "grains", desc: "Smooth yellow garri made from fresh cassava. Ideal for eba and snacks." },
  { id: 5,  name: "Royal india basmati rice",           unit: "5kg",price: 23000,  emoji: "🛢️", cat: "grains", tag: "Fresh", desc: "100% pure unadulterated palm oil. Rich red colour, traditional taste." },
  { id: 6,  name: "Royal Palace Diabetic and Obesity Rice",           unit: "5kg",price: 22000, emoji: "🫗", cat: "grains", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 7,  name: "Aldor Pin Pop mix assorted",           unit: "pack",price: 6000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 8,  name: "All butter short bread",           unit: "",price: 500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 9,  name: "Ayoola Poundo Yam",           unit: "1.8kg",price: 9500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 10,  name: "Blue band butter",           unit: "450g",price: 4000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 11,  name: "Blue band original",           unit: "450g",price: 6000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 12,  name: "Casa Dorada Sparkling",           unit: "75cl",price: 8000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 13,  name: "Casa Dorada Steel",           unit: "75cl",price: 6800, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 14,  name: "Ceres 100%  fruit juice",           unit: "275ml",price: 2500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 15,  name: "Checkers 3 in 1 Custard (banana flavour)",           unit: "Big Size",price: 9000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 16,  name: "Checkers 3 in 1 Custard (milk flavour)",           unit: "Small Size",price: 3500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 17,  name: "Checkers Custard (vanilla)",           unit: "400g",price: 3500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 18,  name: "Checkers (milk flavour)",           unit: "Big Size",price: 8000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 19,  name: "Checkers (Vanilla flavour)",           unit: "Big Size",price: 8000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 20,  name: "Close UP Toothpaste",           unit: "Small Size",price: 1200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 21,  name: "Corn beef",           unit: "",price: 3500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 22,  name: "Dangote sugar",           unit: "",price: 1200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 23,  name: "Diary Milk Standard",           unit: "",price: 5500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 24,  name: "Dogan cube",           unit: "",price: 2100, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 25,  name: "Foxs White chocolate cookies",           unit: "180g",price: 4500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 26,  name: "Fruit and Fiber",           unit: "",price: 12000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 27,  name: "Geisha Sardine",           unit: "",price: 1600, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 28,  name: "Gold Kili Instant Honey Ginger Drink",           unit: "360g",price: 12000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 29,  name: "Golden penny macaroni",           unit: "",price: 1200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 30,  name: "Golden penny semovita",           unit: "1kg",price: 2200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 31,  name: "Golden penny spaghetti",           unit: "",price: 1400, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 32,  name: "Golden penny sugar",           unit: "",price: 1500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 33,  name: "Golden penny twist",           unit: "",price: 1200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 34,  name: "Good Cookies",           unit: "600g",price: 6000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 35,  name: "Green Giant Sweet Corn",           unit: "425ml",price: 1000, emoji: "🫗", cat: "grains", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 36,  name: "Heinz baked beans",           unit: "415g",price: 1000, emoji: "🫗", cat: "grains", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 37,  name: "Heinz tomatoes ketchup",           unit: "300g",price: 7000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 38,  name: "Honeywell Semolina",           unit: "",price: 2600, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 39,  name: "Hypo",           unit: "500ml",price: 2200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 40,  name: "IIRS Spaghetti",           unit: "",price: 1500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 41,  name: "Jam mixx",           unit: "",price: 5500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 42,  name: "Kellogs Cornflakes",           unit: "450g",price: 14000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 43,  name: "King's oil",           unit: "5L",price: 20000, emoji: "🫗", cat: "oils", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 44,  name: "Knorr cube mix",           unit: "pack",price: 2500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 45,  name: "KTC olive oil",           unit: "5L",price: 32000, emoji: "🫗", cat: "oils", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 46,  name: "KTC sunflower oil",           unit: "5L",price: 32000, emoji: "🫗", cat: "oils", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 47,  name: "Mars Chocolate Bar",           unit: "51g",price: 1800, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 48,  name: "Maryland Cookies",           unit: "",price: 2200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 49,  name: "Mcvites digestive biscuit",           unit: "",price: 350, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 50,  name: "mcvites rich tea",           unit: "",price: 350, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 51,  name: "Micks Center filled Eclairs with chocolate",           unit: "500g",price: 4000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 52,  name: "Milo Tin",           unit: "400g",price: 7000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 53,  name: "Morning fresh lemon",           unit: "Big Size",price: 3500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 54,  name: "Morning fresh lemon",           unit: "medium",price: 2500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 55,  name: "Mortein insecticide",           unit: "",price: 8500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 56,  name: "Nescafe Gold",           unit: "96g",price: 9000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 57,  name: "New Lush Cream cookies",           unit: "100g",price: 1500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 58,  name: "Nice biscuit",           unit: "",price: 350, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 59,  name: "Oreo Original",           unit: "44g",price: 2500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 60,  name: "Parle g biscuit",           unit: "",price: 350, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 61,  name: "Peak 400g refill",           unit: "400g",price: 8000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 62,  name: "Peak milk 400g Tin",           unit: "400g",price: 8500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 63,  name: "Peak milk liquid",           unit: "",price: 1500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 64,  name: "PK colgate cavity",           unit: "",price: 2200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 65,  name: "Pk MacLean",           unit: "Big Size",price: 2200, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 66,  name: "Pk oral b family size",           unit: "",price: 3500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 67,  name: "Powermilk biscuit",           unit: "",price: 350, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 68,  name: "Pringles",           unit: "40g",price: 2500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 69,  name: "Simas butter",           unit: "",price: 1500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 70,  name: "Snickers Chocolate Bar",           unit: "",price: 2600, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 71,  name: "Supreme Blossom Honey",           unit: "450g",price: 9000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 72,  name: "Titus Sardines",           unit: "125g",price: 2000, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 73,  name: "Viva Detergent",           unit: "80g",price: 300, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 74,  name: "Waw Detergent",           unit: "Big Size",price: 3800, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 75,  name: "White pearl kidney beans",           unit: "400g",price: 2500, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 76,  name: "Dogan cube",           unit: "",price: 2100, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
  { id: 77,  name: "Dogan cube",           unit: "",price: 2100, emoji: "🫗", cat: "snacks", desc: "Cold-pressed groundnut oil — clean, light and great for frying." },
];

// === STATE ===
let cart = loadCart();
let activeCat = "all";
let searchTerm = "";

function loadCart(){ try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||[]}catch{return[]} }
function saveCart(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)) }
function fmt(n){ return "₦" + n.toLocaleString("en-NG") }
function findProduct(id){ return products.find(p => p.id === id) }

// === RENDER PRODUCTS ===
const grid = document.getElementById("productGrid");
function renderProducts(){
  const list = activeCat === "all" ? products : products.filter(p => p.cat === activeCat);
  grid.innerHTML = list.map(p => `
    <article class="card" data-product="${p.id}">
      <div class="card-img">
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ""}
        ${p.image ? `<img src="${p.image}" alt="${p.name}" class="product-photo" loading="lazy">` : `<span class="emoji">${p.emoji}</span>`}
      </div>
      <div class="card-body">
        <div>
          <div class="card-name">${p.name}</div>
          <div class="card-unit">${p.unit}</div>
        </div>
        <div class="card-foot">
          <span class="card-price">${fmt(p.price)}</span>
          <button class="add-btn" data-add="${p.id}" aria-label="Add ${p.name}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-add]")) return;
      openProductModal(+card.dataset.product);
    });
  });
  grid.querySelectorAll("[data-add]").forEach(b => {
    b.addEventListener("click", (e) => { e.stopPropagation(); addToCart(+b.dataset.add); });
  });
}

// === SEARCH POPUP ===
const searchToggle = document.getElementById("searchToggle");
const searchPopup = document.getElementById("searchPopup");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");
const searchResults = document.getElementById("searchResults");

function openSearch(){
  searchPopup.hidden = false;
  searchToggle.setAttribute("aria-expanded", "true");
  setTimeout(()=>searchInput.focus(), 50);
  renderSearch();
}
function closeSearch(){
  searchPopup.hidden = true;
  searchToggle.setAttribute("aria-expanded", "false");
  searchInput.value = "";
  searchTerm = "";
}
function renderSearch(){
  const q = searchTerm.trim().toLowerCase();
  if (!q){
    searchResults.innerHTML = `<div class="search-hint">Start typing to find products…</div>`;
    return;
  }
  const matches = products.filter(p =>
    p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
  );
  if (!matches.length){
    searchResults.innerHTML = `<div class="search-empty"><strong>No matches</strong>Try a different word, e.g. "rice" or "oil".</div>`;
    return;
  }
  searchResults.innerHTML = matches.slice(0, 10).map(p => `
    <button class="search-result" data-open="${p.id}">
      <span class="search-result-img">${p.image ? `<img src="${p.image}" alt="">` : p.emoji}</span>
      <span class="search-result-info">
        <span class="search-result-name">${p.name}</span>
        <span class="search-result-unit">${p.unit}</span>
      </span>
      <span class="search-result-price">${fmt(p.price)}</span>
    </button>
  `).join("");
  searchResults.querySelectorAll("[data-open]").forEach(b => {
    b.onclick = () => { const id = +b.dataset.open; closeSearch(); openProductModal(id); };
  });
}
searchToggle.addEventListener("click", () => {
  if (searchPopup.hidden) openSearch(); else closeSearch();
});
searchClose.addEventListener("click", closeSearch);
searchInput.addEventListener("input", () => { searchTerm = searchInput.value; renderSearch(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !searchPopup.hidden) closeSearch(); });
document.addEventListener("click", (e) => {
  if (searchPopup.hidden) return;
  if (!searchPopup.contains(e.target) && !searchToggle.contains(e.target)) closeSearch();
});

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
function addToCart(id, qty = 1){
  const item = cart.find(i => i.id === id);
  if (item) item.qty += qty;
  else cart.push({ id, qty });
  saveCart(); renderCart();
  showToast(`${findProduct(id).name} added to cart`);
}
function setQty(id, qty){
  qty = Math.max(0, Math.min(999, Math.floor(qty || 0)));
  if (qty === 0) { cart = cart.filter(i => i.id !== id); }
  else {
    const item = cart.find(i => i.id === id);
    if (item) item.qty = qty;
    else cart.push({ id, qty });
  }
  saveCart(); renderCart();
}
function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if (!item) return;
  setQty(id, item.qty + delta);
}
function removeFromCart(id){ cart = cart.filter(i => i.id !== id); saveCart(); renderCart(); }
function clearCart(){
  if (!cart.length) return;
  if (!confirm("Remove all items from your cart?")) return;
  cart = []; saveCart(); renderCart();
}
const clearCartBtn = document.getElementById("clearCartBtn");
if (clearCartBtn) clearCartBtn.onclick = clearCart;

// === RENDER CART ===
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartFootEl  = document.getElementById("cartFoot");
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartDeliveryEl = document.getElementById("cartDelivery");
const freeProgressTextEl = document.getElementById("freeProgressText");
const freeProgressFillEl = document.getElementById("freeProgressFill");
const minOrderWarnEl = document.getElementById("minOrderWarn");
const checkoutBtnEl = document.getElementById("checkoutBtn");

function cartSubtotal(){
  return cart.reduce((s, c) => { const p = findProduct(c.id); return s + (p ? p.price * c.qty : 0); }, 0);
}
function deliveryFee(subtotal){
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
}
function cartTotal(){ const s = cartSubtotal(); return s + deliveryFee(s); }

function renderCart(){
  const items = cart.map(c => ({ ...c, ...findProduct(c.id) })).filter(i => i.name);
  const totalQty = items.reduce((s,i) => s + i.qty, 0);
  const subtotal = cartSubtotal();
  const delivery = deliveryFee(subtotal);
  const total = subtotal + delivery;
  cartCountEl.textContent = totalQty;
  cartCountEl.style.display = totalQty ? "grid" : "none";
  if (cartSubtotalEl) cartSubtotalEl.textContent = fmt(subtotal);
  if (cartDeliveryEl) cartDeliveryEl.textContent = delivery === 0 ? (subtotal>0 ? "FREE" : fmt(0)) : fmt(delivery);
  cartTotalEl.textContent = fmt(total);
  if (clearCartBtn) clearCartBtn.disabled = !items.length;

  // Free-delivery progress
  if (freeProgressTextEl && freeProgressFillEl){
    if (subtotal === 0){
      freeProgressTextEl.textContent = `Free delivery on orders above ${fmt(FREE_DELIVERY_THRESHOLD)} 🚚`;
      freeProgressFillEl.style.width = "0%";
    } else if (subtotal >= FREE_DELIVERY_THRESHOLD){
      freeProgressTextEl.textContent = "🎉 You unlocked free delivery!";
      freeProgressFillEl.style.width = "100%";
    } else {
      const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
      freeProgressTextEl.textContent = `Add ${fmt(remaining)} more for free delivery 🚚`;
      freeProgressFillEl.style.width = `${Math.min(100, (subtotal/FREE_DELIVERY_THRESHOLD)*100)}%`;
    }
  }

  // Min order check
  const belowMin = subtotal > 0 && subtotal < MIN_ORDER;
  if (minOrderWarnEl){
    minOrderWarnEl.hidden = !belowMin;
    minOrderWarnEl.textContent = belowMin ? `Minimum order is ${fmt(MIN_ORDER)}. Add ${fmt(MIN_ORDER - subtotal)} more.` : "";
  }
  if (checkoutBtnEl){
    checkoutBtnEl.disabled = belowMin || subtotal === 0;
    checkoutBtnEl.style.opacity = checkoutBtnEl.disabled ? ".55" : "1";
    checkoutBtnEl.style.cursor = checkoutBtnEl.disabled ? "not-allowed" : "pointer";
  }

  if (!items.length){
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
      <div class="cart-item-img">${i.image ? `<img src="${i.image}" alt="">` : i.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">${fmt(i.price * i.qty)}</div>
        <div class="cart-item-row">
          <div class="qty">
            <button data-dec="${i.id}" aria-label="Decrease">−</button>
            <input class="qty-input" type="number" min="0" max="999" value="${i.qty}" data-qty="${i.id}" aria-label="Quantity" />
            <button data-inc="${i.id}" aria-label="Increase">+</button>
          </div>
          <button class="remove" data-rm="${i.id}">Remove</button>
        </div>
      </div>
    </div>
  `).join("");

  cartItemsEl.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => changeQty(+b.dataset.inc, 1));
  cartItemsEl.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => changeQty(+b.dataset.dec, -1));
  cartItemsEl.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => removeFromCart(+b.dataset.rm));
  cartItemsEl.querySelectorAll("[data-qty]").forEach(inp => {
    inp.addEventListener("change", () => setQty(+inp.dataset.qty, parseInt(inp.value, 10)));
    inp.addEventListener("focus", () => inp.select());
  });
}

// === PRODUCT DETAIL MODAL ===
const productOverlay = document.getElementById("productOverlay");
const productBody = document.getElementById("productModalBody");

function openProductModal(id){
  const p = findProduct(id); if (!p) return;
  const inCart = cart.find(i => i.id === id);
  let qty = inCart ? inCart.qty : 1;

  productBody.innerHTML = `
    <div class="pm-img">
      ${p.tag ? `<span class="pm-tag">${p.tag}</span>` : ""}
      ${p.image ? `<img src="${p.image}" alt="${p.name}">` : p.emoji}
    </div>
    <div class="pm-body">
      <div>
        <div class="pm-name">${p.name}</div>
        <div class="pm-unit">${p.unit}</div>
      </div>
      <div class="pm-price">${fmt(p.price)}</div>
      <p class="pm-desc">${p.desc || "Quality product, freshly sourced and ready for delivery."}</p>
      <div class="pm-meta">
        <span class="pill">Category: ${p.cat}</span>
        <span class="pill">Unit: ${p.unit}</span>
      </div>
      <div class="pm-actions">
        <div class="qty">
          <button id="pmDec" aria-label="Decrease">−</button>
          <input id="pmQty" class="qty-input" type="number" min="1" max="999" value="${qty}" aria-label="Quantity" />
          <button id="pmInc" aria-label="Increase">+</button>
        </div>
        <button class="btn btn-primary" id="pmAdd">Add to cart</button>
      </div>
    </div>
  `;
  productOverlay.classList.add("open");
  productOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  const qtyInp = document.getElementById("pmQty");
  document.getElementById("pmInc").onclick = () => { qtyInp.value = Math.min(999, (+qtyInp.value||0)+1); };
  document.getElementById("pmDec").onclick = () => { qtyInp.value = Math.max(1, (+qtyInp.value||1)-1); };
  document.getElementById("pmAdd").onclick = () => {
    const q = Math.max(1, parseInt(qtyInp.value, 10) || 1);
    if (inCart) setQty(id, q); else addToCart(id, q);
    closeProductModal();
  };
}
function closeProductModal(){
  productOverlay.classList.remove("open");
  productOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}
document.getElementById("closeProduct").onclick = closeProductModal;
productOverlay.addEventListener("click", (e) => { if (e.target === productOverlay) closeProductModal(); });

// === CART DRAWER ===
const drawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("cartOverlay");
function openCart(){ drawer.classList.add("open"); overlay.classList.add("open"); document.body.classList.add("no-scroll"); }
function closeCart(){ drawer.classList.remove("open"); overlay.classList.remove("open"); document.body.classList.remove("no-scroll"); }
document.getElementById("cartBtn").onclick = openCart;
document.getElementById("closeCart").onclick = closeCart;
overlay.onclick = closeCart;

// === CHECKOUT MODAL ===
const checkoutOverlay = document.getElementById("checkoutOverlay");
const checkoutForm = document.getElementById("checkoutForm");
const modalTotalEl = document.getElementById("modalTotal");
const cName = document.getElementById("cName");
const cPhone = document.getElementById("cPhone");
const cAddress = document.getElementById("cAddress");

function loadCustomer(){
  try { const s = JSON.parse(localStorage.getItem(CUSTOMER_KEY));
    if (s){ cName.value = s.name||""; cPhone.value = s.phone||""; cAddress.value = s.address||""; }
  } catch {}
}
function openCheckout(){
  if (!cart.length) return;
  const subtotal = cartSubtotal();
  if (subtotal < MIN_ORDER){ showToast(`Minimum order is ${fmt(MIN_ORDER)}`); return; }
  modalTotalEl.textContent = fmt(cartTotal());
  loadCustomer();
  checkoutOverlay.classList.add("open");
  document.body.classList.add("no-scroll");
  setTimeout(() => cName.focus(), 100);
}
function closeCheckout(){ checkoutOverlay.classList.remove("open"); document.body.classList.remove("no-scroll"); }
document.getElementById("checkoutBtn").onclick = openCheckout;
document.getElementById("closeCheckout").onclick = closeCheckout;
checkoutOverlay.addEventListener("click", (e) => { if (e.target === checkoutOverlay) closeCheckout(); });

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cName.value.trim(), phone = cPhone.value.trim(), address = cAddress.value.trim();
  if (!name || !phone || !address){ showToast("Please fill in all fields"); return; }
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify({ name, phone, address }));
  const items = cart.map(c => ({ ...c, ...findProduct(c.id) }));
  const subtotal = cartSubtotal();
  const delivery = deliveryFee(subtotal);
  const total = subtotal + delivery;
  const lines = items.map(i => `- ${i.name} x${i.qty} = ${fmt(i.price * i.qty)}`).join("\n");
  const message =
`Hello Lolly Africa, I want to place an order:

${lines}

Subtotal: ${fmt(subtotal)}
Delivery: ${delivery === 0 ? "FREE" : fmt(delivery)}
Total: ${fmt(total)}

Customer details:
Name: ${name}
Phone: ${phone}
Delivery address: ${address}

Please confirm availability and delivery. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  closeCheckout();
});

// === CONTACT FORM ===
const contactForm = document.getElementById("contactForm");
if (contactForm){
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("ctName").value.trim();
    const contact = document.getElementById("ctContact").value.trim();
    const msg = document.getElementById("ctMsg").value.trim();
    if (!name || !contact || !msg){ showToast("Please fill in all fields"); return; }
    const text = `Hello Lolly Africa,\n\nName: ${name}\nContact: ${contact}\n\n${msg}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    contactForm.reset();
    showToast("Opening WhatsApp…");
  });
}

// === TOAST ===
let toastTimer;
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// === NAVBAR SCROLL ===
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 10));

// === INIT ===
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
