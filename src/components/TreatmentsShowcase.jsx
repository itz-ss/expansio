import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../data/servicesData";
import "../styles/TreatmentsShowcase.css";

const TreatmentsShowcase = () => {
  const navigate = useNavigate();

  // Combine all treatments into a single array
  const allTreatments = [
    ...servicesData.spine.map((t) => ({ ...t, category: "Dr. Achal Gupta" })),
    ...servicesData.brain.map((t) => ({ ...t, category: "Dr. Konika Bansal" })),
  ];

  /* ----------------------------------------
     🟦 SHOW-MORE TOGGLE LOGIC
     showCount = how many items to display
  ----------------------------------------- */
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? allTreatments.length : 10;

  return (
    <section className="treatments-showcase">
      {/* Floating background particles */}
      <div className="particle-bg">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Our Services
        </motion.h1>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
         Choose specialized services that will skyrocket your brand and sales graph.
        </motion.p>

        {/* 🟦 GRID WITH SHOW MORE/LESS */}
        <div className="treatments-grid">
          <AnimatePresence>
            {allTreatments.slice(0, itemsToShow).map((treatment, i) => (
              <motion.div
                key={i}
                className="treatment-card framed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(treatment.to)}
              >
                <div className="photo-frame">
                  <img
                    src={treatment.image}
                    alt={treatment.label}
                    className="treatment-image"
                    loading="lazy"
                  />
                </div>

                <div className="card-info">
                  <h5 className="treatment-name">{treatment.label}</h5>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 🟩 SHOW MORE / SHOW LESS BUTTON */}
        {allTreatments.length > 10 && (
          <div className="show-more-wrapper">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentsShowcase;
