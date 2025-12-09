import React from "react";
import "../styles/whatsappButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "7080106535"; // Your WhatsApp number 917080106535
  const message = "Hello! I’d like to book an appointment.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/assets/images/WhatsApp.png"
        alt="Chat on WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
