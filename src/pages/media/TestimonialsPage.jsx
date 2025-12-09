// -------------------------------------------------------
// TESTIMONIALS PAGE — GLOBAL GRID + FIXED LIGHTBOX + YOUTUBE SHORTS FIX + THUMBNAIL FIX
// -------------------------------------------------------

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchTestimonials } from "../../services/strapi";
import { STRAPI_URL } from "../../config";
import SEO from "../../components/SEO";
import "../../styles/TestimonialsPage.css";

// ⭐ Extract YouTube VIDEO ID from ANY link
const extractYouTubeID = (url) => {
  if (!url) return null;

  if (url.includes("watch?v=")) return url.split("watch?v=")[1].split("&")[0];
  if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0];
  if (url.includes("shorts/")) return url.split("shorts/")[1].split("?")[0];
  if (url.includes("embed/")) return url.split("embed/")[1].split("?")[0];

  // Already ID
  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url;

  return null;
};

// ⭐ Generate default YouTube thumbnail
const getYouTubeThumbnail = (url) => {
  const id = extractYouTubeID(url);
  if (!id) return null;

  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(30);

  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    index: 0,
  });

  const touchStartX = useRef(0);

  // Load testimonials
  useEffect(() => {
    const load = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data || []);
      setLoading(false);
    };
    load();
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "auto";
  }, [lightbox.open]);

  const openLightbox = (items, index) =>
    setLightbox({ open: true, items, index });

  const closeLightbox = () =>
    setLightbox({ open: false, items: [], index: 0 });

  const nextItem = () =>
    setLightbox((p) => ({ ...p, index: (p.index + 1) % p.items.length }));

  const prevItem = () =>
    setLightbox((p) => ({
      ...p,
      index: p.index === 0 ? p.items.length - 1 : p.index - 1,
    }));

  // ⭐ Render media inside lightbox
  const renderLightboxMedia = (item) => {
    if (item.type === "videoEmbed") {
      return (
        <div className="lightbox-video-wrapper">
          <iframe src={item.embedUrl} allowFullScreen />
        </div>
      );
    }

    if (item.type === "videoFile") {
      return (
        <video className="lightbox-media" src={item.fileUrl} controls autoPlay />
      );
    }

    return <img className="lightbox-media" src={item.src} alt={item.title} />;
  };

  // ⭐ Flatten testimonials -> gallery items
  const flattenTestimonials = testimonials.flatMap((t) => {
    const items = t.Testimonial ? [t.Testimonial] : [];
    const final = [];

    items.forEach((item, i) => {
      const base = {
        patientName: t.patientName,
        title: item.title,
        description: item.description,
        videoLink: item.videoLink || null, // ⭐ needed for thumbnail fallback
      };

      // Thumbnail from Strapi
      if (item.Thumbnail?.url) {
        final.push({
          ...base,
          type: "image",
          src: item.Thumbnail.url,
          thumb: item.Thumbnail.url,
          id: `thumb-${t.id}-${i}`,
        });
      }

      // Gallery
      if (Array.isArray(item.gallery?.data)) {
        item.gallery.data.forEach((g, gi) =>
          final.push({
            ...base,
            type: "image",
            src: g.attributes.url,
            thumb: g.attributes.url,
            id: `gal-${t.id}-${i}-${gi}`,
          })
        );
      }

      // ⭐ YouTube videos (Shorts + normal)
      if (item.videoLink) {
        const id = extractYouTubeID(item.videoLink);
        if (id) {
          final.push({
            ...base,
            type: "videoEmbed",
            embedUrl: `https://www.youtube.com/embed/${id}`,
            thumb: getYouTubeThumbnail(item.videoLink), // ⭐ default thumbnail
            id: `yt-${t.id}-${i}`,
          });
        }
      }

      // MP4 file
      if (item.videoFile?.url) {
        final.push({
          ...base,
          type: "videoFile",
          fileUrl: STRAPI_URL + item.videoFile.url,
          thumb: "/video-default-thumb.jpg",
          id: `vf-${t.id}-${i}`,
        });
      }
    });

    return final;
  });

  // Search filter
  const filtered = flattenTestimonials.filter((x) => {
    const term = search.toLowerCase();
    return (
      x.title?.toLowerCase().includes(term) ||
      x.description?.toLowerCase().includes(term) ||
      x.patientName?.toLowerCase().includes(term)
    );
  });

  if (loading) return <p className="media-page">Loading testimonials...</p>;

  return (
    <>
    <SEO
      title="Patient Testimonials | Neuron Brain & Spine Center Lucknow"
      description="Read real patient reviews and success stories about treatments by Dr Achal Gupta and Dr Konika Bansal at Neuron Brain & Spine Center specializing in neurosurgery, spine surgery and pediatric neurology."
      keywords="neurosurgeon testimonials, pediatric neurologist reviews, spine surgery testimonials, neuron brain and spine center reviews"
      image="/assets/images/og-image.jpg"
    />

    <div className="media-page">
      <header className="media-header">
        <h1>Testimonials</h1>
        <p>Real experiences and healing journeys</p>
      </header>

      {/* Search */}
      <div className="event-search-bar">
        <input
          type="text"
          placeholder="Search patient / title / description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="events-grid">
        {filtered.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={item.id}
            className="event-card"
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(filtered, index)}
          >
            <img
              src={
                item.thumb ||
                getYouTubeThumbnail(item.videoLink) || // ⭐ fallback thumbnail
                "/no-thumb.png"
              }
              alt={item.title}
              className="event-thumb"
            />

            <p className="event-card-title">{item.patientName}</p>
          </motion.div>
        ))}
      </div>

      {/* LOAD MORE */}
      {filtered.length > visibleCount && (
        <div className="media-loadmore-wrapper">
          <button
            className="media-loadmore"
            onClick={() => setVisibleCount((v) => v + 30)}
          >
            Show More
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            ✕
          </button>

          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevItem();
            }}
          >
            ‹
          </button>

          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextItem();
            }}
          >
            ›
          </button>

          <div
            className="lightbox-media-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-info">
              <h2>{lightbox.items[lightbox.index].title}</h2>
              <p>{lightbox.items[lightbox.index].patientName}</p>
            </div>

            {renderLightboxMedia(lightbox.items[lightbox.index])}

            {lightbox.items[lightbox.index].description && (
              <div className="lightbox-description">
                <ReactMarkdown>
                  {lightbox.items[lightbox.index].description}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default TestimonialsPage;
