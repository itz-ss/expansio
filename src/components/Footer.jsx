import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 border-top">
      <Container className="py-5">
        <Row className="gy-4">
          {/* 🩺 Contact Info */}
          <Col md={4}>
            <h5 className="fw-bold mb-3 text-uppercase">Contact Doctor</h5>
            <p className="mb-2">
              Neuron Brain & Spine Center, 2nd Floor, Suryodey Bank, Vibhuti Khand, <br />
              Lucknow, Uttar Pradesh 226016
            </p>
            <p className="mb-2">
              <a
                href="tel:+917080106535"
                className="text-decoration-none text-dark fw-semibold"
              >
                📞 +91 7080106535
              </a>
            </p>
            <p>
              <a
                href="mailto:neurospine001@gmail.com"
                className="text-decoration-none text-dark fw-semibold"
              >
                📧 neurospine001@gmail.com
              </a>
            </p>
          </Col>

          {/* 🧠 Treatments */}
          <Col md={5}>
            <h5 className="fw-bold mb-3 text-uppercase treatment-header">Treatments</h5>
            <div className="row">
              {Object.entries(servicesData).flatMap(([category, treatments]) =>
                treatments.map((treatment, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="col-6 col-md-6 col-lg-6 mb-2"
                  >
                    <Link
                      to={treatment.to}
                      className="text-decoration-none text-dark"
                      style={{ transition: "color 0.3s" }}
                      onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                      onMouseOut={(e) => (e.target.style.color = "inherit")}
                    >
                      {treatment.label}
                    </Link>
                  </div>
                ))
              )}
            </div>
          </Col>

          {/* 🌟 Social Links + Reviews + Location */}
          <Col md={3} className="footer-social">
            <div className="d-flex align-items-center gap-4 mb-4">
              <h5 className="fw-bold text-uppercase mb-0">Follow:</h5>
              <div className="social-icons d-flex align-items-center gap-3">
                {[
                  ["facebook_3670271.png", "Facebook", "https://www.facebook.com/share/15zrv5HUWd/?mibextid=wwXIfr"],
                  ["instagram_2673885.png", "Instagram", "https://www.instagram.com/neuronbrainandspine?igsh=MXUxaHB2MDhmOTdwcw%3D%3D&utm_source=qr"],
                  ["whatsapp_1384007.png", "WhatsApp", `https://wa.me/${6388060502}?text=${"Hello! I’d like to book an appointment."}`],
                  ["youtube-symbol_49411.png", "YouTube", "https://youtube.com/@neuronbrainandspine?si=YEaUrakZh9HD3WjK"],
                ].map(([img, alt, link], index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img
                      src={`/assets/images/${img}`}
                      alt={alt}
                      className="footer-icon"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* 🌍 Google Reviews & Location */}
            <div className="d-flex align-items-center gap-3">
              <a
                href="https://g.page/r/CaLoB3W56rcPEAE/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/googleR-removebg-preview.png"
                  alt="Google Reviews"
                  className="google-review-img"
                />
              </a>

              {/* 📍 Location Icon */}
              <a
                href="https://www.google.com/maps/dir//2,+%23B,+1,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.8635396,80.9175167,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399be323b4193155:0xfb7eab97507e8a2!2m2!1d80.9999182!2d26.8635635?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="location-icon"
              >
                <img
                  src="/assets/map.png"
                  alt="Google Maps Location"
                  className="location-img"
                />
              </a>
            </div>
          </Col>
        </Row>

        {/* 📅 COPYRIGHT + BOTTOM-RIGHT LOGO + TEXT */}
        <Row className="pt-3 mt-2 border-top position-relative">
          <Col className="text-center">
            <small className="text-muted">
              © {new Date().getFullYear()} Dr. Achal Gupta | All Rights Reserved
            </small>

            {/* ⭐ Bottom-Right Logo + Text */}
            <small
              className="footer-brand-badge text-muted d-flex align-items-center gap-2"
              style={{ right: "15px", bottom: "5px" }}
            >
              <Link
                to="https://expansio.in/"
                className="text-muted text-decoration-none d-flex align-items-center gap-2"
              >
                <span>MADE BY - </span>
                <img
                  src="/assets/ExpansioLogo.png"
                  alt="Logo"
                  style={{
                    height: "16px", // same height as text
                    objectFit: "contain",
                  }}
                />
                
              </Link>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
