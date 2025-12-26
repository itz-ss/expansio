import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
import "../styles/WelcomeSection.css";

// ✨ Fade-in animation presets
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const WelcomeSection = () => {
  return (
    <>
      <SEO
        title="Expansio | Build, Scale & Launch Digital Products"
        description="Expansio helps businesses build high-performing websites, scalable apps, and growth-driven brands that capture market share."
        keywords="Expansio, digital agency, web development, branding, growth marketing"
      />

      {/* 🌐 Section 1 – Dr. Achal Gupta */}
      <section className="welcome-section">
        <Container fluid className="h-100 p-0">
          <Row className="align-items-center h-100 g-0 ">
            {/* Left Side – Image Grid */}
            <Col md={6} className="image-column">
              <motion.div
                className="image-grid"
                variants={fadeIn("left", 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* 🖼 Large Image with hover zoom */}
                <motion.img
                  src="/assets/welcomePage/one.png"
                  alt="Dr. Achal Gupta"
                  className="grid-image main-img"
                  variants={fadeIn("up", 0.1)}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "20px 20px 28px rgba(0, 0, 0, 0.4)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* 🖼 Two Smaller Images */}
                <div className="small-img-row">
                  <motion.img
                    src="/assets/welcomePage/two.png"
                    alt="Spine Procedure"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.2)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "20px 20px 28px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.img
                    src="/assets/welcomePage/three.png"
                    alt="Operation Room"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.3)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "20px 20px 28px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </Col>

            {/* Right Side – Text */}
            <Col md={6} className="text-column">
              <motion.div
                className="welcome-content"
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h1 className="welcome-title ">
                  The Dream Of Market Dominance
                </motion.h1>
                    
                <motion.p className="welcome-text">
                 Most businesses stay small because they are invisible. Expansio is here to change that. We don't just run ads; we take your business from "struggling to find customers" to "customers waiting in line for you." We specialize in aggressive growth. Imagine waking up every morning to an inbox full of orders and a phone that doesn't stop ringing. We fix the cracks in your business where money is leaking out and replace them with a system that generates wealth. We are dedicated to one mission: taking you from being just another option in the market to being the Number #1 Choice. Stop playing small. It’s time to build a legacy that pays you for years to come. National Leaders in Turning Small Businesses into Big Brands.  
                  </motion.p>
                <motion.p
                  className="doctorName "
                  initial={{ scale: 1, color: "#003366" }}
                  animate={{
                    scale: [1, 1.05, 1],     // smooth pop animation
                    color: ["#003366", "#007bff", "#003366"], // color pulse
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Stop Chasing Customers—Let Expansio Make Customers Chase You.
                </motion.p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🌐 Section 2 – Dr. Konika Bansal */}
      <section className="welcome-section alt-section">
        <Container fluid className="h-100 p-0">
          <Row className="align-items-center h-100 g-0 flex-md-row-reverse">
            {/* Right Side – Image Grid */}
            <Col md={6} className="image-column">
              <motion.div
                className="image-grid"
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.img
                  src="/assets/welcomePage/five.png"
                  alt="Dr. Konika Bansal"
                  className="grid-image main-img"
                  variants={fadeIn("up", 0.1)}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                <div className="small-img-row">
                  <motion.img
                    src="/assets/welcomePage/four.png"
                    alt="Neurology Lab"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.2)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.img
                    src="/assets/welcomePage/six.png"
                    alt="Patient Care"
                    className="grid-image small-img"
                    variants={fadeIn("up", 0.3)}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </Col>

            {/* Left Side – Text */}
            <Col md={6} className="text-column">
              <motion.div
                className="welcome-content"
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h1 className="welcome-title">
                The Future Belongs to Digital: If You Are Not Online, You Are Already Behind.
                </motion.h1>

                <motion.p className="welcome-text">
                 The old ways of doing business are dying. Your competitors are already using digital tools to steal your customers. Expansio is your shield and your sword in this war. We believe that your brand deserves to be famous. Our expertise lies in creating a "Digital Trap" where customers see you everywhere—on Google, on Instagram, and on YouTube. We use psychology and technology to make them trust you instantly. We believe in results, not excuses. By partnering with us, you aren't just spending money on marketing; you are investing in your freedom. Secure your business's future today, so you can relax tomorrow while your brand works for you 24/7.
                </motion.p>

               
                <motion.p
                  className="doctorName "
                  initial={{ scale: 1, color: "#003366" }}
                  animate={{
                    scale: [1, 1.05, 1],     // smooth pop animation
                    color: ["#003366", "#007bff", "#003366"], // color pulse
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                 Don’t Just Run a Shop. Build an Empire That Makes Money While You Sleep.
                </motion.p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WelcomeSection;
