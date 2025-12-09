import React from "react";
import { useParams } from "react-router-dom";
import AchalAbout from "../pages/about/AchalAbout";
import KonikaAbout from "../pages/about/KonikaAbout";

function DoctorRoutes() {
  const { doctorId } = useParams();

  if (doctorId === "dr-achal-gupta") {
    return <AchalAbout />;
  }

  if (doctorId === "dr-konika-bansal") {
    return <KonikaAbout />;
  }

  return (
    <div className="text-center py-5">
      <h2>Doctor information is not loading</h2>
      <p className="text-muted">Data injection error</p>
    </div>
  );
}

export default DoctorRoutes;
