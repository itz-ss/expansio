// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "react-bootstrap";
import "../styles/navbar.css";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [mediaOpen, setMediaOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const location = useLocation();
  const navRef = useRef(null);

  // media routes
  const mediaLinks = [
  { label: "Educational Videos", path: "/media/educational-videos" },
  { label: "Events", path: "/media/events" },
  // { label: "InTheNews", path: "/media/in-the-news" },
  { label: "Podcasts", path: "/media/podcasts" },
  { label: "Testimonials", path: "/media/testimonials" },
];


  // ✅ Update mobile view dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Reset menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const toggleSubDropdown = (section) => {
    setOpenSubDropdown(openSubDropdown === section ? null : section);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-container">
        {/* 🧩 LOGO */}
        <Link to="/" className="logo">
          <img
            src="/assets/ExpansioLogo.png"
            alt="Logo"
          />
        </Link>

        {/* 🍔 HAMBURGER */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* 🔗 NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>

          {/* 🩺 DOCTORS */}
          <li className={`dropdown ${openDropdown === "doctors" ? "open" : ""}`}>
            <span
              className="dropdown-btn"
              onClick={() => toggleDropdown("doctors")}
            >
              Doctors <span className="arrow">▼</span>
            </span>

            <AnimatePresence>
              {openDropdown === "doctors" && (
                <motion.ul
                  className="dropdown-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <li><Link to="/about/dr-achal-gupta">Dr. Achal Gupta</Link></li>
                  <li><Link to="/about/dr-konika-bansal">Dr. Konika Bansal</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* 💊 TREATMENTS */}
          <li className={`dropdown ${openDropdown === "treatments" ? "open" : ""}`}>
            <span
              className="dropdown-btn"
              onClick={() => toggleDropdown("treatments")}
            >
              Treatments <span className="arrow">▼</span>
            </span>

            <AnimatePresence>
              {openDropdown === "treatments" && (
                <motion.div
                  className="dropdown-content treatments-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* 💻 Desktop View - Two Columns */}
                  {!isMobile ? (
                    <div className="treatments-columns">
                      <div className="treatment-column">
                        <h4>Dr Achal Gupta</h4>
                        <ul>
                          {servicesData.spine.map((item, i) => (
                            <li key={i}><Link to={item.to}>{item.label}</Link></li>
                          ))}
                        </ul>
                      </div>

                      <div className="treatment-column">
                        <h4>Dr Konika Bansal</h4>
                        <ul>
                          {servicesData.brain.map((item, i) => (
                            <li key={i}><Link to={item.to}>{item.label}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    /* 📱 Mobile Accordion */
                    <div className="mobile-accordion">
                      <div className="accordion-section">
                        <div
                          className="accordion-header"
                          onClick={() => toggleSubDropdown("spine")}
                        >
                          Dr Achal Gupta
                          <span className="accordion-arrow">
                            {openSubDropdown === "spine" ? "▲" : "▼"}
                          </span>
                        </div>
                        <AnimatePresence>
                          {openSubDropdown === "spine" && (
                            <motion.ul
                              className="accordion-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              {servicesData.spine.map((item, i) => (
                                <li key={i}><Link to={item.to}>{item.label}</Link></li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="accordion-section">
                        <div
                          className="accordion-header"
                          onClick={() => toggleSubDropdown("brain")}
                        >
                          Dr Konika Bansal
                          <span className="accordion-arrow">
                            {openSubDropdown === "brain" ? "▲" : "▼"}
                          </span>
                        </div>
                        <AnimatePresence>
                          {openSubDropdown === "brain" && (
                            <motion.ul
                              className="accordion-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              {servicesData.brain.map((item, i) => (
                                <li key={i}><Link to={item.to}>{item.label}</Link></li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* 🏆 OTHER LINKS */}
          <li><Link to="/achievements">Achievements</Link></li>

          {/* 🌐 MEDIA DROPDOWN */}
          <li
            className={`dropdown ${openDropdown === "media" ? "open" : ""}`}
          >
            <span
              className="dropdown-btn"
              onClick={() => toggleDropdown("media")}
            >
              Media <span className="arrow">▼</span>
            </span>

            <AnimatePresence>
              {openDropdown === "media" && (
                <motion.ul
                  className="dropdown-content"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {mediaLinks.map((ml) => (
                    <li key={ml.path}>
                      <Link to={ml.path}>{ml.label}</Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* 💙 Appointment Button */}
        <div className="appointment-button">
          <Button variant="primary" size="sm" href="/appointment">
            Appointment
          </Button>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;
