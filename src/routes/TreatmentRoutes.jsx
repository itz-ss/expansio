import React from "react";
import { Routes, Route } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import TreatmentPage from "../components/TreatmentPage";

const TreatmentRoutes = () => {
  const allTreatments = Object.values(servicesData).flat();

  return (
    <Routes>
      {allTreatments.map((treatment) => {
        const slug = treatment.to.split("/").pop(); // extract slug
        return <Route key={slug} path={slug} element={<TreatmentPage />} />;
      })}
    </Routes>
  );
};

export default TreatmentRoutes;
