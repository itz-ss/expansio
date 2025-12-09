import SEO from "../components/SEO";
import SchemaDoctor from "../components/SchemaDoctor";
import { Container } from "react-bootstrap";
import WelcomeSection from "../components/WelcomeSection";
import FAQ from "../components/FAQ";
import TechnologySection from "../components/TechnologySection";
import KnowledgePartners from "../components/KnowledgePartners";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import TreatmentsShowcase from "../components/TreatmentsShowcase";
import { videoLinks } from "../data/videos";
import YouTubeVideos from "../components/YouTubeVideos";


// global css
import "../styles/Home.css"; // 👈 new CSS file for banner styles
import "../styles/global.css";

function Home() {
  return (
    <>
      <SEO
        title="Neuron Brain & Spine Center | Neurosurgeon, Spine Surgeon & Pediatric Neurologist in Lucknow"
        description="Neuron Brain & Spine Center in Lucknow offers advanced neurosurgery, spine surgery and pediatric neurology care by Dr Achal Gupta and Dr Konika Bansal using modern minimally invasive treatment approaches."
        keywords="Neuron Brain and Spine Center, Neurosurgeon Lucknow, Spine Surgeon Lucknow, Pediatric Neurologist Lucknow, minimally invasive spine surgery, neurosurgery Lucknow"
        image="/assets/images/og-image.jpg"
      />


      <SchemaDoctor />

      <section className="hero text-center py-2">
        <Container>
          <img
            className="main-banner"
            src="/assets/banner/homePageBanner.png"
            alt="Main banner showing the doctor and clinic theme"
          />
        </Container>
      </section>

      {/* 🌟 Content Sections */}
      <WelcomeSection />
      <TreatmentsShowcase />
      <TechnologySection />
      <KnowledgePartners />
      <Testimonials />
      <YouTubeVideos videos={videoLinks} />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}

export default Home;
