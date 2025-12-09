import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

function App() {
  return (
    <Router basename="/">
      <SEO
        title="Neuron Brain & Spine Center | Neurosurgeon, Spine Surgeon & Pediatric Neurologist"
        description="Neuron Brain & Spine Center in Lucknow provides advanced neurosurgery, spine surgery and pediatric neurology care by Dr Achal Gupta and Dr Konika Bansal."
        keywords="Neuron Brain and Spine Center, Neurosurgeon Lucknow, Spine Surgeon Lucknow, Pediatric Neurologist Lucknow"
        image="/assets/banner/homePageBanner.png"
      />
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
