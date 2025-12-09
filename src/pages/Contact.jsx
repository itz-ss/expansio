// src/pages/Contact.jsx
import SEO from "../components/SEO";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AppointmentForm from "../components/AppointmentForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <SEO
        title="Contact Neuron Brain & Spine Center | Dr Achal Gupta & Dr Konika Bansal"
        description="Contact Neuron Brain & Spine Center, Lucknow to book an appointment with Dr Achal Gupta, Consultant Neurosurgeon & Spine Surgeon, or Dr Konika Bansal, Consultant Pediatric Neurologist."
        keywords="Contact Neuron Brain and Spine Center, Contact Dr Achal Gupta, Contact Dr Konika Bansal, Neurosurgeon Lucknow contact, Pediatric Neurologist Lucknow contact, spine surgeon appointment"
        image="/assets/banner/homePageBanner.png"
      />


      {/* 🟦 Responsive Banner Section */}
      <section className="contact-hero">
        <img
          src="/assets/banner/contact-banner.png"   // <-- change to your image path
          alt="Contact Dr. Achal Gupta"
          className="contact-hero-img"
        />

        <div className="contact-hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-title"
          >
           Ready to Crush Your Competition? Your Empire Starts with One Call.
          </motion.h1>
        </div>
      </section>

      {/* 🩵 Contact Info + Appointment Form Section */}
      <Container className="contact-section py-5">
        <Row className="align-items-stretch">
          {/* 🏥 Left Side - Contact Info */}
          <Col md={6} className="mb-4 mb-md-0 d-flex">
            <motion.div
              className="contact-card flex-fill p-4 shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-header mb-4">
                <h3 className="fw-bold text-primary d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-primary"></i>
                 Expansio Marketing
                </h3>
                 <p className="text-muted mb-0 fs-6">
                  Stop Thinking. Start Earning. 
                </p>
                <p className="text-muted mb-0 fs-6">
                 Every minute you wait, a customer clicks on your competitor’s website instead of yours.
                 <p className="text-muted mb-0 fs-6">
                 Every day you delay, you lose money that belongs in your pocket. You have two choices today:
                </p>
                </p>
                <p className="text-muted mb-0 fs-6">
                 Close this window, go back to the old way, and struggle for sales.
                </p>
                <p className="text-muted mb-0 fs-6">
                  We only accept clients who are serious about winning. Are you ready to be #1?
                </p>
                 <p className="text-muted mb-0 fs-6">
                 Contact Expansio and turn your business into a cash-flow machine.
                </p>
                <p className="text-muted mb-0 fs-6">
                  expansio,630/7, Shiv Behar, Faradi Nagar, Indra Nagar, lucknow, Uttar Pradesh, India, 226016
                </p>
              </div>

              <hr className="contact-divider my-4" />

              <div className="contact-item mb-3">
                <h5 className="fw-semibold d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill text-primary"></i> Phone
                </h5>
                <a href="tel:+917080106535" className="contact-link">
                   +91 9120277738 
                </a>
              </div>

              <div className="contact-item mb-3">
                <h5 className="fw-semibold d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-primary"></i> Email
                </h5>
                <a
                  href="mailto:neurospine001@gmail.com"
                  className="contact-link"
                >
                  expansio.marketing@gmail.com
                </a>
              </div>

              <div className="contact-item mb-4">
                <h5 className="fw-semibold d-flex align-items-center gap-2">
                  <i className="bi bi-clock-fill text-primary"></i> Working Hours
                </h5>
                <p className="text-muted mb-1">Mon – Sat: 9:00 AM – 7:30 PM</p>
                <p className="text-muted mb-0">Sunday: Closed</p>
              </div>

              {/* 🖼️ Doctor / Clinic Photo */}
              <motion.div
                className="contact-photo mt-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/about/achal6.jpg"
                  alt="Neuron Brain & Spine Center Lucknow"
                  className="img-fluid rounded shadow-sm"
                />
              </motion.div>
            </motion.div>
          </Col>

          {/* 📅 Right Side - Appointment Form */}
          <Col md={6} className="d-flex">
            <motion.div
              className="appointment-box flex-fill"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AppointmentForm serviceName="General Consultation" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
