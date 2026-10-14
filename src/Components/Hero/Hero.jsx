import "./Hero.css";

const products = [
  {
    id: 1,
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    price: "$29.80",
    icon: "monitor",
  },
  {
    id: 2,
    title: "Cancelling Headset Music Sport Deep Bass",
    price: "$420.00",
    icon: "headset",
  },
  {
    id: 3,
    title: "T500BT Original Wireless Bluetooth Headphone Deep",
    price: "$96.50",
    icon: "headphones",
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

function ArrowIcon() {
  return (
    <svg
      className="hero__arrow"
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 6H20M15 1L20 6L15 11"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WatchSvg() {
  return (
    <svg
      className="hero__watch-svg"
      viewBox="0 0 320 440"
      role="img"
      aria-label="Smart watch"
    >
      <path d="M100 0H220L232 112H88Z" fill="#22252a" />
      <path d="M88 328H232L220 440H100Z" fill="#22252a" />
      <circle cx="160" cy="364" r="5" fill="#363a40" />
      <circle cx="160" cy="388" r="5" fill="#363a40" />
      <circle cx="160" cy="412" r="5" fill="#363a40" />

      <rect x="256" y="150" width="9" height="44" rx="3" fill="#2d3035" />

      <rect x="60" y="90" width="200" height="258" rx="48" fill="#3b3e44" />
      <rect x="70" y="100" width="180" height="238" rx="40" fill="#08090b" />

      <text x="160" y="128" textAnchor="middle" fill="#9aa3b5" fontSize="9">
        THU
      </text>

      <circle cx="112" cy="158" r="17" fill="none" stroke="#2b7a78" strokeWidth="3" />
      <circle cx="160" cy="158" r="17" fill="none" stroke="#4ade80" strokeWidth="3" />
      <circle cx="208" cy="158" r="17" fill="none" stroke="#f59e0b" strokeWidth="3" />
      <text x="112" y="162" textAnchor="middle" fill="#fff" fontSize="9">
        75%
      </text>
      <text x="160" y="162" textAnchor="middle" fill="#fff" fontSize="9">
        5641
      </text>
      <text x="208" y="162" textAnchor="middle" fill="#fff" fontSize="9">
        90
      </text>

      <path
        d="M84 226 L104 226 L112 210 L120 242 L128 200 L138 248 L146 222 L172 222 L182 206 L192 238 L200 218 L236 218"
        fill="none"
        stroke="#e5484d"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="108" cy="288" r="11" fill="#38bdf8" />
      <circle cx="160" cy="288" r="11" fill="#8b5cf6" />
      <circle cx="212" cy="288" r="11" fill="#f59e0b" />
      <text x="108" y="316" textAnchor="middle" fill="#fff" fontSize="9">
        8/18
      </text>
      <text x="160" y="316" textAnchor="middle" fill="#fff" fontSize="9">
        78
      </text>
      <text x="212" y="316" textAnchor="middle" fill="#fff" fontSize="9">
        257
      </text>
    </svg>
  );
}

function ProductIcon({ type }) {
  if (type === "monitor") {
    return (
      <svg viewBox="0 0 64 52" aria-hidden="true">
        <rect x="2" y="3" width="60" height="36" rx="2" fill="#1b2233" />
        <rect x="5" y="6" width="54" height="30" rx="1" fill="#2b7a78" />
        <rect x="5" y="6" width="54" height="12" rx="1" fill="#3aa5a2" opacity="0.7" />
        <rect x="28" y="39" width="8" height="7" fill="#1b2233" />
        <rect x="16" y="46" width="32" height="4" rx="2" fill="#1b2233" />
      </svg>
    );
  }

  if (type === "headset") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M16 36V28a16 16 0 0 1 32 0V36"
          fill="none"
          stroke="#1b2233"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect x="9" y="32" width="12" height="20" rx="5" fill="#1b2233" />
        <rect x="43" y="32" width="12" height="20" rx="5" fill="#1b2233" />
        <rect x="29" y="50" width="6" height="8" fill="#1b2233" />
        <rect x="19" y="58" width="26" height="4" rx="2" fill="#1b2233" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M14 38V30a18 18 0 0 1 36 0V38"
        fill="none"
        stroke="#e6c8cc"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="7" y="34" width="14" height="22" rx="7" fill="#e6c8cc" />
      <rect x="43" y="34" width="14" height="22" rx="7" fill="#e6c8cc" />
      <rect x="11" y="40" width="6" height="10" rx="3" fill="#cfa9ae" />
      <rect x="47" y="40" width="6" height="10" rx="3" fill="#cfa9ae" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__top">
          {/* Chap tomon */}
          <div className="hero__content">
            <p className="hero__subtitle">Exclusive Smart Watch</p>

            <h1 className="hero__title">
              <span>Let go of the Challenge</span>
              <span>See yourself better</span>
            </h1>

            <p className="hero__text">
              Connect your conversations with the tools and services that you
              use to get the job done. With over 1,500 apps and a robust API
            </p>

            <div className="hero__actions">
              <a href="#" className="hero__btn">
                Get Started
                <ArrowIcon />
              </a>
              <a href="#" className="hero__link">
                How it works
                <ArrowIcon />
              </a>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-icon">
                  <svg viewBox="0 0 32 32" fill="none" stroke="#2b7a78" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                    <circle cx="16" cy="8" r="3.5" />
                    <circle cx="7" cy="22" r="3.5" />
                    <circle cx="25" cy="22" r="3.5" />
                    <path d="M14 11L9 19M18 11L23 19M10.5 22H21.5" />
                  </svg>
                </span>
                <div>
                  <strong className="hero__stat-number">+12k</strong>
                  <span className="hero__stat-label">Projects done</span>
                </div>
              </div>

              <div className="hero__stat">
                <span className="hero__stat-icon">
                  <svg viewBox="0 0 32 32" fill="none" stroke="#2b7a78" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="16" cy="11" r="5" />
                    <path d="M6 27c0-5.5 4.5-9 10-9s10 3.5 10 9" />
                    <path d="M11 7h10" />
                  </svg>
                </span>
                <div>
                  <strong className="hero__stat-number">68k</strong>
                  <span className="hero__stat-label">Customers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <span className="hero__circle hero__circle--peach-big"></span>
            <span className="hero__circle hero__circle--teal"></span>
            <span className="hero__circle hero__circle--peach-small"></span>

            <div className="hero__watch">
              <WatchSvg />
            </div>

            <div className="hero__chart">
              <span className="hero__chart-badge">Market Static</span>
              <div className="hero__chart-head">
                <p className="hero__chart-title">Course overview</p>
                <span className="hero__chart-percent">+15%</span>
              </div>
              <svg className="hero__chart-svg" viewBox="0 0 160 50" aria-hidden="true">
                <path
                  d="M2 36 C14 12 26 12 40 28 S62 46 78 28 S100 6 112 22 S136 34 158 16"
                  fill="none"
                  stroke="#121a2c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="112" cy="22" r="3.5" fill="#fff" stroke="#2b7a78" strokeWidth="1.5" />
              </svg>
              <div className="hero__chart-months">
                {months.map((m) => (
                  <span
                    key={m}
                    className={m === "Jun" ? "hero__chart-month--active" : ""}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero__products">
          {products.map((item) => (
            <a href="#" className="hero__card" key={item.id}>
              <span className="hero__card-icon">
                <ProductIcon type={item.icon} />
              </span>
              <span className="hero__card-info">
                <span className="hero__card-title">{item.title}</span>
                <span className="hero__card-price">{item.price}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;