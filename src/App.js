import { useState, useEffect, useRef } from "react";
import LearnMore from "./Asset/LearnMore";
import AboutMTCC from "./Asset/AboutMTCC";
import MaterialTesting from "./Asset/MaterialTesting";
import BioTech from "./Asset/BioTech";
import Calibration from "./Asset/Calibration";
import MeetTheHeads from "./Asset/MeetTheHeads";
import ViewGallery from "./Asset/ViewGallery";
import FAQ from "./Asset/Faq";
import "./App.css";

const navItems = ["About", "Services", "Socials"];

const slides = [
  { id: 1, src: "/WED-I/FEATURE1.JPG", label: "Featured Image One" },
  { id: 2, src: "/WED-I/FEATURE2.JPG", label: "Featured Image Two" },
  { id: 3, src: "/WED-I/FEATURE3.JPG", label: "Featured Image Three" },
  { id: 4, src: "/WED-I/FEATURE4.JPG", label: "Featured Image Four" },
  { id: 5, src: "/WED-I/FEATURE5.JPG", label: "Featured Image Five" },
  { id: 6, src: "/WED-I/FEATURE6.JPG", label: "Featured Image Six" },
  { id: 7, src: "/WED-I/FEATURE7.JPG", label: "Featured Image Seven" },
  { id: 8, src: "/WED-I/FEATURE8.JPG", label: "Featured Image Eight" },
  { id: 9, src: "/WED-I/FEATURE9.JPG", label: "Featured Image Nine" },
];

const RECIPIENT_EMAIL = "YOUR_MTCC_EMAIL_HERE";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [mailEmail, setMailEmail] = useState("");
  const [mailSubject, setMailSubject] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const auroraRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const socialsRef = useRef(null);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showViewGallery, setShowViewGallery] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMaterialTesting, setShowMaterialTesting] = useState(false);
  const [showBioTech, setShowBioTech] = useState(false);
  const [showCalibration, setShowCalibration] = useState(false);
  const [showMeetHeads, setShowMeetHeads] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("mtcc-theme") === "dark";
  });

  const toggleRef = useRef(null);

  const handleThemeToggle = () => {
    if (!document.startViewTransition) {
      setDarkMode(d => !d);
      return;
    }
    const btn = toggleRef.current;
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxR = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    document.documentElement.style.setProperty("--ripple-x", `${x}px`);
    document.documentElement.style.setProperty("--ripple-y", `${y}px`);
    document.documentElement.style.setProperty("--ripple-r", `${maxR}px`);
    document.startViewTransition(() => {
      setDarkMode(d => !d);
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("mtcc-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 200);
    } else {
      setMenuOpen(true);
    }
  };

  const closeMenu = (callback) => (e) => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 200);
    callback(e);
  };
  const [showHubPhoto, setShowHubPhoto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

      // Aurora parallax — each layer moves at different speed
      const y = scrollTop;
      const layers = auroraRef.current?.querySelectorAll(".aurora-layer");
      if (layers) {
        layers[0]?.style.setProperty("--scroll-y", `${y * 0.15}px`);
        layers[1]?.style.setProperty("--scroll-y", `${y * 0.25}px`);
        layers[2]?.style.setProperty("--scroll-y", `${y * 0.1}px`);
        layers[3]?.style.setProperty("--scroll-y", `${y * 0.2}px`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            entry.target.classList.remove("revealed");
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 200px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToAbout = (e) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSocials = (e) => {
    e.preventDefault();
    socialsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  };

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1, "prev");
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1, "next");

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handleSubmit = () => {
    if (!mailEmail || !mailSubject || !mailMessage) return;
    const to = encodeURIComponent(RECIPIENT_EMAIL);
    const subject = encodeURIComponent(mailSubject);
    const body = encodeURIComponent(
      `From: ${mailEmail}\n\n${mailMessage}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`,
      "_blank"
    );
    setMailEmail("");
    setMailSubject("");
    setMailMessage("");
  };

  return (
    <div className="app">
      {/* Aurora Background */}
      <div className="aurora-wrap" ref={auroraRef}>
        <div className="aurora-layer aurora-1" />
        <div className="aurora-layer aurora-2" />
        <div className="aurora-layer aurora-3" />
        <div className="aurora-layer aurora-4" />
      </div>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="blob-1" />
      <div className="blob-2" />

      {/* Fixed Header */}
      <div className="header-wrapper">
        <header className="header">
          <div className="brand">
            <img src="/MTCC_LOGO.png" alt="MTCC Logo" className="logo" />
            <div className="brand-text">
              <span className="brand-main">Material Testing and</span>
              <span className="brand-highlight">Calibration Center</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" onClick={
                    item === "About" ? scrollToAbout :
                    item === "Services" ? scrollToServices :
                    item === "Socials" ? scrollToSocials :
                    undefined
                  }>{item}</a>
                </li>
              ))}
                <li className="nav-toggle-item">
                  <button
                    ref={toggleRef}
                    className="theme-toggle"
                    onClick={handleThemeToggle}
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    )}
                  </button>
                </li>
              <li>
                <a href="#" className="contact-btn" onClick={scrollToContact}>Contact Us</a>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
            <span className={`ham-line ${menuOpen ? "ham-open-1" : ""}`} />
            <span className={`ham-line ${menuOpen ? "ham-open-2" : ""}`} />
            <span className={`ham-line ${menuOpen ? "ham-open-3" : ""}`} />
          </button>
        </header>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className={`mobile-menu ${menuClosing ? "menu-closing" : ""}`}>
            <a href="#" onClick={closeMenu(scrollToAbout)}>About</a>
            <a href="#" onClick={closeMenu(scrollToServices)}>Services</a>
            <a href="#" onClick={closeMenu(scrollToSocials)}>Socials</a>
            <a href="#" className="mobile-contact-btn" onClick={closeMenu(scrollToContact)}>Contact Us</a>
          </div>
        )}
      </div>

      {/* Scroll Ball */}
      <button
        className={`scroll-ball ${scrolled ? "scroll-ball-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <img src="/MTCC_LOGO.png" alt="MTCC" className="scroll-ball-logo" />
      </button>

      {/* FAQ Ball */}
      <button
        className="faq-ball faq-ball-visible"
        onClick={() => setShowFAQ(true)}
        aria-label="FAQ"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </button>

      {/* Main Content */}
      <main className="content">
        <div className="gallery-wrapper">
          <div className="gallery-track">
            <div className={`gallery-slide ${animating ? `slide-exit-${direction}` : "slide-enter"}`}>
              <img src={slides[current].src} alt={slides[current].label} className="gallery-img" />
            </div>
          </div>
          <button className="gallery-arrow gallery-arrow-left" onClick={prev} aria-label="Previous">&#8592;</button>
          <button className="gallery-arrow gallery-arrow-right" onClick={next} aria-label="Next">&#8594;</button>
          <div className="gallery-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot ${i === current ? "active" : ""}`}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Headliner */}
      <section className="headliner reveal">
        <div className="headliner-inner">
          <span className="headliner-tag">Featured Event</span>
          <h1 className="headliner-title">
            MTCC Celebrates <a href="https://worldengineeringday.net/" target="_blank" rel="noreferrer" className="headliner-accent headliner-link">World Engineering Day 2026</a> through Open House
          </h1>
          <p className="headliner-sub">
            The Material Testing and Calibration Center opens its doors to students, engineers, and the public in celebration of World Engineering Day — showcasing cutting-edge testing equipment, live demonstrations, and the vital role of precision in engineering.
          </p>
          <div className="headliner-actions">
            <a href="#" className="headliner-btn-primary" onClick={(e) => { e.preventDefault(); setShowLearnMore(true); }}>Learn More</a>
            <a href="#" className="headliner-btn-secondary" onClick={(e) => { e.preventDefault(); setShowViewGallery(true); }}>View Gallery</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section reveal" ref={aboutRef}>
        <div className="about-inner">
          <div className="about-text">
            <span className="about-tag">About Us</span>
            <h2 className="about-title">What is <span className="about-accent">MTCC</span>?</h2>
            <p className="about-desc">
              The Material Testing and Calibration Center (MTCC) is a state-of-the-art facility under Batangas State University dedicated to providing accurate, reliable, and accredited testing and calibration services. Committed to quality and precision, MTCC supports industries, researchers, and institutions in meeting national and international standards.
            </p>
            <div className="about-actions">
              <a href="#" className="about-btn-primary" onClick={(e) => { e.preventDefault(); setShowAbout(true); }}>About MTCC</a>
              <a href="#" className="about-btn-secondary" onClick={(e) => { e.preventDefault(); setShowMeetHeads(true); }}>Meet the Heads</a>
            </div>
          </div>
          <div className="about-photo-frame" onClick={() => setShowHubPhoto(true)}>
            <img src="/MTCCSIGN.jpg" alt="MTCC Hub" className="about-photo" />
            <div className="about-photo-overlay">
              <span className="about-photo-zoom">⤢</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section reveal" ref={servicesRef}>
        {/* Top card - text only, no photo */}
        <div className="services-header">
          <div className="services-header-right">
            <span className="services-label">What We Offer</span>
            <h2 className="services-heading">Our <span className="services-heading-accent">Services</span></h2>
            <p className="services-subheading">We provide certified testing, biotechnology, and calibration services for researchers, engineers, and industries.</p>
          </div>
        </div>
        {/* Hint + Cards below */}
        <p className="services-hint">Click on a service to view its details and pricing 👇</p>
        <div className="services-inner">
          <div className="services-card" onClick={() => setShowMaterialTesting(true)}>
            <div className="services-icon">⚙️</div>
            <h3 className="services-title">Material Testing</h3>
          </div>
          <div className="services-card" onClick={() => setShowBioTech(true)}>
            <div className="services-icon">🧬</div>
            <h3 className="services-title">Biotechnology</h3>
          </div>
          <div className="services-card" onClick={() => setShowCalibration(true)}>
            <div className="services-icon">📏</div>
            <h3 className="services-title">Calibration</h3>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="socials-section reveal" ref={socialsRef}>
        <div className="socials-inner">

          {/* Left — CTA */}
          <div className="socials-left">
            <span className="socials-tag">Stay Connected</span>
            <h2 className="socials-title">We're on <span className="socials-accent">Facebook</span></h2>
            <p className="socials-sub">Follow our official page to stay up to date with our latest news, events, and announcements.</p>

            <div className="socials-page-card">
              <img src="/MTCC_LOGO.png" alt="MTCC" className="socials-page-logo" />
              <div>
                <p className="socials-page-name">BatStateU MTCC</p>
                <p className="socials-page-handle">facebook.com/BatStateUMTCC</p>
              </div>
            </div>

            <a href="https://www.facebook.com/BatStateUMTCC/" target="_blank" rel="noreferrer" className="socials-follow-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow Our Page
            </a>
          </div>

          {/* Right — FB Photo Grid */}
          <div className="socials-right">
            <a href="https://www.facebook.com/BatStateUMTCC/" target="_blank" rel="noreferrer" className="socials-fb-grid">
              <div className="socials-fb-top">
                <img src="/FACEBOOK/ANN.jpg" alt="Facebook Post 1" />
                <div className="socials-fb-hover">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>View on Facebook</span>
                </div>
              </div>
              <div className="socials-fb-bottom">
                <div className="socials-fb-small">
                  <img src="/FACEBOOK/OUNCE.jpg" alt="Facebook Post 2" />
                  <div className="socials-fb-hover">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </div>
                <div className="socials-fb-small">
                  <img src="/FACEBOOK/MENT.jpg" alt="Facebook Post 3" />
                  <div className="socials-fb-hover">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section reveal" ref={contactRef}>
        <div className="contact-inner">
          <div className="contact-card contact-map-card">
            <h3 className="contact-card-title">Find Us</h3>
            <p className="contact-card-sub">1F STEER Hub Bldg., Batangas State University -<br />TNEU Alangilan Campus, Batangas City, Batangas, Philippines 4200</p>
            <div className="map-frame">
              <iframe
                title="MTCC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.2!2d121.0737089!3d13.7846278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0f3a2014be09%3A0x19a47167a4f63785!2sBatStateU%20Science%2C%20Technology%2C%20Engineering%20and%20Environment%20Research%20-%20STEER%20Hub!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-card contact-email-card">
            <div className="contact-email-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-sub">Fill in the form and we'll get back to you shortly.</p>
            <div className="contact-form">
              <input className="contact-input" type="email" placeholder="Your Email" value={mailEmail} onChange={(e) => setMailEmail(e.target.value)} />
              <input className="contact-input" type="text" placeholder="Subject" value={mailSubject} onChange={(e) => setMailSubject(e.target.value)} />
              <div className="contact-textarea-wrap">
                <textarea className="contact-input contact-textarea" placeholder="Your Message&#10;&#10;💡 Have photos or files? Upload them to Google Drive and paste the shared link here." rows="5" value={mailMessage} onChange={(e) => setMailMessage(e.target.value)} />
              </div>
              <button className="contact-submit" onClick={handleSubmit}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/MTCC_LOGO.png" alt="MTCC Logo" className="footer-logo" />
            <p className="footer-tagline">Quality service you can trust.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToServices(); }}>Services</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowMeetHeads(true); }}>Meet the Team</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowFAQ(true); }}>FAQ</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Contact Us</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSocials(); }}>Socials</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="https://www.facebook.com/BatStateUMTCC/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MTCC. All rights reserved.</p>
        </div>
      </footer>
      {/* Modals */}
      {showLearnMore && <LearnMore onClose={() => setShowLearnMore(false)} />}
      {showViewGallery && <ViewGallery onClose={() => setShowViewGallery(false)} />}
      {showAbout && <AboutMTCC onClose={() => setShowAbout(false)} />}
      {showMaterialTesting && <MaterialTesting onClose={() => setShowMaterialTesting(false)} />}
      {showBioTech && <BioTech onClose={() => setShowBioTech(false)} />}
      {showCalibration && <Calibration onClose={() => setShowCalibration(false)} />}
      {showHubPhoto && (
        <div className="hub-lightbox" onClick={() => setShowHubPhoto(false)}>
          <button className="hub-lightbox-close" onClick={() => setShowHubPhoto(false)}>✕</button>
          <img src="/MTCCSIGN.jpg" alt="MTCC Hub" className="hub-lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
      {showMeetHeads && <MeetTheHeads onClose={() => setShowMeetHeads(false)} />}
      {showFAQ && <FAQ onClose={() => setShowFAQ(false)} />}
    </div>
  );
}