import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/FAQ";
//  import css 
import "../styles/FAQ.css";

function FAQSection() {
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const visibleFaqs = showMore ? faqs : faqs.slice(0, 6);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* LEFT BLOCK - FAQs */}
        <motion.div
          className="faq-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="faq-title">Frequently Asked Questions</h2>

          <AnimatePresence>
            {visibleFaqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`faq-item ${openIndex === i ? "open" : ""}`}
                onClick={() => toggleFAQ(i)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="faq-question">
                  <h5>{faq.question}</h5>
                  <span>{openIndex === i ? "−" : "+"}</span>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="faq-toggle text-center">
            <motion.button
              className="show-more-btn"
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "▲ Show Less" : "▼ Show More"}
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT BLOCK - CTA */}
        <motion.div
          className="faq-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="faq-right-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FAQ’S
          </motion.h3>

          <motion.h2
            className="faq-right-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            className="faq-right-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Looking for the Best Digital Marketing Agency in India? Don't Let Your Competitors Win. Book a Call Today!
            <a href="/appointment" > Book an Appointment</a> Today!
          </motion.p>

          <motion.div
            className="faq-contact"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="faq-phone-label">Call Now:</p>
            <motion.a
              href="tel:+917080106535"
              className="faq-phone"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              +91 9120277738 
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;