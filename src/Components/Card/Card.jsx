import { useState } from "react";
import "./Card.css";

const products = [
  { id: 1, brand: "Sony", title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB", price: "29.80", rating: 4, image: "watchGray" },
  { id: 2, brand: "Google", title: "Cancelling Headset Music Sport Deep Bass", price: "39.80", rating: 4, image: "headsetStand" },
  { id: 3, brand: "Apple", title: "T500BT Original Wireless Bluetooth Headphone", price: "69.80", rating: 4, badge: "-15", image: "headphonesPink" },
  { id: 4, brand: "Toshiba", title: "Black Walnut Wood & Aluminum Headphone Stand", price: "70.80", rating: 4, badge: "-20", image: "headphonesNavy" },
  { id: 5, brand: "BassX", title: "Beats Studio3 Wireless Bluetooth Headphones", price: "29.80", rating: 4, badge: "-10", image: "earbuds" },
  { id: 6, brand: "Konika", title: "Marshall MAJOR III Wireless Folding Bluetooth", price: "39.80", rating: 4, badge: "-15", image: "speaker" },
  { id: 7, brand: "Apple", title: "T500BT Original Wireless Bluetooth Headphone", price: "69.80", rating: 4, image: "watchBlack" },
  { id: 8, brand: "Toshiba", title: "Black Walnut Wood & Aluminum Headphone Stand", price: "70.80", rating: 4, image: "overEar" },
  { id: 9, brand: "BassX", title: "Beats Studio3 Wireless Bluetooth Headphones", price: "29.80", rating: 4, image: "onEar" },
  { id: 10, brand: "Konika", title: "Marshall MAJOR III Wireless Folding Bluetooth", price: "39.80", rating: 4, image: "headphonesBlack" },
  { id: 11, brand: "Apple", title: "T500BT Original Wireless Bluetooth Headphone", price: "69.80", rating: 4, badge: "-25", image: "toaster" },
  { id: 12, brand: "Toshiba", title: "Black Walnut Wood & Aluminum Headphone Stand", price: "70.80", rating: 4, image: "gamepad" },
];

function Watch({ band, accent }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M44 2H76L80 34H40Z" fill={band} />
      <path d="M40 86H80L76 118H44Z" fill={band} />
      <rect x="28" y="28" width="64" height="64" rx="16" fill="#2a2d33" />
      <rect x="33" y="33" width="54" height="54" rx="12" fill="#0b0d12" />
      <circle cx="47" cy="50" r="6" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="66" cy="50" r="6" fill="none" stroke="#4ade80" strokeWidth="2" />
      <path d="M40 68 L50 68 L54 60 L58 76 L62 64 L66 68 L80 68" fill="none" stroke="#e5484d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="80" r="3" fill="#38bdf8" />
      <circle cx="60" cy="80" r="3" fill="#8b5cf6" />
      <circle cx="74" cy="80" r="3" fill={accent} />
    </svg>
  );
}

function Headphones({ color, cup }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M24 72V60a36 36 0 0 1 72 0V72" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" />
      <rect x="12" y="60" width="26" height="44" rx="12" fill={color} />
      <rect x="82" y="60" width="26" height="44" rx="12" fill={color} />
      <rect x="18" y="68" width="12" height="28" rx="6" fill={cup} />
      <rect x="90" y="68" width="12" height="28" rx="6" fill={cup} />
    </svg>
  );
}

function ProductImage({ type }) {
  switch (type) {
    case "watchGray":
      return <Watch band="#b9bcc2" accent="#f59e0b" />;
    case "watchBlack":
      return <Watch band="#23262b" accent="#f59e0b" />;
    case "headphonesPink":
      return <Headphones color="#e6c8cc" cup="#cfa9ae" />;
    case "headphonesNavy":
      return <Headphones color="#2f3a5f" cup="#232c4a" />;
    case "headphonesBlack":
      return <Headphones color="#23262b" cup="#3b3e44" />;
    case "overEar":
      return <Headphones color="#1c2a4a" cup="#2c3e68" />;
    case "onEar":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path d="M22 76 C 16 30, 104 30, 98 76" fill="none" stroke="#23262b" strokeWidth="8" strokeLinecap="round" />
          <circle cx="26" cy="82" r="18" fill="#3b3e44" />
          <circle cx="94" cy="82" r="18" fill="#3b3e44" />
          <circle cx="26" cy="82" r="9" fill="#9aa3b5" />
          <circle cx="94" cy="82" r="9" fill="#9aa3b5" />
        </svg>
      );
    case "headsetStand":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path d="M26 56V46a34 34 0 0 1 68 0V56" fill="none" stroke="#23262b" strokeWidth="7" strokeLinecap="round" />
          <rect x="16" y="44" width="24" height="42" rx="11" fill="#2b2f36" />
          <rect x="80" y="44" width="24" height="42" rx="11" fill="#2b2f36" />
          <rect x="54" y="84" width="12" height="22" fill="#23262b" />
          <rect x="30" y="104" width="60" height="9" rx="4.5" fill="#23262b" />
        </svg>
      );
    case "earbuds":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <rect x="30" y="46" width="60" height="68" rx="28" fill="#ffffff" stroke="#e3e6ea" strokeWidth="2" />
          <rect x="30" y="38" width="60" height="26" rx="13" fill="#1b2233" />
          <circle cx="48" cy="40" r="13" fill="#a8d5c8" />
          <circle cx="72" cy="34" r="13" fill="#a8d5c8" />
          <circle cx="48" cy="40" r="5" fill="#1b2233" />
          <circle cx="72" cy="34" r="5" fill="#1b2233" />
        </svg>
      );
    case "speaker":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="102" rx="34" ry="6" fill="#38bdf8" opacity="0.8" />
          <circle cx="60" cy="58" r="44" fill="#2b2f36" />
          <ellipse cx="46" cy="38" rx="16" ry="9" fill="#ffffff" opacity="0.12" />
          <rect x="24" y="92" width="72" height="8" rx="4" fill="#1b1e24" />
        </svg>
      );
    case "toaster":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <rect x="12" y="44" width="96" height="58" rx="12" fill="#3b3e44" />
          <rect x="20" y="52" width="64" height="42" rx="6" fill="#cfd3d8" />
          <rect x="24" y="34" width="72" height="14" rx="7" fill="#1b2233" />
          <rect x="90" y="60" width="10" height="6" rx="3" fill="#9aa3b5" />
          <rect x="90" y="76" width="10" height="6" rx="3" fill="#9aa3b5" />
        </svg>
      );
    case "gamepad":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path d="M30 36H90C106 36 114 58 110 84C108 96 94 98 88 88L82 78H38L32 88C26 98 12 96 10 84C6 58 14 36 30 36Z" fill="#2b3340" />
          <rect x="26" y="50" width="16" height="5" rx="2" fill="#0b0d12" />
          <rect x="31.5" y="44.5" width="5" height="16" rx="2" fill="#0b0d12" />
          <circle cx="84" cy="48" r="4" fill="#4b5563" />
          <circle cx="94" cy="56" r="4" fill="#4b5563" />
          <circle cx="74" cy="56" r="4" fill="#4b5563" />
          <circle cx="84" cy="64" r="4" fill="#4b5563" />
          <circle cx="46" cy="70" r="7" fill="#12151b" />
          <circle cx="74" cy="70" r="7" fill="#12151b" />
        </svg>
      );
    default:
      return null;
  }
}

function Stars({ rating }) {
  return (
    <div className="card__stars" aria-label={`Reyting: ${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={`card__star ${n <= rating ? "card__star--filled" : ""}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

function Card() {
  const [added, setAdded] = useState([]);

  const handleAdd = (id) => {
    setAdded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="card">
      <div className="card__container">
        <h2 className="card__heading">
          <span>Featured Products</span>
          <span>For Pre-Order</span>
        </h2>

        <div className="card__grid">
          {products.map((item) => {
            const isAdded = added.includes(item.id);

            return (
              <article className="card__product" key={item.id}>
                {item.badge && <span className="card__badge">{item.badge}</span>}

                <div className="card__image">
                  <ProductImage type={item.image} />
                </div>

                <p className="card__brand">{item.brand}</p>
                <h3 className="card__title">{item.title}</h3>

                <Stars rating={item.rating} />

                <div className="card__footer">
                  <span className="card__price">${item.price}</span>
                  <button
                    type="button"
                    className={`card__btn ${isAdded ? "card__btn--added" : ""}`}
                    onClick={() => handleAdd(item.id)}
                  >
                    {isAdded ? "Added ✓" : "Add +"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Card;