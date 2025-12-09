import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/testimonials";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) =>
      (prev + 3) % testimonials.length
    );

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      (prev - 3 + testimonials.length) % testimonials.length
    );

  // Get 3 testimonials to display
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  // Wrap around if near the end
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <section className="testimonials-section">
      <motion.div
        className="testimonials-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="testimonials-subtitle">Client Success Stories</h4>
        <h1 className="testimonials-title">What Our Clients Say</h1>
        <p className="testimonials-desc">
          Real stories from Indian business owners who trusted Expansio and went from a business to a brand.
        </p>
      </motion.div>

      <div className="testimonial-slider">
        <div className="testimonial-wrapper">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((item) => (
              <motion.div
                key={item.id}
                className="testimonial-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6 }}
              >
                <p className="testimonial-text">“{item.review}”</p>
                <span className="testimonial-author">— {item.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="testimonial-controls">
          <button onClick={handlePrev} className="nav-btn">
            ‹
          </button>
          <button onClick={handleNext} className="nav-btn">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
