// src/pages/TreatmentPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import AppointmentForm from "../components/AppointmentForm";
import SEO from "../components/SEO";
import "../styles/treatmentPage.css";

const TreatmentPage = () => {
  const { pathname } = useLocation();

  // Merge all services
  const allTreatments = [...servicesData.spine, ...servicesData.brain];
  const treatment = allTreatments.find((item) => item.to === pathname);
  const isSpine = servicesData.spine.some((s) => s.to === treatment?.to);

  if (!treatment) {
    return (
      <div className="treatment-not-found text-center py-5">
        <h2>Treatment Not Found</h2>
        <p>Please check the URL or visit the Services page.</p>
      </div>
    );
  }

  return (
    <>
    <SEO
      title="Treatments | Neurosurgery, Spine Surgery & Pediatric Neurology | Neuron Brain & Spine Center Lucknow"
      description="Explore advanced treatments offered at Neuron Brain & Spine Center including minimally invasive spine surgery, endoscopic spine surgery, pediatric neurology, epilepsy management, cerebral palsy care, stroke, tumors and more by Dr Achal Gupta & Dr Konika Bansal."
      keywords="Slip Disc Surgery, Cervical Spondylosis, Endoscopic Spine Surgery, Minimally Invasive Spine Surgery, Pediatric Spine Surgery, Brain Tumor Surgery, Spine Tumor, Child Neurology, Epilepsy Treatment, Cerebral Palsy treatment, ADHD treatment, genetic disorders"
      image="/assets/banner/homePageBanner.png"
    />

    <div className="treatment-page">

      {/* 🔹 PAGE BANNER */}
      <motion.div
        className="treatment-banner"
        style={{ backgroundImage: `url(${treatment.banner})` }}
        initial={{ backgroundPositionY: "50%", opacity: 0 }}
        animate={{ backgroundPositionY: "40%", opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container py-0">

        {/* --------------------------------------------------------
           SECTION 1 — Image Left | Text Right
           Spine → description + commonConditions + treatmentOptions
           Brain → title + description + causes (heading + paragraph only)
        --------------------------------------------------------- */}
        <motion.div
          className="treatment-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">

            {/* IMAGE LEFT ALWAYS */}
            <div className="col-md-6">
              <motion.img
                src={treatment.image}
                alt={treatment.label}
                className="img-fluid rounded shadow treatment-image"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>

            {/* TEXT RIGHT ALWAYS */}
            <div className="col-md-6">
              <h2 className="treatment-title">{treatment.title || treatment.label}</h2>
              <p className="treatment-desc">{treatment.description}</p>

              {/* 🍀 Spine → show commonConditions + treatmentOptions */}
              {isSpine && treatment.commonConditions && (
                <div className="mt-3">
                  <h4 className="sub-title">Common Conditions Treated</h4>
                  <ul className="condition-list">
                    {treatment.commonConditions.map((cond, i) => (
                      <li key={i}>{cond}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 🧠 Brain — upper part ends with causes.heading + paragraph ONLY */}
              {!isSpine && treatment.causes && (
                <div className="mt-3">
                  <h4 className="sub-title">{treatment.causes.heading}</h4>
                  {treatment.causes.paragraph && (
                    <p className="treatment-desc">{treatment.causes.paragraph}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* --------------------------------------------------------
           SECTION 2 — Left = continuation | Right = Appointment Form
           Start from pointsIntro → then points → then riskFactors
        --------------------------------------------------------- */}
        <motion.section
          className="treatment-section alt-layout"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">

            {/* LEFT SIDE — Brain continuation or Spine banner only */}
            <div className="col-md-6 d-flex align-items-center">
              <div className="options-wrapper">

                 {isSpine && treatment.treatmentOptions && (
                <div className="info-section-2">
                  <h4 className="sub-title">Treatment Options</h4>

                  <h5 className="mini-title mt-2">Non-Surgical</h5>
                  <ul className="condition-list">
                    {treatment.treatmentOptions.nonSurgical
                      .split(/[.,;•-]\s*/g)
                      .filter(Boolean)
                      .map((item, i) => (
                        <li key={i}>{item.trim()}</li>
                      ))}
                  </ul>

                  <h5 className="mini-title mt-2">Surgical</h5>
                  <ul className="condition-list">
                    {treatment.treatmentOptions.surgical
                      .split(/[.,;•-]\s*/g)
                      .filter(Boolean)
                      .map((item, i) => (
                        <li key={i}>{item.trim()}</li>
                      ))}
                  </ul>
                </div>
              )}
              
                {/* 🍀 Spine has nothing except lower banner */}
                {!isSpine && (
                  <>
                    {/* 1️⃣ Start with pointsIntro ALWAYS */}
                    {treatment.causes?.pointsIntro && (
                      <p className="fw-semibold">{treatment.causes.pointsIntro}</p>
                    )}

                    {/* 2️⃣ List of points */}
                    {treatment.causes?.points?.length > 0 && (
                      <ul className="condition-list">
                        {treatment.causes.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    )}

                    {/* 3️⃣ Risk factors */}
                    {treatment.riskFactors?.points?.length > 0 && (
                      <>
                        <h4 className="sub-title mt-3">{treatment.riskFactors.heading}</h4>
                        <ul className="condition-list">
                          {treatment.riskFactors.points.map((rf, i) => (
                            <li key={i}>{rf}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </>
                )}

                {/* Banner always stays at end */}
                <img
                  src={isSpine ? "/assets/banner/Website-banner.jpg" : "/assets/banner/konikaBanner.jpg"}
                  alt="Clinic Banner"
                  className="add-banner"
                />
              </div>
            </div>

            {/* RIGHT SIDE — Appointment Form ALWAYS */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <motion.div
                className="appointment-box w-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <AppointmentForm serviceName={treatment.label} />
              </motion.div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
    </>
  );
};

export default TreatmentPage;
