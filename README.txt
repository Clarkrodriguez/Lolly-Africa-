LOLLY AFRICA — Static Site
==========================

To run locally: just open index.html in your browser, OR drag the folder into
any static host (Netlify, Vercel, GitHub Pages, cPanel).

LOGO
----
The brand logo is `logo.png` in this folder. Replace it any time with a new
file (keep the same filename). It's used in the navbar, footer, favicon and
WhatsApp/Twitter share previews.

PRODUCT IMAGES (recommended upgrade)
------------------------------------
Each product currently uses an emoji placeholder. To add real photos:
  1. Drop product images into a new `images/` folder (e.g. images/rice.jpg)
  2. In script.js, on each product object, add an `image` field, e.g.:
        { id: 1, name: "Premium Rice", ..., emoji: "🍚", image: "images/rice.jpg" }
  3. The site will automatically use the photo instead of the emoji.

Tip: shoot all products on the SAME background (white or light grey),
square aspect ratio, ~800x800px — that's what makes a store look "pro".

CONFIG (top of script.js)
-------------------------
  WHATSAPP_NUMBER         - your WhatsApp number with country code (no +)
  DELIVERY_FEE            - flat delivery fee in naira
  FREE_DELIVERY_THRESHOLD - subtotal at which delivery becomes free
  MIN_ORDER               - minimum order amount

SEO / SOCIAL SHARING
--------------------
Edit the <meta> tags at the top of index.html (title, description, og:image)
when you publish to a real domain. The `og:image` shows when the link is
shared on WhatsApp/Twitter/Facebook — keep `logo.png` or replace with a
nicer marketing graphic.
