import "./App.css";
import logo from "./assets/logo.png";
import wall from "./assets/wall.png";
import founder from "./assets/founder.png";
import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp,
  FaCode, FaBullhorn, FaGlobe, FaCheckCircle,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight,
  FaRocket, FaShieldAlt, FaClock, FaStar, FaLightbulb,
  FaHeart, FaTrophy, FaUsers, FaGem,
} from "react-icons/fa";

/* ── Scroll Reveal Hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

/* ── Navbar scroll effect ── */
function useNavbarScroll() {
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    const onScroll = () => {
      if (window.scrollY > 40) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [splashDone, setSplashDone] = useState(false);
  const [splashFading, setSplashFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setSplashFading(true), 2400);
    const doneTimer = setTimeout(() => setSplashDone(true), 3000);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  useReveal();
  useNavbarScroll();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const services = [
    {
      icon: <FaCode />,
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      title: "Website Development",
      desc: "Custom websites, company portals and premium responsive UI built with modern frameworks.",
      details: {
        process: "Discovery → UI Design → Development → Testing → Launch",
        techniques: "React, Next.js, Responsive Design, SEO Optimization",
        methods: "Agile workflow, performance-first architecture",
      },
    },
    {
      icon: <FaBullhorn />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "Digital Marketing",
      desc: "SEO, paid ads, and lead generation campaigns engineered to drive measurable growth.",
      details: {
        process: "Research → Strategy → Campaign → Monitor → Optimize",
        techniques: "Google Ads, SEO Tools, Analytics, A/B Testing",
        methods: "Data-driven decisions, conversion rate optimization",
      },
    },
    {
      icon: <FaGlobe />,
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
      title: "Branding & Landing Pages",
      desc: "Creative branding systems and conversion-focused landing pages that make an impression.",
      details: {
        process: "Research → Wireframe → Visual Design → Copy → Launch",
        techniques: "Figma, UX Design, Conversion Copywriting",
        methods: "Story-driven design, psychology-backed CRO",
      },
    },
  ];

  const portfolio = [
    { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", title: "Corporate Website", category: "Web Development" },
    { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", title: "Business Landing Page", category: "Branding" },
    { img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80", title: "Marketing Campaign", category: "Digital Marketing" },
  ];

  const process = [
    { n: "01", title: "Discovery", desc: "We understand your goals, audience, and market to build a clear strategy." },
    { n: "02", title: "Design", desc: "Wireframes and high-fidelity mockups crafted for conversion and impact." },
    { n: "03", title: "Build", desc: "Clean, performant code with rigorous testing across all devices." },
    { n: "04", title: "Launch", desc: "Deployment, monitoring, and ongoing support to ensure success." },
  ];
  

  const pricingPlans = [
    {
      title: "Static Website",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      desc: "Perfect for portfolios, landing pages, and small businesses. Fast and secure.",
      features: ["5 Pages", "Responsive Design", "Contact Form", "Social Media Integration"],
      original: "6,000",
      price: "3,000",
      discount: "50% OFF",
    },
    {
      title: "Dynamic Website",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      desc: "Content Management System (CMS) to easily update your content without code.",
      features: ["Admin Panel", "Blog Functionality", "User Authentication", "Database Integration"],
      original: "16,000",
      price: "8,000",
      discount: "50% OFF",
      popular: true,
    },
    {
      title: "E-commerce Website",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
      desc: "Full-featured online store to sell your products globally.",
      features: ["Product Management", "Payment Gateway", "Cart & Checkout", "Order Tracking"],
      original: "30,000",
      price: "15,000",
      discount: "50% OFF",
    },
  ];

  const faqs = [
    { q: "What is NexgentSolutions?", a: "NexgentSolutions is a modern web development brand focused on building fast, scalable, and high-performance websites. We combine clean design with powerful technology to help businesses grow online." },
    { q: "Who is behind NexgentSolutions?", a: "NexgentSolutions is built by a passionate developer focused on creating modern web solutions. Every project is handled with attention to detail, performance, and real-world usability." },
    { q: "Why choose NexgentSolutions?", a: "You get direct communication, faster delivery, and a fully customized website. Unlike generic services, we focus on performance, SEO, and unique design tailored to your brand." },
    { q: "How long does it take to build a website?", a: "Simple websites are usually completed within 1–2 weeks. More advanced platforms may take longer depending on features and complexity." },
    { q: "How much does a website cost?", a: "Pricing depends on your requirements. Each project is customized, and you'll receive a clear, no-obligation quote with no hidden charges." },
    { q: "What technologies do you use?", a: "We build with Next.js, React, TypeScript, and Tailwind CSS. For backend and services we use Supabase, APIs, and modern cloud platforms." },
    { q: "Can I request custom features?", a: "Yes. Every website is fully customizable based on your business needs — from UI design to advanced backend features." },
    { q: "Are your websites SEO-friendly?", a: "Yes. All websites include SEO basics like meta tags, structured data, fast performance, and mobile responsiveness to improve visibility on search engines." },
    { q: "Why not use Wix or page builders?", a: "Page builders are easy but limited. Custom-built websites offer better speed, scalability, SEO, and a completely unique design tailored to your business." },
  ];

  return (
    <div className="app">

      {/* ── SPLASH SCREEN ── */}
      {!splashDone && (
        <div className={`splash-screen ${splashFading ? "splash-fading" : ""}`}>
          <div className="splash-orb splash-orb-1" />
          <div className="splash-orb splash-orb-2" />
          <div className="splash-grid" />
          <div className="splash-content">
            <div className="splash-logo-wrap">
              <div className="splash-ring splash-ring-1" />
              <div className="splash-ring splash-ring-2" />
              <img src={logo} alt="Nexgent Solutions" className="splash-logo" />
            </div>
            <div className="splash-tagline">
              <span className="splash-tag-line1">Smart Solutions.</span>
              <span className="splash-tag-line2">Next Generation.</span>
            </div>
            <div className="splash-bar-wrap">
              <div className="splash-bar" />
            </div>
          </div>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <header className="navbar">
        <img src={logo} alt="Nexgent Solutions" className="logo" onClick={() => scrollToSection("home")} />
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          {["home","about","services","pricing","portfolio","faq","contact"].map((id) => (
            <a key={id} onClick={() => scrollToSection(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        {/* Background decorations */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />
          {/* SVG decorative circles */}
          <svg style={{ position:"absolute", top:"10%", right:"5%", opacity:0.06 }} width="320" height="320" viewBox="0 0 320 320" fill="none">
            <circle cx="160" cy="160" r="155" stroke="url(#heroCircleGrad)" strokeWidth="1.5" strokeDasharray="8 12"/>
            <circle cx="160" cy="160" r="110" stroke="url(#heroCircleGrad)" strokeWidth="1" strokeDasharray="4 8"/>
            <circle cx="160" cy="160" r="60" stroke="url(#heroCircleGrad)" strokeWidth="0.5"/>
            <defs>
              <linearGradient id="heroCircleGrad" x1="0" y1="0" x2="320" y2="320">
                <stop stopColor="#00ffc8"/>
                <stop offset="1" stopColor="#8b5cf6"/>
              </linearGradient>
            </defs>
          </svg>
          {/* SVG dots grid */}
          <svg style={{ position:"absolute", bottom:"8%", left:"3%", opacity:0.08 }} width="200" height="200" viewBox="0 0 200 200">
            {Array.from({length:6}).map((_,row) =>
              Array.from({length:6}).map((_,col) => (
                <circle key={`${row}-${col}`} cx={col*35+10} cy={row*35+10} r="2" fill="#00ffc8"/>
              ))
            )}
          </svg>
        </div>

        <div className="hero-text">
          
          <h1>
            Build Your Business With{" "}
            <span className="gradient-text">Modern Digital Growth</span>
          </h1>
          <p>
            We design high-converting websites and growth systems that help businesses
            generate leads, increase sales and build a strong online presence.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection("portfolio")}>
              Start a Project
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection("contact")}>
              Book a Call
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>20+</strong><span>Projects Done</span></div>
            <div className="hero-stat"><strong>99%</strong><span>Satisfaction</span></div>
            <div className="hero-stat"><strong>2–4wk</strong><span>Avg Delivery</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src={wall} alt="Nexgent Solutions workspace" />
            <div className="hero-badge">
              <div className="hero-badge-icon"><FaRocket /></div>
              <div className="hero-badge-text">
                <strong>Fast Delivery</strong>
                <span>2–4 Week Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / COMPANY ── */}
      <section className="section company-section" id="about">
        {/* SVG wave top */}
        <svg style={{ position:"absolute", top:0, left:0, width:"100%", pointerEvents:"none" }} viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" height="60">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" fill="rgba(0,255,200,0.02)"/>
        </svg>

        <div className="company-grid">
          <div className="company-left reveal-left">
            <span className="tag">About Company</span>
            <h2>Who We <span>Are</span></h2>
            <p>
              Nexgent Solutions is a modern digital agency focused on helping businesses grow
              through powerful websites, smart marketing, and conversion-driven strategies.
            </p>
            <p style={{ marginTop:"14px" }}>
              We don't just build websites — we create systems that generate leads, increase
              sales, and build strong brand presence. Our approach combines clean design,
              performance optimization, and data-driven marketing to deliver real results.
            </p>

            <div className="company-pillars stagger-children" style={{ marginTop:"32px" }}>
              {[
                { icon:<FaCheckCircle />, label:"20+ Projects Completed", sub:"Across industries worldwide" },
                { icon:<FaStar />, label:"99% Client Satisfaction", sub:"Results-driven approach" },
                { icon:<FaGlobe />, label:"Global Support", sub:"Available across time zones" },
                { icon:<FaShieldAlt />, label:"Quality Guaranteed", sub:"No compromise on delivery" },
              ].map((p, i) => (
                <div className="pillar reveal" key={i} style={{ "--i": i }}>
                  <div className="pillar-icon">{p.icon}</div>
                  <div className="pillar-info">
                    <strong>{p.label}</strong>
                    <span>{p.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            {/* Founder card */}
            <div className="founder-wrapper">
              <div className="founder-bio">
                <span className="tag" style={{ marginBottom:"12px" }}>About Founder</span>
               <div className="founder-photo">
                <div className="founder-photo-frame">
                  <img src={founder} alt="Madhesh - Founder" />
                </div>
              </div>

                <h3>Madhesh</h3>
                <span className="founder-role">Founder & Lead Developer</span>
                <p>
                  I'm a passionate developer and digital creator focused on building
                  modern web solutions that help businesses grow. With experience in
                  web development, automation, and digital systems, I created Nexgent
                  Solutions to deliver high-quality, performance-driven websites.
                </p>
                <p>
                  My goal is simple — build clean, fast, and result-focused products
                  that actually make an impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── OUR MISSION ── */}
        <div className="mission-section reveal" style={{ marginTop:"90px" }}>
          <div className="mission-header">
            <span className="tag">Our Mission</span>
            <h2>Built on <span className="gradient-text">Purpose & Passion</span></h2>
            <p>Every line of code, every pixel, every strategy — guided by a simple belief:</p>
            <blockquote className="mission-quote">
              "We exist to turn ambitious ideas into powerful digital realities that grow real businesses."
            </blockquote>
          </div>

          <div className="mission-grid">
            {[
              {
                icon: <FaLightbulb />,
                title: "Innovation First",
                desc: "We stay ahead of digital trends so your business always has a modern, competitive edge. No templates — every solution is built from scratch.",
              },
              {
                icon: <FaHeart />,
                title: "Client-Centered",
                desc: "Your success is our success. We listen deeply, communicate clearly, and build solutions that serve your goals — not just checkboxes.",
              },
              {
                icon: <FaTrophy />,
                title: "Results Driven",
                desc: "We measure everything. Every website we build is optimised for speed, SEO, and conversions — because looking great isn't enough.",
              },
              {
                icon: <FaUsers />,
                title: "Long-Term Partners",
                desc: "We don't disappear after launch. We provide ongoing support, maintenance, and growth strategies as your trusted digital partner.",
              },
            ].map((m, i) => (
              <div className="mission-card reveal" key={i} style={{ transitionDelay:`${i*100}ms` }}>
                <div className="mission-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section services-section" id="services">
        <div className="title reveal">
          <span className="tag">Services</span>
          <h2>What We Do Best</h2>
          <p>Everything your business needs to win online — in one place.</p>
        </div>

        {/* SVG decoration */}
        <svg style={{ position:"absolute", right:"4%", top:"10%", opacity:0.04, pointerEvents:"none" }} width="260" height="260" viewBox="0 0 260 260">
          <rect x="10" y="10" width="240" height="240" rx="30" stroke="url(#svcGrad)" strokeWidth="1.5" fill="none" strokeDasharray="10 6"/>
          <rect x="40" y="40" width="180" height="180" rx="20" stroke="url(#svcGrad)" strokeWidth="1" fill="none"/>
          <defs>
            <linearGradient id="svcGrad" x1="0" y1="0" x2="260" y2="260">
              <stop stopColor="#00ffc8"/><stop offset="1" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>

        <div className="services-grid">
          {services.map((item, i) => {
            const isOpen = expandedService === i;
            return (
              <div
                className={`service-card reveal ${isOpen ? "service-card-open" : ""}`}
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="service-img-wrap">
                  <img src={item.img} alt={item.title} />
                  <div className="service-img-overlay" />
                </div>
                <div className="service-body">
                  <div className="service-icon-wrap">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button
                    className={`service-cta ${isOpen ? "service-cta-active" : ""}`}
                    onClick={() => setExpandedService(isOpen ? null : i)}
                  >
                    {isOpen ? "Show Less" : "Learn More"}
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.35s" }}
                    >
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* ── IN-CARD EXPAND PANEL ── */}
                  <div className={`service-expand ${isOpen ? "service-expand-open" : ""}`}>
                    <div className="service-expand-inner">
                      {Object.entries(item.details).map(([key, val]) => (
                        <div className="service-expand-row" key={key}>
                          <div className="service-expand-label">
                            <span className="service-expand-dot" />
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </div>
                          <p className="service-expand-val">{val}</p>
                        </div>
                      ))}
                      <button
                        className="service-expand-cta"
                        onClick={() => window.open("https://wa.me/919080282080")}
                      >
                        <FaWhatsapp /> Get a Quote
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section pricing-section" id="pricing">
        <div className="title reveal">
          <span className="tag">Pricing</span>
          <h2>Transparent, Honest <span style={{ background:"linear-gradient(110deg,var(--cyan),var(--violet))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Pricing</span></h2>
          <p>No hidden fees. No surprises. Choose the plan that fits your vision.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <div
              className={`pricing-card reveal ${plan.popular ? "pricing-popular" : ""}`}
              key={i}
              style={{ transitionDelay:`${i*100}ms` }}
            >
              {plan.popular && (
                <div className="pricing-badge">⚡ Most Popular</div>
              )}
              <div className="pricing-img-wrap">
                <img src={plan.img} alt={plan.title} />
                <div className="pricing-img-overlay" />
              </div>
              <div className="pricing-body">
                <h3>{plan.title}</h3>
                <p className="pricing-desc">{plan.desc}</p>
                <ul className="pricing-features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className="pricing-check">✦</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="pricing-price-block">
                  <div className="pricing-original">
                    <span>₹{plan.original}</span>
                    <span className="pricing-off">{plan.discount}</span>
                  </div>
                  <div className="pricing-final">₹{plan.price}</div>
                </div>
                <button
                  className="pricing-cta"
                  onClick={() => window.open("https://wa.me/919080282080")}
                >
                  CHOOSE PLAN
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="section portfolio-section" id="portfolio">
        <div className="title reveal">
          <span className="tag">Portfolio</span>
          <h2>Projects That Deliver Results</h2>
          <p>Hand-picked work that demonstrates our commitment to quality.</p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item, i) => (
            <div className="portfolio-card reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => scrollToSection("contact")}>
              <div className="portfolio-img-wrap">
                <img src={item.img} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-cta">
                    <FaArrowRight /> View Project
                  </div>
                </div>
              </div>
              <div className="portfolio-footer">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section process-section">
        <div className="title reveal">
          <span className="tag">Our Process</span>
          <h2>How We Work</h2>
          <p>A proven four-step framework that consistently delivers outstanding results.</p>
        </div>

        <div className="process-grid">
          {process.map((step, i) => (
            <div className="process-card reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="process-number">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section" id="faq">
        <div className="title reveal">
          <span className="tag">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before getting started.</p>
        </div>

        <div className="faq-box">
          {faqs.map((item, i) => (
            <details className="faq-item reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <summary><span>{item.q}</span></summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-info reveal-left">
            <span className="tag">Contact Us</span>
            <h2>Let's Build Your <span>Next Big Idea</span></h2>
            <p className="contact-desc">
              Ready to take your business to the next level? Get in touch and let's
              create something extraordinary together.
            </p>

            <div className="contact-items">
              {[
                { icon:<FaEnvelope />, text:"hello@nexgent.com" },
                { icon:<FaPhoneAlt />, text:"+91 9080282080" },
                { icon:<FaMapMarkerAlt />, text:"Chennai, India" },
              ].map((item, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-item-icon">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>

            <div className="contact-buttons">
              <a href="https://wa.me/919080282080" className="btn-whatsapp">
                <FaWhatsapp /> WhatsApp Us
              </a>
              <a href="tel:+919080282080" className="btn-call">
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>

          <div className="contact-card reveal-right">
            {/* SVG decoration inside card */}
            <svg style={{ position:"absolute", bottom:"-20px", right:"-20px", opacity:0.06, pointerEvents:"none" }} width="180" height="180" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="85" stroke="url(#ctaGrad)" strokeWidth="1.5" strokeDasharray="6 10" fill="none"/>
              <circle cx="90" cy="90" r="55" stroke="url(#ctaGrad)" strokeWidth="1" fill="none"/>
              <defs>
                <linearGradient id="ctaGrad" x1="0" y1="0" x2="180" y2="180">
                  <stop stopColor="#00ffc8"/><stop offset="1" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>

            <h3>Start Your Project Today</h3>
            <p>Join businesses that trust Nexgent to power their digital growth.</p>
            <div className="features">
              {[
                "Custom Design","Fast Delivery","SEO Optimized","Mobile Ready",
                "Ongoing Support","Free Consultation","No Hidden Fees","Agile Process",
              ].map((f, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-dot" />
                  {f}
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ width:"100%", justifyContent:"center", display:"flex", gap:"10px" }}
              onClick={() => window.open("https://wa.me/919080282080")}>
              <FaWhatsapp /> Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        {/* SVG top accent */}
        <svg width="100%" height="1" style={{ marginBottom:"0", display:"block" }}>
          <defs>
            <linearGradient id="footerLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent"/>
              <stop offset="50%" stopColor="#00ffc8" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#footerLine)" strokeWidth="1"/>
        </svg>

        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Nexgent" />
            <p>
              Helping businesses grow with high-performance websites and
              modern digital strategies that drive real results.
            </p>
            <div className="social" style={{ marginTop:"20px" }}>
              {[<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaWhatsapp />].map((icon, i) => (
                <a key={i}>{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <div className="footer-links">
              {["home","about","services","pricing","portfolio","faq","contact"].map((id) => (
                <a key={id} onClick={() => scrollToSection(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <div className="footer-links">
              <a>Website Development</a>
              <a>Digital Marketing</a>
              <a>Branding & Design</a>
              <a>Landing Pages</a>
              <a>SEO Optimization</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Nexgent Solutions. All rights reserved. Built with precision.</p>
        </div>
      </footer>
    </div>
  );
}
