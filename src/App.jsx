import "./App.css";
import logo from "./assets/logo.png";
import wall from "./assets/wall.png"
import founder from "./assets/founder.png";
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
            src={wall}            alt="office"
          />
        </div>
      </section>

      {/* COMPANY */}
      <section className="section company" id="company">
        <div>
          <span className="tag">About Company</span>
          <h2>Who We Are</h2>
 <p>
Nexgent Solutions is a modern digital agency focused on helping businesses grow through powerful websites, smart marketing, and conversion-driven strategies. 

We don’t just build websites — we create systems that generate leads, increase sales, and build strong brand presence. Our approach combines clean design, performance optimization, and data-driven marketing to deliver real results.

From startups to growing businesses, we help our clients scale faster with reliable and creative digital solutions.
</p>
        </div>

        {/* FOUNDER */}
<section className="section">
  <div className="title">
    <span className="tag">Founder</span>
    <h2>Meet The Founder</h2>
  </div>

  <div className="founder-box">
    <div className="founder-img">
      <img src={founder} alt="Founder" />
    </div>

    <div className="founder-content">
      <h3>Madhesh</h3>
      <span>Founder & Developer</span>
 
      <p>
        I’m a passionate developer and digital creator focused on building
        modern web solutions that help businesses grow. With experience in
        web development, automation, and digital systems, I created Nexgent
        Solutions to deliver high-quality, performance-driven websites.
      </p>
<br></br>
      <p>
        My goal is simple — build clean, fast, and result-focused products
        that actually make an impact for clients.
      </p>
    </div>
  </div>
</section>

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

     <section className="section faq" id="faq">
  <div className="title">
    <span className="tag">FAQ</span>
    <h2>Frequently Asked Questions</h2>
  </div>

  <div className="faq-box">

    <details className="faq-item">
      <summary>
        <span>What is NexgentSolutions?</span>
      </summary>
      <p>
        NexgentSolutions is a modern web development brand focused on building fast, scalable, 
        and high-performance websites. We combine clean design with powerful technology 
        to help businesses grow online.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>Who is behind NexgentSolutions?</span>
      </summary>
      <p>
        NexgentSolutions is built by a passionate developer focused on creating modern web solutions. 
        Every project is handled with attention to detail, performance, and real-world usability.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>Why choose NexgentSolutions?</span>
      </summary>
      <p>
        You get direct communication, faster delivery, and a fully customized website. 
        Unlike generic services, we focus on performance, SEO, and unique design tailored to your brand.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>How long does it take to build a website?</span>
      </summary>
      <p>
        Simple websites are usually completed within 1–2 weeks. 
        More advanced platforms may take longer depending on features and complexity.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>How much does a website cost?</span>
      </summary>
      <p>
        Pricing depends on your requirements. Each project is customized, 
        and you’ll receive a clear, no-obligation quote with no hidden charges.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>What technologies do you use?</span>
      </summary>
      <p>
        We build websites using modern technologies like <b>Next.js</b>, <b>React</b>, 
        <b>JavaScript/TypeScript</b>, and <b>Tailwind CSS</b>. 
        For backend and services, we use tools like <b>Supabase</b>, APIs, and cloud platforms.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>Can I request custom features?</span>
      </summary>
      <p>
        Yes. Every website is fully customizable based on your business needs — 
        from UI design to advanced backend features.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>Are your websites SEO-friendly?</span>
      </summary>
      <p>
        Yes. All websites include SEO basics like meta tags, structured data, 
        fast performance, and mobile responsiveness to improve visibility on search engines.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        <span>Why not use Wix or page builders?</span>
      </summary>
      <p>
        Page builders are easy but limited. Custom-built websites offer better speed, 
        scalability, SEO, and a completely unique design tailored to your business.
      </p>
    </details>

  </div>
</section>
      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="tag">Contact Us</span>
            <h2>Let’s Build Your Next Big Idea</h2>

            <p className="contact-desc">
              Get in touch and let's grow your business.
            </p>

            <div className="contact-items">
              <div className="contact-item"><FaEnvelope /> hello@nexgent.com</div>
              <div className="contact-item"><FaPhoneAlt /> +91 9080282080</div>
              <div className="contact-item"><FaMapMarkerAlt /> Chennai</div>
            </div>

            <div className="contact-buttons">
              <a href="https://wa.me/919080282080" className="btn whatsapp">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="tel:+919080282080" className="btn call">
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src={logo}></img>
           <p>
        Helping businesses grow with high-performance websites and
        modern digital strategies.
      </p>

        <div className="footer-links">
          <a onClick={() => scrollToSection("home")}>Home</a>
          <a onClick={() => scrollToSection("company")}>Company</a>
          <a onClick={() => scrollToSection("services")}>Services</a>
          <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
          <a onClick={() => scrollToSection("faq")}>FAQ</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </div>

        <div className="social">
        <a><FaFacebookF /></a>  
         <a><FaInstagram /></a> 
        <a><FaLinkedinIn /></a>  
          <a><FaWhatsapp /></a>
        </div>
         <div className="footer-bottom">
    <p>© 2026 Nexgent Solutions. All rights reserved.</p>
  </div>

      </footer>
    </div>
  );
}
