// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const location = useLocation();
  const navRef = useRef(null);

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
        <li className={`dropdown ${openDropdown === "services" ? "open" : ""}`}>
                    <span
                      className="dropdown-btn"
                      onClick={() => toggleDropdown("services")}
                    >
                      services <span className="arrow">▼</span>
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
                          {/* 💻 Desktop View - Two Columns */}
                          {!isMobile ? (
                            <div className="treatments-columns">
                              <div className="treatment-column">
                                {/* 1st column   */}
                                    <h4>Social Media & Content</h4> 
                                    <ul>
                                    {servicesData.spine.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>
                                    {/* #2 */}
                              <div className="treatment-column">
                                    <h4>Paid Advertising & Performance</h4>
                                    <ul>
                                    {servicesData.brain.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>

                              <div className="treatment-column">
                                    <h4>Search, SEO & Local Presence</h4>
                                    <ul>
                                    {servicesData.spine.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>

                              <div className="treatment-column">
                                    <h4>Creative Design & Visual Branding</h4>
                                    <ul>
                                    {servicesData.spine.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>

                              <div className="treatment-column">
                                    <h4>Web, Funnels & Digital Experience</h4>
                                    <ul>
                                    {servicesData.spine.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>
        
                              <div className="treatment-column">
                                    <h4>Automation & CRM</h4>
                                    <ul>
                                    {servicesData.brain.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>

                              <div className="treatment-column">
                                    <h4>Analytics & Reporting</h4>
                                    <ul>
                                    {servicesData.spine.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>

                              <div className="treatment-column">
                                    <h4>Complete Digital Transformation</h4>
                                    <ul>
                                    {servicesData.spine.map((item, i) => (
                                        <li key={i}><Link to={item.to}>{item.label}</Link></li>
                                    ))}
                                    </ul>
                              </div>
                            </div>
                          ) : (
                            /* 📱 Mobile Accordion */
                            <div className="mobile-accordion">
                              <div className="accordion-section">
                                {/* #1 */}
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown("Social Media & Content")}
                                >
                                  Social Media & Content
                                  <span className="accordion-arrow">
                                    {openSubDropdown === "Social Media & Content" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === "Social Media & Content" && (
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
                                {/* #2  */}
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown(" Paid Advertising & Performance")}
                                >
                                  Paid Advertising & Performance
                                  <span className="accordion-arrow">
                                    {openSubDropdown === " Paid Advertising & Performance" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === " Paid Advertising & Performance" && (
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

                               <div className="accordion-section">
                                {/* #3 */}
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown("Search, SEO & Local Presence")}
                                >
                                  Search, SEO & Local Presence
                                  <span className="accordion-arrow">
                                    {openSubDropdown === "Search, SEO & Local Presence" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === "Search, SEO & Local Presence" && (
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
                                  {/* #4 */}
                               <div className="accordion-section">
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown("Creative Design & Visual Branding")}
                                >
                                  Creative Design & Visual Branding
                                  <span className="accordion-arrow">
                                    {openSubDropdown === "Creative Design & Visual Branding" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === "Creative Design & Visual Branding" && (
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
                                  {/* #5 */}
                               <div className="accordion-section">
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown("Web, Funnels & Digital Experience")}
                                >
                                  Web, Funnels & Digital Experience
                                  <span className="accordion-arrow">
                                    {openSubDropdown === "Web, Funnels & Digital Experience" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === "Web, Funnels & Digital Experience" && (
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
                                  {/* #6 */}
                               <div className="accordion-section">
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown("Automation & CRM")}
                                >
                                  Automation & CRM
                                  <span className="accordion-arrow">
                                    {openSubDropdown === "Automation & CRM" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === "Automation & CRM" && (
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
                                  {/* #7 */}
                               <div className="accordion-section">
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown("Analytics & Reporting")}
                                >
                                  Analytics & Reporting
                                  <span className="accordion-arrow">
                                    {openSubDropdown === "Analytics & Reporting" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === "Analytics & Reporting" && (
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
                                  {/* #8 */}
                               <div className="accordion-section">
                                <div
                                  className="accordion-header"
                                  onClick={() => toggleSubDropdown("Complete Digital Transformation")}
                                >
                                  Complete Digital Transformation
                                  <span className="accordion-arrow">
                                    {openSubDropdown === "Complete Digital Transformation" ? "▲" : "▼"}
                                  </span>
                                </div>
                                <AnimatePresence>
                                  {openSubDropdown === "Complete Digital Transformation" && (
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
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
    );
}