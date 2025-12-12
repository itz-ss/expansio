import React from "react";
import { motion } from "framer-motion";
import "../styles/TechnologySection.css";

function TechnologySection() {
  return (
    <section className="technology-section">
      <div className="tech-container">
        <motion.div
          className="tech-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="tech-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technology
          </motion.h4>

          <motion.h1
            className="tech-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           World Class Tech for Faster Sales and Zero Headache
          </motion.h1>

          <motion.p
            className="tech-description mx-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           We use the latest digital tools to make your business growth safer, simpler, and faster. Our advanced systems help us find customers who are ready to buy right now. From tools that spy on your competitors' strategies to systems that track every single rupee you spend—we invest in technology that makes you rich. This means:

             </motion.p>

          <motion.ul
            className="tech-descriptionUl mx-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            
          >
            <li>World Class Branding</li>
            <li>Better social media presence</li>
            <li>Less wasted money</li>
            <li>More genuine leads</li>
            <li>Faster profits</li>
            <li>Early retirement for you</li>
          </motion.ul>
          <motion.p
            className="tech-description mx-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
          Modern business isn’t just about hard work—it’s about smart work. And that’s what we do for you.
             </motion.p>


        </motion.div>

        <motion.div
          className="tech-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/tech.png"
            alt="Advanced Spine Technology"
            className="tech-image"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default TechnologySection;
