// src/pages/ServicePage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import AppointmentForm from "../components/AppointmentForm";
import SEO from "../components/SEO";
import "../styles/treatmentPage.css";

const ServicePage = () => {
  const { pathname } = useLocation();

  const allServices = [
    ...servicesData.socialMedia,
    ...servicesData.advertising,
    ...servicesData.brandingDesign,
    ...servicesData.webAndAutomation,
  ];

  const service = allServices.find((item) => item.to === pathname);

  if (!service) {
    return (
      <div className="treatment-not-found text-center py-5">
        <h2>Service Not Found</h2>
        <p>Please check the URL or visit the Services page.</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${service.label} | Expansio | Build, Scale & Launch Digital Products`}
        description={service.description.substring(0, 155)}
        keywords={`Expansio, ${service.label}`}
        image={service.banner || "/assets/ExpansioLogo.png"}
      />
    <div className="service-page">
      {/* =================== BANNER =================== */}
      <section className="service-banner-section">
        <motion.div
          className="service-banner"
          // style={{ backgroundImage: `url(${service.banner} || /assets/banner/servicebanner.png)` }}
          style={{ backgroundImage: `url(/assets/banners/service.png)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
          <div className="banner-text-overlay">
            <h1>{service.label}</h1>
            <p>{service.description.substring(0, 120)}...</p>
          </div>
        </motion.div>
      </section>

      {/* =================== MAIN CONTENT WRAPPER =================== */}
      <div className="container service-two-column">

        <div className="row">

          {/* ========== LEFT COLUMN — Paragraph ONLY ========== */}
          <div className="col-lg-6 left-column">
            <h2 className="service-title">{service.label}</h2>
            <p className="service-paragraph">{service.description}</p>
             {/* Image (BELOW Paragraph) */}
            <motion.img
              src={service.image}
              alt={service.label}
              className="img-fluid rounded shadow service-main-image mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Key Points (BOTTOM) */}
            {service.points?.length > 0 && (
              <div className="key-points-wrapper">
                <h3 className="sub-title">Key Highlights</h3>
                <ul className="points-list">
                  {service.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          
          {/* ========== RIGHT COLUMN — Form → Image → Points ========== */}
          <div className="col-lg-6 right-column">

            {/* Appointment Form */}
            <motion.div
              className="appointment-box w-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <AppointmentForm serviceName={service.label} />
            </motion.div>


          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicePage;
