import { useState } from "react";
import "./Banner.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

function Arrow({ className = "" }) {
  return (
    <svg
      className={`banner__arrow-svg ${className}`}
      viewBox="0 0 64 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12 C 10 4, 18 16, 28 9 S 46 6, 58 9"
        stroke="#9aa3b5"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <path
        d="M53 5 L59 9 L53 13"
        stroke="#9aa3b5"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CurlyArrow() {
  return (
    <svg className="banner__curly-svg" viewBox="0 0 50 60" fill="none" aria-hidden="true">
      <path
        d="M30 2 C 44 8, 48 22, 34 26 C 20 30, 22 14, 36 16 C 44 18, 44 34, 30 44 C 24 48, 18 50, 10 52"
        stroke="#9aa3b5"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <path
        d="M16 46 L8 52 L17 57"
        stroke="#9aa3b5"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepIcon({ type }) {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "#121a2c",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (type) {
    case "plan":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="8" />
          <path d="M16 11v6l3 2" />
          <circle cx="16" cy="16" r="1" fill="#121a2c" />
        </svg>
      );
    case "connect":
      return (
        <svg {...common}>
          <circle cx="16" cy="13" r="3.5" />
          <path d="M9.500 24c0-3.500 3-6 6.500-6s6.500 2.500 6.500 6" />
          <circle cx="6" cy="6" r="2.500" />
          <circle cx="26" cy="6" r="2.500" />
          <circle cx="6" cy="26" r="2.500" />
          <circle cx="26" cy="26" r="2.500" />
          <path d="M8 8l5 4M24 8l-5 4M8 24l3-3M24 24l-3-3" />
        </svg>
      );
    case "match":
      return (
        <svg {...common}>
          <path d="M6 20v-4a10 10 0 0 1 20 0v4" />
          <rect x="4" y="18" width="6" height="9" rx="3" />
          <rect x="22" y="18" width="6" height="9" rx="3" />
        </svg>
      );
    case "complete":
      return (
        <svg {...common}>
          <path d="M6 27V17l8-6 8 6v10Z" />
          <path d="M11 27v-6h6v6" />
          <path d="M8 5l1 2 2 .3-1.500 1.400.4 2L8 9.700 6.100 10.700l.4-2L5 7.300 7 7Z" />
          <path d="M16 2.500l.8 1.600 1.700.3-1.200 1.200.3 1.700L16 6.500l-1.600.8.3-1.700-1.200-1.200 1.700-.3Z" />
          <path d="M24 5l1 2 2 .3-1.500 1.400.4 2-1.900-1-1.900 1 .4-2L21 7.300 23 7Z" />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <path d="M5 14a11 11 0 0 1 19-6" />
          <path d="M25 4v5h-5" />
          <path d="M27 18a11 11 0 0 1-19 6" />
          <path d="M7 28v-5h5" />
          <circle cx="16" cy="16" r="5" />
          <path d="M13.500 16l2 2 3.500-3.500" />
        </svg>
      );
    default:
      return null;
  }
}

function TeamIllustration() {
  return (
    <svg viewBox="0 0 230 281" className="banner__photo-svg" role="img" aria-label="Jamoa ish stolida">
      {/* Devor / doska */}
      <rect width="230" height="281" fill="#c9a574" />
      <rect x="0" y="0" width="230" height="170" fill="#cfae7e" />
      <rect x="12" y="14" width="42" height="52" fill="#f5f1ea" />
      <circle cx="33" cy="38" r="14" fill="#ef7c8e" />
      <circle cx="33" cy="38" r="8" fill="#f6c453" />
      <circle cx="33" cy="38" r="3.500" fill="#4aa3df" />
      <rect x="150" y="10" width="36" height="46" fill="#f5f1ea" />
      <rect x="154" y="14" width="10" height="38" fill="#e8798a" />
      <rect x="165" y="14" width="10" height="38" fill="#f6c453" />
      <rect x="176" y="14" width="8" height="38" fill="#7cc4a4" />
      <rect x="192" y="20" width="30" height="40" fill="#f5f1ea" />
      <rect x="196" y="24" width="22" height="9" fill="#9fc5e8" />
      <rect x="196" y="36" width="22" height="9" fill="#f4b6a6" />
      <rect x="68" y="22" width="34" height="26" fill="#ffffff" />
      <path d="M72 42l8-10 6 6 8-8" stroke="#6b7280" strokeWidth="1.5" fill="none" />

      {/* Stol */}
      <rect x="0" y="186" width="230" height="95" fill="#e8cd96" />
      <rect x="10" y="236" width="60" height="22" fill="#f1f1f3" transform="rotate(-8 40 247)" />
      <rect x="22" y="240" width="14" height="14" fill="#ef7c8e" transform="rotate(-8 29 247)" />
      <rect x="38" y="240" width="14" height="14" fill="#4aa3df" transform="rotate(-8 45 247)" />
      <rect x="140" y="255" width="80" height="18" rx="3" fill="#2a2d33" />

      {/* Erkak (orqada) */}
      <ellipse cx="120" cy="170" rx="40" ry="52" fill="#6b4a3a" />
      <circle cx="118" cy="104" r="21" fill="#4a2f22" />
      <path d="M97 100c2-16 14-22 24-21 12 1 20 10 19 21-6-8-14-12-22-12s-15 4-21 12Z" fill="#14110f" />

      {/* Chap ayol */}
      <ellipse cx="60" cy="238" rx="48" ry="58" fill="#a9bbb4" />
      <circle cx="68" cy="170" r="22" fill="#c98f66" />
      <path d="M44 168c0-20 14-28 26-27 14 1 22 12 20 28-4-10-10-14-20-14s-20 4-26 13Z" fill="#2b1d16" />
      <circle cx="60" cy="172" r="6" fill="none" stroke="#2b2b2b" strokeWidth="1.5" />
      <circle cx="76" cy="172" r="6" fill="none" stroke="#2b2b2b" strokeWidth="1.5" />

      {/* Noutbuk */}
      <rect x="100" y="196" width="100" height="58" rx="3" fill="#c3c6cc" />
      <rect x="105" y="201" width="90" height="48" rx="2" fill="#dfe2e7" />
      <path d="M92 254H208L214 264H86Z" fill="#a8abb2" />

      {/* O'ng ayol */}
      <ellipse cx="185" cy="236" rx="42" ry="56" fill="#8aa0c8" />
      <circle cx="180" cy="168" r="22" fill="#6b4430" />
      <path d="M156 166c0-20 14-28 26-27 14 1 22 12 22 28-4-10-10-14-22-14s-20 4-26 13Z" fill="#14110f" />
      <circle cx="173" cy="171" r="5.500" fill="none" stroke="#2b2b2b" strokeWidth="1.400" />
      <circle cx="188" cy="171" r="5.500" fill="none" stroke="#2b2b2b" strokeWidth="1.400" />
    </svg>
  );
}

const steps = [
  { id: 1, icon: "plan", title: "Start Plan", text: ["Choose any of", "our packages"], color: "peach" },
  { id: 2, icon: "connect", title: "Connect", text: ["Receive concepts", "In 24 hours"], color: "pink" },
  { id: 3, icon: "match", title: "Match", text: ["Development", "Stage"], color: "mint" },
];

const stepsBottom = [
  { id: 5, icon: "complete", title: "Complete", text: ["After-release", "Support"], color: "mint" },
  { id: 4, icon: "review", title: "Review", text: ["Project launch", "and checkout"], color: "blue" },
];

function StepCard({ step }) {
  return (
    <div className={`banner__step banner__step--${step.color}`}>
      <span className="banner__step-icon">
        <StepIcon type={step.icon} />
      </span>
      <h3 className="banner__step-title">{step.title}</h3>
      <p className="banner__step-text">
        {step.text[0]}
        <br />
        {step.text[1]}
      </p>
    </div>
  );
}

function Banner() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__head">
          <span className="banner__pill">How It Work ?</span>
          <h2 className="banner__title">
            <span>Cross-border ordering has</span>
            <span>never been easier</span>
          </h2>
        </div>

        <div className="banner__steps">
          <div className="banner__row">
            <StepCard step={steps[0]} />
            <div className="banner__arrow"><Arrow /></div>
            <StepCard step={steps[1]} />
            <div className="banner__arrow"><Arrow /></div>
            <StepCard step={steps[2]} />
          </div>

          <div className="banner__connector">
            <CurlyArrow />
          </div>

          <div className="banner__row banner__row--bottom">
            <StepCard step={stepsBottom[0]} />
            <div className="banner__arrow banner__arrow--back"><Arrow /></div>
            <StepCard step={stepsBottom[1]} />
          </div>
        </div>

        <div className="banner__news">
          <div className="banner__news-content">
            <h2 className="banner__news-title">Subscribe our newsletter</h2>
            <p className="banner__news-text">
              By clicking the button, you are agreeing with our Term &amp;
              Conditions
            </p>

            <form className="banner__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="banner__input"
                placeholder="Enter you mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
              <button type="submit" className="banner__submit" aria-label="Yuborish">
                {done ? (
                  <span>✓</span>
                ) : (
                  <svg width="18" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
                    <path d="M0 6H20M15 1L20 6L15 11" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          </div>

          <div className="banner__visual">
            <div className="banner__photo">
              <TeamIllustration />
            </div>

            <div className="banner__chart">
              <span className="banner__chart-badge">Market Static</span>
              <div className="banner__chart-head">
                <p className="banner__chart-title">Course overview</p>
                <span className="banner__chart-percent">+15%</span>
              </div>
              <svg className="banner__chart-svg" viewBox="0 0 160 50" aria-hidden="true">
                <path
                  d="M2 36 C14 12 26 12 40 28 S62 46 78 28 S100 6 112 22 S136 34 158 16"
                  fill="none"
                  stroke="#121a2c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="112" cy="22" r="3.5" fill="#fff" stroke="#2b7a78" strokeWidth="1.5" />
              </svg>
              <div className="banner__chart-months">
                {months.map((m) => (
                  <span key={m} className={m === "Jun" ? "banner__chart-month--active" : ""}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="banner__cta">
          <p className="banner__cta-text">Ready to get started?</p>
          <a href="#" className="banner__cta-btn">
            Create an Account
            <svg width="20" height="11" viewBox="0 0 22 12" fill="none" aria-hidden="true">
              <path d="M0 6H20M15 1L20 6L15 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;