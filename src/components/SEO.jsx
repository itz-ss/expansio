// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function SEO({
  title = "Expansio | Build, Scale & Launch Digital Products",
  description = "Expansio is a modern digital solutions company delivering high-performance websites, scalable applications, branding, and growth-focused technology solutions.",
  keywords = "Expansio, digital agency, web development, product design, SaaS development, startup solutions, branding, full stack development",
  image = "/assets/ExpansioLogo.png",
  type = "website",
  twitterUsername = ""
}) {

  const location = useLocation();
  
  const siteUrl = "https://expansio.in"; // site domain for canonical and absolute assets

  const canonicalUrl = `${siteUrl}${location.pathname}`;

  const ogImage = image && image.startsWith("http") ? image : `${siteUrl}${image}`;  // absolute OG image URL


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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />

      {/* Prevent duplicate tags */}
      <meta name="application-name" content="Expansio" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Expansio",
              "url": siteUrl,
              "logo": `${siteUrl}/assets/ExpansioLogo.png`
            },
            {
              "@type": "WebSite",
              "url": siteUrl,
              "name": title,
              "publisher": {
                "@type": "Organization",
                "name": "Expansio"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}

export default SEO;
