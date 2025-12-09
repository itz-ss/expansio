// src/components/WhyChooseUs.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/WhyChooseUs.css";

const stats = [
  { id: 0, icon: "🏥", label: "Organic Views Generated for Clients", value: 100, suffix: "M+" },
  { id: 1, icon: "🧠", label: "High-Performance Posts Delivered", value: 5000, suffix: "+" },
  { id: 2, icon: "✚", label: "Brands Scaled Successfully", value: 50, suffix: "+" },
  { id: 3, icon: "✚", label: "Industries Served", value: 15, suffix: "+" },
  { id: 4, icon: "❤️", label: " Client Retention Rate", value: 98, suffix: "%" }, // ✅ percentage
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect section visibility (animation trigger)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-us" ref={sectionRef}>
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="subtitle">Why Choose Us</h4>
        <h1 className="title">Excellence in Turning Businesses into Brands</h1>
        <p className="descUI">
          Trusted by hundreds of Indian business owners to take their company from "Local" to "National" Level.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="stats-container">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            <div className="stat-icon">{item.icon}</div>
            <p className="stat-label">{item.label}</p>
            <AnimatedNumber target={item.value} start={isVisible} suffix={item.suffix} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ✅ Counter Component with suffix support (+ / %)
const AnimatedNumber = ({ target, start, suffix }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!start) return;

    let current = 1;
    const increment = Math.ceil(target / 80);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <h3 className="stat-number">
      {count}
      <span className="suffix">{suffix}</span>
    </h3>
  );
};

export default WhyChooseUs;
