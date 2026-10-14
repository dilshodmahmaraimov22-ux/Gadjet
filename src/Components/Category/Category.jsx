import "./Category.css";

const popular = [
  { id: 1, name: "Computer - Laaptop", count: 10 },
  { id: 2, name: "Smart phone & Tablets", count: 12 },
  { id: 3, name: "Fashion & Accessories", count: 14 },
  { id: 4, name: "Halth & Beauty", count: 8 },
];

const items = [
  { id: 1, title: "Computer for Designer, Art", icon: "monitor" },
  { id: 2, title: "Sport, Home, Outdoor", icon: "ball" },
  { id: 3, title: "Laptop for office, students", icon: "laptop" },
  { id: 4, title: "Software, card, book", icon: "book" },
];

function Icon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (type) {
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" fill="currentColor" />
          <path d="M9 20h6M12 16v4" />
        </svg>
      );
    case "laptop":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="11" rx="1.5" fill="currentColor" />
          <path d="M2.5 19h19" />
          <path d="M8 8h8M8 11h8" stroke="#d3e6dd" />
        </svg>
      );
    case "ball":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 3.5v17M3.5 12h17" />
          <path d="M6 6c3 3 3 9 0 12M18 6c-3 3-3 9 0 12" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M3 5.5C6 4 9.5 4 12 6c2.5-2 6-2 9-.5V19c-3-1.5-6.500-1.500-9 .5-2.500-2-6-2-9-.5Z" fill="currentColor" />
          <path d="M12 6v13.500" stroke="#d3e6dd" />
        </svg>
      );
    case "feather":
      return (
        <svg {...common}>
          <path d="M20 4c-6 0-11 4-11 10v3h3c6 0 8-5 8-13Z" fill="currentColor" />
          <path d="M4 20l8-8" />
        </svg>
      );
    default:
      return null;
  }
}

function Category() {
  return (
    <section className="category">
      <div className="category__container">
        <h2 className="category__title">Explore by Categories.</h2>
        <p className="category__text">
          We provide many categories, choose a category according to your
          expertise to make it easier to find a job.
        </p>

        <div className="category__grid">
          <div className="category__popular">
            <h3 className="category__popular-title">Popular Categories</h3>

            <ul className="category__list">
              {popular.map((item) => (
                <li className="category__row" key={item.id}>
                  <a href="#" className="category__row-link">
                    <span className="category__row-name">{item.name}</span>
                    <span className="category__count">{item.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="category__right">
            <div className="category__items">
              {items.map((item) => (
                <a href="#" className="category__item" key={item.id}>
                  <span className="category__icon">
                    <Icon type={item.icon} />
                  </span>
                  <span className="category__item-title">{item.title}</span>
                </a>
              ))}
            </div>

            <a href="#" className="category__item category__item--more">
              <span className="category__icon category__icon--small">
                <Icon type="feather" />
              </span>
              <span className="category__item-title">Explore More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;