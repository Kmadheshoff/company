import "./App.css";
import logo from "./assets/logo.png";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaCode,
  FaBullhorn,
  FaGlobe,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function App() {

  // ✅ NEW STATES
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // 🔥 Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false); // close mobile menu
  };

  
  // ✅ UPDATED SERVICES WITH DETAILS
  const services = [
    {
      icon: <FaCode />,
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Website Development",
      desc: "Custom websites, company portals and premium responsive UI.",
      details: {
        process: "Planning → UI Design → Development → Testing → Launch",
        techniques: "React, Responsive Design, SEO Optimization",
        methods: "Agile workflow, performance optimization",
      },
    },
    {
      icon: <FaBullhorn />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Digital Marketing",
      desc: "SEO, Ads and lead generation campaigns.",
      details: {
        process: "Research → Strategy → Campaign → Optimize",
        techniques: "Google Ads, SEO tools, Analytics",
        methods: "A/B testing, data-driven marketing",
      },
    },
    {
      icon: <FaGlobe />,
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48",
      title: "Branding & Landing Pages",
      desc: "Creative branding and conversion-focused pages.",
      details: {
        process: "Research → Wireframe → Design → Launch",
        techniques: "Figma, UX Design, Copywriting",
        methods: "Conversion optimization, storytelling",
      },
    },
  ];

  const portfolio = [
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Corporate Website",
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Business Landing Page",
    },
    {
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48",
      title: "Marketing Project",
    },
  ];

  return (
    <div className="app">

      {/* HEADER */}
      <header className="navbar">
        <img
          src={logo}
          alt="Nexgent Solutions Logo"
          className="logo"
          onClick={() => scrollToSection("home")}
        />

        {/* ✅ NAV TOGGLE */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("home")}>Home</a>
          <a onClick={() => scrollToSection("company")}>Company</a>
          <a onClick={() => scrollToSection("services")}>Services</a>
          <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
          <a onClick={() => scrollToSection("faq")}>FAQ</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section className="hero" id="home">
        <div className="hero-text">
          <h1>
            Build Your Business With <span>Modern Digital Growth</span>
          </h1>

          <p>
            We design high-converting websites and growth systems that help businesses
            generate leads, increase sales and build a strong online presence.
          </p>

          <button className="main-btn" onClick={() => scrollToSection("portfolio")}>
            Start Project
          </button>

          <button className="main1-btn" onClick={() => scrollToSection("contact")}>
            Booking Call
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="office"
          />
        </div>
      </section>

      {/* COMPANY */}
      <section className="section company" id="company">
        <div>
          <span className="tag">About Company</span>
          <h2>Who We Are</h2>
          <p>
            Nexgent Solutions is a results-driven digital agency focused on building
            powerful websites and marketing systems.
          </p>
        </div>

        <div className="company-box">
          <div><FaCheckCircle /> 20+ Projects Completed</div>
          <div><FaCheckCircle /> 99% Client Satisfaction</div>
          <div><FaCheckCircle /> Global Support</div>
          <div><FaCheckCircle /> Creative Team</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="title">
          <span className="tag">Services</span>
          <h2>What We Do Best</h2>
        </div>

        <div className="grid">
          {services.map((item, index) => (
            <div className="card service-card" key={index}>
              <img src={item.img} alt={item.title} className="service-img" />
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              {/* ✅ UPDATED BUTTON */}
              <button
                className="small-btn"
                onClick={() => setSelectedService(item)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ SERVICE MODAL */}
      {selectedService && (
        <div className="service-modal">
          <div className="service-content">
            <span className="close" onClick={() => setSelectedService(null)}>✖</span>

            <img src={selectedService.img} alt="" />

            <h2>{selectedService.title}</h2>
            <p><b>Process:</b> {selectedService.details.process}</p>
            <p><b>Techniques:</b> {selectedService.details.techniques}</p>
            <p><b>Methods:</b> {selectedService.details.methods}</p>
          </div>
        </div>
      )}

      {/* PORTFOLIO */}
      <section className="section" id="portfolio">
        <div className="title">
          <span className="tag">Portfolio</span>
          <h2>Projects That Deliver Results</h2>
        </div>

        <div className="grid">
          {portfolio.map((item, index) => (
            <div
              className="portfolio-card"
              key={index}
              onClick={() => scrollToSection("contact")}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FAQ (NEW) */}
    <section className="section faq" id="faq">
  <div className="title">
    <span className="tag">FAQ</span>
    <h2>Frequently Asked Questions</h2>
  </div>

  <div className="faq-box">

    <details className="faq-item">
      <summary>
        <span>How long does it take?</span>
      </summary>
      <p>Most projects are completed within 1–3 weeks depending on complexity.</p>
    </details>

    <details className="faq-item">
      <summary>
        <span>Do you provide SEO?</span>
      </summary>
      <p>Yes, we include full SEO optimization including keywords, speed and ranking improvements.</p>
    </details>

    <details className="faq-item">
      <summary>
        <span>Can I request custom features?</span>
      </summary>
      <p>Absolutely. Every project is tailored to your business needs and goals.</p>
    </details>

  </div>
</section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="tag">Contact Us</span>
            <h2>Let’s Build Your Next Big Idea 🚀</h2>

            <p className="contact-desc">
              Get in touch and let's grow your business.
            </p>

            <div className="contact-items">
              <div className="contact-item"><FaEnvelope /> hello@nexgent.com</div>
              <div className="contact-item"><FaPhoneAlt /> +91 9080282080</div>
              <div className="contact-item"><FaMapMarkerAlt /> Chennai</div>
            </div>

            <div className="contact-buttons">
              <a href="https://wa.me/9190802820280" className="btn whatsapp">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="tel:+919876543210" className="btn call">
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Nexgent Solutions</h3>
           <p>
        Helping businesses grow with high-performance websites and
        modern digital strategies.
      </p>

        <div className="footer-links">
          <a onClick={() => scrollToSection("home")}>Home</a>
          <a onClick={() => scrollToSection("services")}>Services</a>
          <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </div>

        <div className="social">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
         <div className="footer-bottom">
    <p>© 2026 Nexgent Solutions. All rights reserved.</p>
  </div>

      </footer>
    </div>
  );
}