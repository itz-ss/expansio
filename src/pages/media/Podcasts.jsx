// -------------------------------------------------------
// PODCASTS PAGE — IMAGE MASONRY + VIDEO GRID + LIGHTBOX
// -------------------------------------------------------

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import SEO from "../../components/SEO";
import { fetchPodcasts } from "../../services/strapi";
import { STRAPI_URL } from "../../config";
import "../../styles/Podcasts.css";

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
   MAIN COMPONENT
----------------------------------------------------- */
const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [expandedGuests, setExpandedGuests] = useState({});

  // Lightbox
  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    index: 0,
  });

  const touchStartX = useRef(0);

  /* -----------------------------------------------------
     LOAD PODCASTS
  ----------------------------------------------------- */
  useEffect(() => {
    const load = async () => {
      const data = await fetchPodcasts();

      const sorted = [...(data || [])].sort(
        (a, b) =>
          new Date(b.updatedAt || b.createdAt) -
          new Date(a.updatedAt || a.createdAt)
      );

      setPodcasts(sorted);
      setLoading(false);
    };
    load();
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "auto";
  }, [lightbox.open]);

  /* -----------------------------------------------------
     FLATTEN PODCAST → IMAGES + VIDEOS
  ----------------------------------------------------- */
  const getMedia = (podcast) => {
    const items = Array.isArray(podcast.Podcast)
      ? podcast.Podcast
      : podcast.Podcast
      ? [podcast.Podcast]
      : [];

    const images = [];
    const videos = [];

    items.forEach((item, i) => {
      const base = {
        guestName: podcast.guestName,
        guestDesignation: podcast.guestDesignation,
        title: item.title,
        description: item.description,
      };

      /* IMAGES ------------------------ */
      if (item.Thumbnail?.url) {
        images.push({
          ...base,
          type: "image",
          src: item.Thumbnail.formats?.large?.url ||
               item.Thumbnail.formats?.medium?.url ||
               item.Thumbnail.url,
          id: `img-${podcast.id}-${i}`,
        });
      }

      if (Array.isArray(item.gallery)) {
        item.gallery.forEach((g, gi) =>
          images.push({
            ...base,
            type: "image",
            src: g.formats?.large?.url ||
                 g.formats?.medium?.url ||
                 g.url,
            id: `gal-${podcast.id}-${i}-${gi}`,
          })
        );
      }

      /* VIDEOS ------------------------ */
      if (item.videoLink) {
        const id = extractYouTubeID(item.videoLink);
        if (id) {
          videos.push({
            ...base,
            type: "videoEmbed",
            embedUrl: `https://www.youtube.com/embed/${id}`,
            thumb: getYouTubeThumbnail(item.videoLink),
            id: `yt-${podcast.id}-${i}`,
          });
        }
      }

      if (item.videoFile?.url) {
        videos.push({
          ...base,
          type: "videoFile",
          fileUrl: STRAPI_URL + item.videoFile.url,
          thumb: "/video-default.png",
          id: `vf-${podcast.id}-${i}`,
        });
      }
    });

    return { images, videos };
  };

  /* -----------------------------------------------------
     SEARCH
  ----------------------------------------------------- */
  const applySearch = (term, items) => {
    if (!term.trim()) return items;
    const t = term.toLowerCase();

    return items.filter(
      (x) =>
        x.title?.toLowerCase().includes(t) ||
        x.description?.toLowerCase().includes(t) ||
        x.guestName?.toLowerCase().includes(t) ||
        x.guestDesignation?.toLowerCase().includes(t)
    );
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
    if (item.type === "image")
      return <img className="lightbox-media" src={item.src} alt={item.title} />;

    if (item.type === "videoEmbed")
      return (
        <div className="lightbox-video-wrapper">
          <iframe src={item.embedUrl} allowFullScreen />
        </div>
      );

    return (
      <video className="lightbox-media" src={item.fileUrl} controls autoPlay />
    );
  };

  /* -----------------------------------------------------
     PAGE RENDER
  ----------------------------------------------------- */
  if (loading) return <p className="media-page">Loading podcasts...</p>;

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
        <h1>Podcasts</h1>
        <p>Talks, interviews & knowledge sessions</p>
      </header>

      {/* 🔍 SEARCH */}
      <div className="event-search-bar">
        <input
          type="text"
          placeholder="Search guest / title / description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* -------------------------------------------------
         PER-GUEST SECTION
      ------------------------------------------------- */}
      {podcasts.map((pod) => {
        const { images, videos } = getMedia(pod);

        const filteredImages = applySearch(search, images);
        const filteredVideos = applySearch(search, videos);

        if (filteredImages.length === 0 && filteredVideos.length === 0)
          return null;

        const expanded = expandedGuests[pod.id];

        const visibleImages = expanded
          ? filteredImages
          : filteredImages.slice(0, 18);

        const visibleVideos = expanded
          ? filteredVideos
          : filteredVideos.slice(0, 18);

        return (
          <section key={pod.id} className="event-date-block">
            <h2 className="event-date-heading">
              🎙️ {pod.guestName} — {pod.guestDesignation}
            </h2>

            {/* ⭐ IMAGE MASONRY */}
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

            {/* ⭐ VIDEO GRID (4 per row) */}
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

            {/* SHOW MORE */}
            {(filteredImages.length > 18 || filteredVideos.length > 18) && (
              <div className="media-loadmore-wrapper">
                <button
                  className="media-loadmore"
                  onClick={() =>
                    setExpandedGuests((prev) => ({
                      ...prev,
                      [pod.id]: !prev[pod.id],
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

      {/* -------------------------------------------------
         LIGHTBOX
      ------------------------------------------------- */}
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
              const diff =
                touchStartX.current - e.changedTouches[0].screenX;
              if (Math.abs(diff) > 60)
                diff > 0 ? nextItem() : prevItem();
            }}
          >
            <div className="lightbox-info">
              <h2>{lightbox.items[lightbox.index].title}</h2>
              <p>
                {lightbox.items[lightbox.index].guestName} —{" "}
                {lightbox.items[lightbox.index].guestDesignation}
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

export default Podcasts;
