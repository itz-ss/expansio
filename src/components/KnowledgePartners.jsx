import React from "react";
import { motion } from "framer-motion";
import "../styles/KnowledgePartners.css";

const partners = [
  {
    name: "Neurological Society of India",
    logo: "/assets/associatedLogo/Neurological-Society-of-India.png",
    link: "https://neurosocietyindia.com/",
  },
  {
    name: "Lucknow Neuro Club",
    logo: "/assets/associatedLogo/Lucknow-Neuro-Club.png",
    // link: "#",
  },
  {
    name: "Neurological Surgeons Society of India",
    logo: "/assets/associatedLogo/Neurological-Surgeons-Society-of-India.png",
    link: "https://nssi.in/",
  },
  {
    name: "NSSA",
    logo: "/assets/associatedLogo/NSSA.png",
    link: "https://nssa-india.com/",
  },
  {
    name: "Bombay Neurosciences Association",
    logo: "/assets/associatedLogo/Bombay-Neurosciences-Association.jpeg",
    link: "https://bombayneurosciences.in/",
  },
  {
    name: "up - uk neurocon2025",
    logo: "/assets/associatedLogo/UPUK.png",
    link: "https://www.upukneurocon2025.com/",
  },
  {
    name: "international child neurology association",
    logo: "/assets/associatedLogo/ICNA-logo.png",
    // link: "#",
  },
];

function KnowledgePartners() {
  return (
    <section className="partners-section">
      <motion.div
        className="partners-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h4 className="partners-subtitle">Associations</h4>
        <h1 className="partners-title">Associations Collaborations with Global Giants</h1>
        <p className="partners-description">
          Expansio partners with big names like Google, Meta (Facebook), and Amazon to bring the latest tricks and successful formulas to your business. We bring the same strategies used by big brands to your doorstep in India.
        </p>

      </motion.div>

      <motion.div
        className="partners-logos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
      >
        {partners.map((partner, index) => (
          <motion.a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default KnowledgePartners;
