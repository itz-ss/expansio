// src/pages/AchalAbout.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { doctorsData } from "../../data/about";
import SEO from "../../components/SEO";
import "../../styles/About.css";

function AchalAbout() {
  const doctor = doctorsData.find((d) => d.id === "dr-achal-gupta");
  const images = doctor.sectionImages || [];
  const getImage = (index) => images[index] || images[images.length - 1];

  /**************************************************************
   🔥 PHRASES YOU WANT TO HIGHLIGHT AUTOMATICALLY IN PARAGRAPHS
   ➤ Add / remove lines inside the array — as many as you want
   **************************************************************/
  const highlightPhrases = [
    "National and International Faculty for endoscopic spine surgery",
    "He organised first ever endospine workshop in Lucknow",
  ];

  /**************************************************************
   🔍 Highlight ALL phrases inside the text dynamically
   ➤ Wraps matched phrases in <span class="animate-highlight">
   **************************************************************/
  const animateHighlight = (text) => {
    let result = text;
    highlightPhrases.forEach((phrase) => {
      // Escape RegExp characters from phrase and match case-insensitive
      const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      result = result.replace(
        regex,
        `<span class="animate-highlight">${phrase}</span>`
      );
    });
    return result;
  };

  return (
    <>
    <SEO
      title="Dr Achal Gupta | Consultant Neurosurgeon & Spine Surgeon in Lucknow"
      description="Learn about Dr Achal Gupta, Consultant Neurosurgeon & Spine Surgeon at Neuron Brain & Spine Center, Lucknow specializing in minimally invasive and endoscopic spine surgery."
      keywords="Dr Achal Gupta, Neurosurgeon in Lucknow, Spine Surgeon Lucknow, Minimally Invasive Spine Surgery, Endoscopic Spine Surgery, Brain Tumor Surgery"
      image="/assets/about/achal6.jpg"
    />

    <Container className="about-container">
      {/* Heading */}
      <div className="text-center">
        <motion.h1
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {doctor.name}
        </motion.h1>

        <motion.p
          className="text-muted doctor-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {doctor.title}
        </motion.p>
      </div>

      {/* 1️⃣ Biography — Photo LEFT */}
      <Row className="align-items-center">
        <Col md={6}>
          <img src={getImage(0)} alt="bio" className="about-image" />
        </Col>
        <Col md={6}>
          <h3>Biography</h3>
          {doctor.biography.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(p) }} />
          ))}
        </Col>
      </Row>

      {/* 2️⃣ Education — Photo RIGHT */}
      <Row className="align-items-center my-5">
        <Col md={6} className="order-md-2">
          <img src={getImage(1)} alt="education" className="about-image" />
        </Col>
        <Col md={6} className="order-md-1">
          <h3>Education</h3>
          <table className="table education-table">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Board</th>
              </tr>
            </thead>
            <tbody>
              {doctor.education.map((edu, i) => (
                <tr key={i}>
                  <td>
                    {edu.degree}
                    {edu.year && <div>({edu.year})</div>}
                  </td>
                  <td>{edu.institution}</td>
                  <td>{edu.board}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>

      {/* 3️⃣ Experience */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <img src={getImage(2)} alt="experience" className="about-image" />
        </Col>
        <Col md={6}>
          <h3>Experience</h3>
          {doctor.workExperience.map((exp, i) => (
            <p key={i}>
              <strong>{exp.position}</strong> – {exp.institution} ({exp.duration})
            </p>
          ))}
        </Col>
      </Row>

      {/* 4️⃣ Spine Endoscopy Experience */}
      <div className="my-5">
        <h3>Spine Endoscopy Experience</h3>
        <ul>
          {doctor.spineEndoscopyExperience.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
          ))}
        </ul>
      </div>

      {/* 5️⃣ Project & Field Work */}
      <div className="my-5">
        <h3>Project & Field Work</h3>
        <ul>
          {doctor.projectAndFieldWork.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
          ))}
        </ul>
      </div>

      {/* 6️⃣ Publications — Photo RIGHT */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <h3>Publications</h3>
          <ul>
            {doctor.publications.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <img src={getImage(3)} alt="publications" className="about-image" />
        </Col>
      </Row>

      {/* 7️⃣ Publications in Books */}
      <div className="my-5">
        <h3>Publications in Books</h3>
        <ul>
          {doctor.publicationsInBooks.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
          ))}
        </ul>
      </div>

      {/* 8️⃣ Awards — Photo LEFT */}
      <Row className="align-items-center my-5">
        <Col md={6} className="order-md-1">
          <img src={getImage(4)} alt="awards" className="about-image" />
        </Col>
        <Col md={6} className="order-md-2">
          <h3>Awards & Achievements</h3>
          <ul>
            {doctor.awards.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
            ))}
          </ul>
        </Col>
      </Row>

      {/* 9️⃣ Paper Presentations */}
      <div className="my-5">
        <h3>Paper Presentations</h3>
        <ul>
          {doctor.paperPresentations.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
          ))}
        </ul>
      </div>

      {/* 🔟 Conferences Attended — Photo RIGHT */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <h3>Conferences Attended</h3>
          <ul>
            {doctor.conferencesAttended.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <img src={getImage(5)} alt="conferences" className="about-image" />
        </Col>
      </Row>

      {/* 1️⃣1️⃣ Leadership — Photo LEFT */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <img src={getImage(6)} alt="leadership" className="about-image" />
        </Col>
        <Col md={6}>
          <h3>Leadership & Organizational Roles</h3>
          <ul>
            {doctor.leadershipAbilities.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
            ))}
          </ul>
        </Col>
      </Row>

      {/* 1️⃣2️⃣ Professional Associations */}
      <div className="my-5">
        <h3>Professional Associations</h3>
        <ul>
          {doctor.affiliations.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: animateHighlight(item) }} />
          ))}
        </ul>
      </div>
    </Container>
    </>
  );
}

export default AchalAbout;
