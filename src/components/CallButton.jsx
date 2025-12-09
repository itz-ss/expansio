import React from "react";
import "../styles/callButton.css";

const CallButton = () => {
  const phoneNumber = "+917080106535"; // your clinic number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="call-float"
      aria-label="Call Now"
    >
      <img
        src="/assets/mobileNavBar/call.png" // place your call icon in public/assets/images/
        alt="Call Now"
        className="call-icon"
      />
    </a>
  );
};

export default CallButton;
