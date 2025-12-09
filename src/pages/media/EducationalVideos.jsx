// -------------------------------------------------------
// Educational Videos Page (Category-wise Pagination)
// -------------------------------------------------------
// Features:
// ✔ Fetch from Strapi
// ✔ Auto YouTube title if missing
// ✔ Dynamic category filter
// ✔ Sorting dropdown
// ✔ Group by category
// ✔ CATEGORY-WISE PAGINATION (6 per page)
// ✔ Independent page state per category
// ✔ Responsive premium UI
// -------------------------------------------------------

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchEducationalVideos } from "../../services/strapi";
import SEO from "../../components/SEO";
import "../../styles/EducationalVideos.css";

const ITEMS_PER_PAGE = 6; // ⭐ YOUR REQUIREMENT

const EducationalVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("latest");

  // ⭐ NEW: PAGE STATE PER CATEGORY
  const [pageByCategory, setPageByCategory] = useState({});

  // ⭐ When category or sorting changes → reset pages
  const resetPageFor = (cat) => {
    setPageByCategory((prev) => ({ ...prev, [cat]: 1 }));
  };

  // --- Auto-fetch missing YouTube title ---
  const fetchYouTubeTitle = async (videoLink) => {
    try {
      const idMatch =
        videoLink.match(/v=([^&]+)/) || videoLink.match(/youtu\.be\/([^?]+)/);
      const id = idMatch?.[1];
      if (!id) return null;

      const api = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`;
      const res = await fetch(api);
      const json = await res.json();
      return json.title || null;
    } catch {
      return null;
    }
  };

  // --- Fetch videos ---
  useEffect(() => {
    const load = async () => {
      const data = await fetchEducationalVideos();

      const processed = await Promise.all(
        (data || []).map(async (v) => {
          let title = v.title;
          if (!title && v.videoLink) {
            const fetched = await fetchYouTubeTitle(v.videoLink);
            if (fetched) title = fetched;
          }
          return { ...v, title };
        })
      );

      setVideos(processed);
      setLoading(false);

      // initialize all category pages to 1
      const uniqueCats = [...new Set(processed.map((v) => v.category || "Uncategorized"))];
      const pageObj = {};
      uniqueCats.forEach((c) => (pageObj[c] = 1));
      setPageByCategory(pageObj);
    };

    load();
  }, []);

  // --- Group videos ---
  const groupedByCategory = videos.reduce((acc, v) => {
    const cat = v.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(v);
    return acc;
  }, {});

  // --- Sorting videos ---
  const sortVideos = (arr) => {
    const sorted = [...arr];
    if (sortBy === "latest") sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sortBy === "oldest") sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sortBy === "asc") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "desc") sorted.sort((a, b) => b.title.localeCompare(a.title));
    return sorted;
  };

  const getStrapiFileUrl = (file) =>
    file?.url ? `http://localhost:1337${file.url}` : null;

  if (loading) return <p className="media-page">Loading videos...</p>;

  return (
    <>
    <SEO
      title="Educational Neurosurgery & Pediatric Neurology Videos | Neuron Brain & Spine Center"
      description="Watch educational videos by Dr Achal Gupta and Dr Konika Bansal on neurosurgery, spine surgery, pediatric neurology, epilepsy, autism, ADHD, and advanced brain and spine treatments."
      keywords="medical educational videos, neurosurgery videos, spine surgery videos, pediatric neurology videos, epilepsy education, brain and spine videos"
      image="/assets/banner/homePageBanner.png"
    />

    <div className="media-page">
      <header className="media-header">
        <h1>Educational Videos</h1>
        <p>Discover premium clinical awareness content — organized elegantly</p>
      </header>

      {/* FILTERS */}
      <div className="media-dropdowns">
        <select
          className="media-select"
          value={selectedCategory || ""}
          onChange={(e) => {
            setSelectedCategory(e.target.value || null);
            // reset all categories pages
            const resets = {};
            Object.keys(groupedByCategory).forEach((c) => (resets[c] = 1));
            setPageByCategory(resets);
          }}
        >
          <option value="">All Categories</option>
          {Object.keys(groupedByCategory).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="media-select"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            // reset all categories pages
            const resets = {};
            Object.keys(groupedByCategory).forEach((c) => (resets[c] = 1));
            setPageByCategory(resets);
          }}
        >
          <option value="latest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="asc">Title A–Z</option>
          <option value="desc">Title Z–A</option>
        </select>
      </div>

      {/* CATEGORY SECTIONS */}
      {Object.keys(groupedByCategory)
        .filter((cat) => !selectedCategory || selectedCategory === cat)
        .map((cat) => {
          const sortedVideos = sortVideos(groupedByCategory[cat]);
          const totalPages = Math.ceil(sortedVideos.length / ITEMS_PER_PAGE);

          // ⭐ Get this category's current page
          const currentPage = pageByCategory[cat] || 1;

          const start = (currentPage - 1) * ITEMS_PER_PAGE;
          const paginatedVideos = sortedVideos.slice(start, start + ITEMS_PER_PAGE);

          return (
            <section key={cat} className="media-section">
              {!selectedCategory && <h2 className="media-section-title">{cat}</h2>}

              <div className="media-grid">
                {paginatedVideos.map((video) => {
                  const thumbnailUrl = getStrapiFileUrl(video.thumbnail);
                  const videoFileUrl = getStrapiFileUrl(video.videoFile);

                  // YouTube link → embed URL
                  let embedUrl = null;
                  if (video.videoLink) {
                    let link = video.videoLink.trim();
                    let videoId = null;

                    if (link.includes("watch?v="))
                      videoId = link.split("watch?v=")[1].split("&")[0];
                    else if (link.includes("youtu.be/"))
                      videoId = link.split("youtu.be/")[1].split("?")[0];
                    else if (link.includes("shorts/"))
                      videoId = link.split("shorts/")[1].split("?")[0];
                    else if (link.includes("embed/"))
                      videoId = link.split("embed/")[1].split("?")[0];
                    else if (/^[a-zA-Z0-9_-]{11}$/.test(link))
                      videoId = link;

                    if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
                  }

                  return (
                    <motion.article
                      key={video.id}
                      className="media-card"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {thumbnailUrl && (
                        <div className="media-thumb">
                          <img src={thumbnailUrl} alt={video.title} />
                        </div>
                      )}

                      {video.description && (
                        <div className="media-description">
                          <ReactMarkdown>{video.description}</ReactMarkdown>
                        </div>
                      )}

                      <div className="media-actions">
                        {videoFileUrl ? (
                          <video controls className="media-video">
                            <source src={videoFileUrl} type="video/mp4" />
                          </video>
                        ) : embedUrl ? (
                          <div className="media-video youtube-embed">
                            <iframe src={embedUrl} title={video.title} allowFullScreen />
                          </div>
                        ) : (
                          <span>No playable media</span>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* ⭐ PAGINATION UI FOR THIS CATEGORY ONLY */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setPageByCategory((prev) => ({
                        ...prev,
                        [cat]: prev[cat] - 1,
                      }))
                    }
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      className={currentPage === i + 1 ? "active-page" : ""}
                      onClick={() =>
                        setPageByCategory((prev) => ({
                          ...prev,
                          [cat]: i + 1,
                        }))
                      }
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setPageByCategory((prev) => ({
                        ...prev,
                        [cat]: prev[cat] + 1,
                      }))
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </section>
          );
        })}
    </div>
    </>
  );
};

export default EducationalVideos;
