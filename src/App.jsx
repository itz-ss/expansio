import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

function App() {
  return (
    <Router basename="/">
      <SEO
        title="Expansio | Build, Scale & Launch Digital Products"
        description="Expansio is a modern digital solutions company helping startups and businesses design, build, and scale high-performance websites, applications, and brands."
        keywords="Expansio, digital agency, web development, SaaS development, startup solutions, UI UX design, branding, full stack development"
        image="/assets/ExpansioLogo.png"
      />
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
