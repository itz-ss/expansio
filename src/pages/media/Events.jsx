// -------------------------------------------------------
// EVENTS PAGE — IMAGE MASONRY + VIDEO GRID + LIGHTBOX
// -------------------------------------------------------

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchEvents } from "../../services/strapi";
import SEO from "../../components/SEO";
import { STRAPI_URL } from "../../config";
import "../../styles/Events.css";

/* -----------------------------------------------------
   YOUTUBE HELPERS
----------------------------------------------------- */
const extractYouTubeID = (url) => {
  if (!url) return null;

  if (url.includes("watch?v=")) return url.split("watch?v=")[1].split("&")[0];
  if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0];
  if (url.includes("shorts/")) return url.split("shorts/")[1].split("?")[0];
  if (url.includes("embed/")) return url.split("embed/")[1].split("?")[0];

  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url;

  return null;
};

const getYouTubeThumbnail = (url) => {
  const id = extractYouTubeID(url);
  if (!id) return "/video-default.png";
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};

/* -----------------------------------------------------
   MAIN
----------------------------------------------------- */
const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expandedDates, setExpandedDates] = useState({});
  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    index: 0,
  });

  const touchStartX = useRef(0);

  /* -----------------------------------------------------
     LOAD EVENTS
  ----------------------------------------------------- */
  useEffect(() => {
    const load = async () => {
      const data = await fetchEvents();
      const sorted = [...(data || [])].sort(
        (a, b) => new Date(b.Date) - new Date(a.Date)
      );
      setEvents(sorted);
      setLoading(false);
    };
    load();
  }, []);

  /* Disable scroll when lightbox opens */
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "auto";
  }, [lightbox.open]);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  /* -----------------------------------------------------
     FLATTEN EVENT → IMAGES + VIDEOS
  ----------------------------------------------------- */
  const getEventMedia = (event) => {
    const blocks = event.Events || [];

    const images = [];
    const videos = [];

    blocks.forEach((item, i) => {
      const base = {
        title: item.title,
        description: item.description,
        parentDate: event.Date,
        parentLocation: event.location,
      };

      /* IMAGES ------------------------------- */
      if (item.Thumbnail?.url) {
        images.push({
          ...base,
          type: "image",
          src: item.Thumbnail.url,
          id: `img-${event.id}-${i}`,
        });
      }

      if (Array.isArray(item.gallery)) {
        item.gallery.forEach((img, gi) =>
          images.push({
            ...base,
            type: "image",
            src: img.url,
            id: `gal-${event.id}-${i}-${gi}`,
          })
        );
      }

      /* VIDEOS ------------------------------- */
      if (item.videoLink) {
        const id = extractYouTubeID(item.videoLink);
        if (id) {
          videos.push({
            ...base,
            type: "videoEmbed",
            embedUrl: `https://www.youtube.com/embed/${id}`,
            thumb: getYouTubeThumbnail(item.videoLink),
            id: `yt-${event.id}-${i}`,
          });
        }
      }

      if (item.videoFile?.url) {
        videos.push({
          ...base,
          type: "videoFile",
          fileUrl: STRAPI_URL + item.videoFile.url,
          thumb: "/video-default.png",
          id: `vf-${event.id}-${i}`,
        });
      }
    });

    return { images, videos };
  };

  /* -----------------------------------------------------
     SEARCH
  ----------------------------------------------------- */
  const searchFilter = (term, arr) => {
    if (!term.trim()) return arr;

    const t = term.toLowerCase();

    return arr.filter((item) => {
      return (
        (item.title || "").toLowerCase().includes(t) ||
        (item.description || "").toLowerCase().includes(t) ||
        (item.parentLocation || "").toLowerCase().includes(t) ||
        formatDate(item.parentDate).toLowerCase().includes(t)
      );
    });
  };

  /* -----------------------------------------------------
     LIGHTBOX
  ----------------------------------------------------- */
  const openLightbox = (items, index) =>
    setLightbox({ open: true, items, index });

  const closeLightbox = () =>
    setLightbox({ open: false, items: [], index: 0 });

  const nextItem = () =>
    setLightbox((p) => ({
      ...p,
      index: (p.index + 1) % p.items.length,
    }));

  const prevItem = () =>
    setLightbox((p) => ({
      ...p,
      index: p.index === 0 ? p.items.length - 1 : p.index - 1,
    }));

  const renderLightboxMedia = (item) => {
    if (!item) return null;

    if (item.type === "image")
      return <img className="lightbox-media" src={item.src} alt="" />;

    if (item.type === "videoEmbed")
      return (
        <div className="lightbox-video-wrapper">
          <iframe src={item.embedUrl} allowFullScreen />
        </div>
      );

    if (item.type === "videoFile")
      return (
        <video className="lightbox-media" src={item.fileUrl} controls autoPlay />
      );

    return null;
  };

  /* -----------------------------------------------------
     MAIN RENDER
  ----------------------------------------------------- */
  if (loading) return <p className="media-page">Loading events...</p>;

  return (
    <>
    <SEO
      title="Events | Neuron Brain & Spine Center | Medical Awareness & Public Education"
      description="Stay updated with events and medical awareness activities from Neuron Brain & Spine Center led by Dr Achal Gupta and Dr Konika Bansal including camps, awareness programs and conferences."
      keywords="neurosurgery events, medical events, pediatric neurology events, health awareness events, neuron brain and spine center events"
      image="/assets/banner/homePageBanner.png"
    />

    <div className="media-page">
      <header className="media-header">
        <h1>Events</h1>
        <p>Awareness programs, workshops & public education sessions.</p>
      </header>

      {/* SEARCH BAR */}
      <div className="event-search-bar">
        <input
          type="text"
          placeholder="Search by title, description, location or date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* EACH EVENT DATE */}
      {events.map((event) => {
        const { images, videos } = getEventMedia(event);

        const filteredImages = searchFilter(search, images);
        const filteredVideos = searchFilter(search, videos);

        if (filteredImages.length === 0 && filteredVideos.length === 0)
          return null;

        const expanded = expandedDates[event.id];

        const visibleImages = expanded
          ? filteredImages
          : filteredImages.slice(0, 18);
        const visibleVideos = expanded
          ? filteredVideos
          : filteredVideos.slice(0, 18);

        return (
          <section key={event.id}>
            <h2 className="event-date-heading">
              {event.location}
            </h2>

            {/* ---------- IMAGE MASONRY ---------- */}
            {visibleImages.length > 0 && (
              <div className="events-masonry">
                {visibleImages.map((item) => (
                  <div
                    key={item.id}
                    className="events-masonry-item"
                    onClick={() =>
                      openLightbox(filteredImages, filteredImages.indexOf(item))
                    }
                  >
                    <img src={item.src} className="events-masonry-img" />
                  </div>
                ))}
              </div>
            )}

            {/* ---------- VIDEO GRID (4 per row) ---------- */}
            {visibleVideos.length > 0 && (
              <div className="events-video-grid">
                {visibleVideos.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      openLightbox(filteredVideos, filteredVideos.indexOf(item))
                    }
                  >
                    <img
                      src={item.thumb}
                      className="events-video-thumb"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            )}

            {/* SHOW MORE BUTTON */}
            {(filteredImages.length > 18 || filteredVideos.length > 18) && (
              <div className="media-loadmore-wrapper">
                <button
                  className="media-loadmore"
                  onClick={() =>
                    setExpandedDates((prev) => ({
                      ...prev,
                      [event.id]: !prev[event.id],
                    }))
                  }
                >
                  {expanded ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </section>
        );
      })}

      {/* -----------------------------------------------------
         LIGHTBOX
      ----------------------------------------------------- */}
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
            onTouchStart={(e) =>
              (touchStartX.current = e.changedTouches[0].screenX)
            }
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].screenX;
              if (Math.abs(diff) > 60)
                diff > 0 ? nextItem() : prevItem();
            }}
          >
            <div className="lightbox-info">
              <h2>{lightbox.items[lightbox.index].title}</h2>
              <p>
                {formatDate(lightbox.items[lightbox.index].parentDate)} •{" "}
                {lightbox.items[lightbox.index].parentLocation}
              </p>
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

export default Events;
