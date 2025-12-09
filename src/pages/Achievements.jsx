import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { Container } from "react-bootstrap";
import AchievementGallery from "../components/AchievementGallery";
import { fetchAllAchievements } from "../services/strapi";

function Achievements() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAllAchievements().then(setData);
  }, []);

  return (
    <>
     <SEO
      title="Achievements | Dr Achal Gupta & Dr Konika Bansal | Neuron Brain & Spine Center"
      description="Explore major achievements of Dr Achal Gupta, Consultant Neurosurgeon & Spine Surgeon, and Dr Konika Bansal, Consultant Pediatric Neurologist at Neuron Brain & Spine Center, Lucknow."
      keywords="Dr Achal Gupta achievements, Dr Konika Bansal achievements, Neurosurgeon Lucknow, Spine surgeon achievements, Pediatric Neurologist achievements, Neuron Brain and Spine Center"
      image="/assets/banner/homePageBanner.png"
    />


      <Container className="py-4">
        <h2 className="mb-4 text-center">Achievements</h2>

        {!data && <p className="text-center">Loading...</p>}

        {data?.length === 0 && <p className="text-center">No achievements added yet.</p>}

        {data?.map((achievement) => (
          <div key={achievement.id} className="mb-5">
            <AchievementGallery achievement={achievement} />
          </div>
        ))}
      </Container>
    </>
  );
}

export default Achievements;
