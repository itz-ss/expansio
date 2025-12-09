// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function SEO({
  title = "Neuron Brain & Spine Center, Lucknow",
  description = "Neuron Brain and Spine Center offers advanced neurosurgery, spine surgery, pediatric neurology and minimally invasive treatments.",
  keywords = "neurosurgery, spine surgery, pediatric neurology, brain surgery, spine specialist, Lucknow",
  image = "/assets/images/og-image.jpg",
  type = "website",
  twitterUsername = "@neuronbrainandspine"
}) {

  const location = useLocation();
  
  const siteUrl = "https://neuronbrainandspine.in"; // <<< CHANGE to your domain

  const canonicalUrl = `${siteUrl}${location.pathname}`;


  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* DESCRIPTION */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />

      {/* Prevent duplicate tags */}
      <meta name="application-name" content="Neuron Brain & Spine Center" />
    </Helmet>
  );
}

export default SEO;
