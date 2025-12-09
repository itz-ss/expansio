import React, { useState, useEffect } from "react";
import "../styles/LanguageToggle.css"; // optional if you style separately

const LanguageToggle = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [ready, setReady] = useState(false);

  // Wait until Google Translate loads the <select>
  useEffect(() => {
    const check = setInterval(() => {
      const select = document.querySelector("#google_translate_element select");
      if (select) {
        setReady(true);
        clearInterval(check);
      }
    }, 200);
  }, []);

  const changeLanguage = (targetLang) => {
    const select = document.querySelector("#google_translate_element select");
    if (!select) return;
    select.value = targetLang;
    select.dispatchEvent(new Event("change"));
  };

  const toggleLanguage = () => {
    if (!ready) return;
    const next = lang === "en" ? "hi" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
    changeLanguage(next);
  };

  // Apply saved language when page loads
  useEffect(() => {
    if (ready) changeLanguage(lang);
  }, [ready]);

  return (
    <button
      onClick={toggleLanguage}
      className="lang-toggle-btn notranslate"
      disabled={!ready}
    >
      {lang === "en" ? "हिंदी" : "English"}
    </button>
  );
};

export default LanguageToggle;
