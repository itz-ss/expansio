// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import TreatmentRoutes from "./TreatmentRoutes";
import DoctorRoutes from "./DoctorRoutes";
import AppointmentForm from "../components/AppointmentForm";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

// ⭐ Media Pages Imports
import EducationalVideos from "../pages/media/EducationalVideos";
import Events from "../pages/media/Events";
// import InTheNews from "../pages/media/InTheNews";
import Podcasts from "../pages/media/Podcasts";
import Testimonials from "../pages/media/TestimonialsPage";

// ⭐ SMART ROUTE MAPPING
const mediaPages = [
  { path: "educational-videos", element: <EducationalVideos /> },
  { path: "events", element: <Events /> },
  // { path: "InTheNews", element: <InTheNews /> },
  { path: "podcasts", element: <Podcasts /> },
  { path: "testimonials", element: <Testimonials /> }
];

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<AppointmentForm />} />
        <Route path="whatsapp" element={<WhatsAppButton />} />
        <Route path="call" element={<CallButton />} />

        {/* 🧠 Dynamic Treatments */}
        <Route path="treatments/*" element={<TreatmentRoutes />} />

        {/* 👨‍⚕️ Doctors routes */}
        <Route path="about/:doctorId" element={<DoctorRoutes />} />

        {/* 🎬 SMART Media Routes */}
        {mediaPages.map((page) => (
          <Route
            key={page.path}
            path={`media/${page.path}`}
            element={page.element}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
