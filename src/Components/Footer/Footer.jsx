import "./Footer.css";

const columns = [
  {
    id: 1,
    title: "About Us",
    links: ["About V1", "About V2", "About V3", "Services V1", "Services V2"],
  },
  {
    id: 2,
    title: "Discover",
    links: ["Our Blog", "Our Blog V1", "Our Blog V2", "Blog Single", "Page 404"],
  },
  {
    id: 3,
    title: "Support",
    links: ["FAQs", "FAQ V2", "Career", "Career Detail", "Contact Us"],
  },
  {
    id: 4,
    title: "Useful links",
    links: ["Shop", "Shop V2", "Pricing V1", "Pricing V2", "Terms & Conditions"],
  },
];

const bottomLinks = ["Privacy policy", "Cookies", "Terms of service"];

function SocialIcon({ type }) {
  switch (type) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path
            fill="#ffffff"
            d="M13.200 19v-6.200h2l.3-2.400h-2.300V8.900c0-.7.200-1.100 1.200-1.100h1.200V5.700c-.2 0-.9-.1-1.800-.1-1.800 0-3 1.100-3 3.100v1.700H8.800v2.400h2V19Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="#ffffff" strokeWidth="1.800" />
          <circle cx="17" cy="7" r="1.200" fill="#ffffff" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M22 5.900c-.7.300-1.500.5-2.300.6.800-.5 1.500-1.300 1.800-2.200-.8.500-1.700.8-2.600 1-.7-.8-1.800-1.300-3-1.300-2.300 0-4.100 1.800-4.100 4.100 0 .3 0 .6.100.9-3.400-.2-6.400-1.800-8.400-4.300-.4.600-.6 1.300-.6 2.100 0 1.400.7 2.700 1.800 3.400-.7 0-1.300-.2-1.800-.5v.1c0 2 1.400 3.600 3.300 4-.3.1-.7.1-1.100.1-.3 0-.5 0-.8-.1.500 1.600 2 2.800 3.800 2.800-1.400 1.100-3.200 1.800-5.100 1.800-.3 0-.7 0-1-.1 1.800 1.200 4 1.800 6.300 1.800 7.500 0 11.700-6.300 11.700-11.700v-.5c.8-.6 1.500-1.300 2-2.100Z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
          <path
            fill="#ffffff"
            d="M7 10h2v7H7ZM8 7a1.200 1.200 0 1 1 0 2.400A1.200 1.200 0 0 1 8 7Zm3 3h1.900v1c.3-.6 1-1.100 2-1.100 2 0 2.600 1.300 2.600 3.100V17h-2v-3.600c0-.8-.2-1.500-1.100-1.500-1 0-1.400.7-1.400 1.600V17H11Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Contact */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__title">Contact</h4>

            <p className="footer__address">4517 Washington Ave.</p>
            <p className="footer__address">Manchester, Kentucky 39495</p>
            <a href="tel:+12395550108" className="footer__phone">
              (239) 555-0108
            </a>
            <a href="mailto:contact@agon.com" className="footer__email">
              contact@agon.com
            </a>

            <div className="footer__social">
              {["facebook", "instagram", "twitter", "linkedin"].map((name) => (
                <a href="#" className="footer__social-link" key={name} aria-label={name}>
                  <SocialIcon type={name} />
                </a>
              ))}
            </div>
          </div>

          {/* Boshqa ustunlar */}
          {columns.map((col) => (
            <div className="footer__col" key={col.id}>
              <h4 className="footer__title">{col.title}</h4>
              <ul className="footer__list">
                {col.links.map((link) => (
                  <li className="footer__item" key={link}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">©Official 2022</p>

          <ul className="footer__legal">
            {bottomLinks.map((link) => (
              <li key={link}>
                <a href="#" className="footer__legal-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;