import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { doctorsData } from "../../data/about";
import SEO from "../../components/SEO";
import "../../styles/About.css";

function KonikaAbout() {
  const doctor = doctorsData.find((d) => d.id === "dr-konika-bansal");
  const sectionImages = doctor.sectionImages || [];

  const renderSection = (title, content, index) => {
    const reversed = index % 2 !== 0;

    return (
      <motion.section
        key={index}
        className={`about-section ${reversed ? "reverse" : ""}`}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <Row className="align-items-center ">
          {/* Section Image */}
          <Col md={6} className="image-col">
            {sectionImages[index] && (
              <motion.img
                src={sectionImages[index]}
                alt={title}
                className="about-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.9 }}
              />
            )}
          </Col>

          {/* Section Text */}
          <Col md={6} className="text-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>{title}</h3>
              {content}
            </motion.div>
          </Col>
        </Row>
      </motion.section>
    );
  };

  return (
    <>
      {/* SEO */}
      <SEO
        title="Dr Konika Bansal | Pediatric Neurologist in Lucknow"
        description="Meet Dr Konika Bansal, Consultant Pediatric Neurologist specializing in epilepsy, developmental disorders, autism and pediatric neuromuscular disorders at Neuron Brain & Spine Center Lucknow."
        keywords="Dr Konika Bansal, Pediatric Neurologist Lucknow, Epilepsy Doctor, Autism specialist, ADHD treatment, Child neurologist Lucknow"
        image="/assets/about/konika12.jpeg"
      />


      <Container className="about-container ">
        {/* Header */}
        <div className="text-center">
          <motion.h1
            className="about-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {doctor.name}
          </motion.h1>

          <motion.p
            className="text-muted doctor-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {doctor.title}
          </motion.p>
        </div>

        {/* 1️⃣ Biography */}
        {renderSection(
          "Biography",
          doctor.biography.map((p, i) => <p key={i}>{p}</p>),
          0
        )}

        {/* 2️⃣ Education (table layout, no background) */}
        {renderSection(
          "Education",
          <table className="table table-borderless about-table">
            <tbody>
              {doctor.education.map((edu, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: "600", width: "40%" }}>{edu.degree}</td>
                  <td>{edu.institution}</td>
                </tr>
              ))}
            </tbody>
          </table>,
          1
        )}

        {/* 3️⃣ Experience + Courses combined (with <b> from JSON) */}
        {renderSection(
          "Experience & Courses",
          <>
            {/* Experience */}
            <h5 style={{ fontWeight: 600, marginBottom: 10 }}>Experience</h5>
            {doctor.experience.map((exp, i) => (
              <p key={i} style={{ marginBottom: 6 }}>
                <span
                  dangerouslySetInnerHTML={{ __html: exp.title }}
                />{" "}
                – {exp.organization}
              </p>
            ))}

            {/* Courses */}
            <h5 style={{ fontWeight: 600, marginTop: 20, marginBottom: 10 }}>
              Courses & Workshops
            </h5>
            <ul>
              {doctor.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </>,
          2
        )}

        {/* 4️⃣ Awards (support <b> inside JSON) */}
        {renderSection(
          "Awards & Accolades",
          <ul>
            {doctor.awards.map((award, i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{ __html: award }}
              />
            ))}
          </ul>,
          3
        )}

        {/* 5️⃣ Presentations */}
        {renderSection(
          "Presentations",
          <ul>
            {doctor.presentations.map((pres, i) => (
              <li key={i}>{pres}</li>
            ))}
          </ul>,
          4
        )}

        {/* 6️⃣ Publications */}
        {renderSection(
          "Publications",
          doctor.publications.map((pub, i) => (
            <p key={i}>
              {pub.citation}
              {pub.link && (
                <>
                  {" "}
                  — <a href={pub.link} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </>
              )}
            </p>
          )),
          5
        )}

        {/* 7️⃣ Associations (supports <b> inside JSON) */}
        {renderSection(
          "Associations",
          <ul>
            {doctor.associations.map((assoc, i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{ __html: assoc }}
              />
            ))}
          </ul>,
          6
        )}
      </Container>
    </>
  );
}

export default KonikaAbout;
