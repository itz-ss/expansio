import { Helmet } from "react-helmet-async";

function SchemaDoctors() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr Achal Gupta",
      "jobTitle": "Consultant Neurosurgeon & Spine Surgeon",
      "image": "https://your-domain.com/assets/images/achal.jpg",
      "description": "Dr Achal Gupta is a consultant neurosurgeon and spine surgeon specializing in minimally invasive and endoscopic spine surgery.",
      "medicalSpecialty": "Neurosurgery",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Suryodey Bank, Vibhuti Khand",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226016",
        "addressCountry": "IN"
      },
      "telephone": "+91 7080106535",
      "url": "https://your-domain.com",
      "sameAs": [
        "https://www.instagram.com/neuronbrainandspine"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr Konika Bansal",
      "jobTitle": "Pediatric Neurologist",
      "image": "https://your-domain.com/assets/images/konika.jpg",
      "description": "Dr Konika Bansal is a pediatric neurologist specializing in epilepsy, neurodevelopmental disorders, and neuromuscular diseases.",
      "medicalSpecialty": "Pediatric Neurology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Suryodey Bank, Vibhuti Khand",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226016",
        "addressCountry": "IN"
      },
      "telephone": "+91 7080106535",
      "url": "https://your-domain.com",
      "sameAs": [
        "https://www.instagram.com/neuronbrainandspine"
      ]
    }
  ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default SchemaDoctors;
