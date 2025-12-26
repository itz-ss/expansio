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
        title="Expansio | Build, Scale & Launch Digital Products"
        description="Expansio builds and scales high-performance websites, web and mobile apps, and brands that help startups and businesses grow."
        keywords="Expansio, digital agency, web development, product design, branding, growth marketing"
        image="/assets/ExpansioLogo.png"
      />


      <SchemaDoctor />
<section className="hero text-center py-2">
  <Container className="banner-wrapper">
      
      {/* Banner Image */}
      <img
        className="main-banner"
        src="/assets/banners/hb.jpg"
        alt="expansio banner"
      />

      {/* ⭐ YOUR TEXT OVER THE BANNER */}
      <div className="banner-text-overlay">
        <h1>Your Business. Your Growth. Your Empire.</h1>
        <p>Expansio Builds Brands That Customers Never Forget.</p>
      </div>

  </Container>
</section>


      {/* 🌟 Content Sections */}
      <WelcomeSection />
      <TreatmentsShowcase />
      <TechnologySection />
      {/* <KnowledgePartners /> */}
      <Testimonials />
      {/* <YouTubeVideos videos={videoLinks} /> */}
      <WhyChooseUs />
      <FAQ />
    </>
  );
}

export default Home;
