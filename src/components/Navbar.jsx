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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const location = useLocation();
  const navRef = useRef(null);

  // Media routes
  const mediaLinks = [
    { label: "Educational Videos", path: "/media/educational-videos" },
    { label: "Events", path: "/media/events" },
    { label: "Podcasts", path: "/media/podcasts" },
    { label: "Testimonials", path: "/media/testimonials" },
  ];

  // SMART CATEGORY MAP → Automatically adapts to JSON keys
  const categoryTitles = {
    socialMedia: "Social Media & Content",
    advertising: "Paid Advertising & Performance",
    brandingDesign: "Branding & Creative Direction",
    webAndAutomation: "Web • Funnels • Automation",
  };

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on outside click
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

  // Reset menu on navigation change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (key) =>
    setOpenDropdown(openDropdown === key ? null : key);

  const toggleSubDropdown = (key) =>
    setOpenSubDropdown(openSubDropdown === key ? null : key);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src="/assets/ExpansioLogo.png" alt="Logo" />
        </Link>

        {/* HAMBURGER */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>

          {/* -------------------- SERVICES (NEW) -------------------- */}
          <li className={`dropdown ${openDropdown === "services" ? "open" : ""}`}>
            <span className="dropdown-btn" onClick={() => toggleDropdown("services")}>
              Services <span className="arrow">▼</span>
            </span>

            <AnimatePresence>
              {openDropdown === "services" && (
                <motion.div
                  className="dropdown-content treatments-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >

                  {/* =================== DESKTOP =================== */}
                  {!isMobile ? (
                    <div className="treatments-columns">
                      {Object.keys(servicesData).map((categoryKey) => (
                        <div className="treatment-column" key={categoryKey}>
                          <h4>{categoryTitles[categoryKey] || categoryKey}</h4>
                          <ul>
                            {servicesData[categoryKey].map((item, i) => (
                              <li key={i}>
                                <Link to={item.to}>{item.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* =================== MOBILE ACCORDION =================== */
                    <div className="mobile-accordion">
                      {Object.keys(servicesData).map((categoryKey) => (
                        <div className="accordion-section" key={categoryKey}>
                          <div
                            className="accordion-header"
                            onClick={() => toggleSubDropdown(categoryKey)}
                          >
                            {categoryTitles[categoryKey] || categoryKey}
                            <span className="accordion-arrow">
                              {openSubDropdown === categoryKey ? "▲" : "▼"}
                            </span>
                          </div>

                          <AnimatePresence>
                            {openSubDropdown === categoryKey && (
                              <motion.ul
                                className="accordion-content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                              >
                                {servicesData[categoryKey].map((item, i) => (
                                  <li key={i}>
                                    <Link to={item.to}>{item.label}</Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* MEDIA */}
          {/* <li className={`dropdown ${openDropdown === "media" ? "open" : ""}`}>
            <span className="dropdown-btn" onClick={() => toggleDropdown("media")}>
              Media <span className="arrow">▼</span>
            </span>

            <AnimatePresence>
              {openDropdown === "media" && (
                <motion.ul
                  className="dropdown-content"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {mediaLinks.map((ml) => (
                    <li key={ml.path}><Link to={ml.path}>{ml.label}</Link></li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li> */}

          {/* <li><Link to="/achievements">Achievements</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="https://tms-pearl-zeta.vercel.app/dashboard">
              Company Login
            </Link>
          </li>
        </ul>

        {/* APPOINTMENT BUTTON */}
        <div className="appointment-button">
          <Button variant="primary" size="sm" href="/appointment">
            Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
