import React from "react";
import "../styles/mobileNavBar.css";

const MobileNavBar = () => {
  const phoneNumber = "+917080106535";
  const whatsappNumber = "917080106535";
  const whatsappMessage = "Hello! I’d like to book an appointment.";

  return (
    <div className="mobile-nav-bar floating">
      {/* 📞 Call Button */}
      <a href={`tel:${phoneNumber}`} className="mobile-nav-item">
        <div className="icon-circle call-bg">
          <img src="/assets/mobileNavBar/call.png" alt="Call" />
        </div>
        <span>Call</span>
      </a>

      {/* 📅 Appointment Button */}
      <a href="/appointment" className="mobile-nav-item">
        <div className="icon-circle appoint-bg">
          <img src="/assets/mobileNavBar/appointment.png" alt="Appointment" />
        </div>
        <span>Appointment</span>
      </a>

       {/* 💬 WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-nav-item"
      >
        <div className="icon-circle whatsapp-bg">
          <img src="/assets/mobileNavBar/whatsapp.png" alt="WhatsApp" />
        </div>
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileNavBar;
