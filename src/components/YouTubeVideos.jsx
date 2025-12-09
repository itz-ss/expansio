import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/YouTubeVideos.css";

const YouTubeVideos = ({ videos }) => {
  const [index, setIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);

  const slidesToShow = window.innerWidth < 768 ? 1 : 2;

  const nextSlide = () => setIndex((prev) => (prev + slidesToShow) % videos.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - slidesToShow + videos.length) % videos.length);

  // 🔥 Fully compatible video ID extractor (Normal + Shorts + youtu.be)
  const getId = (url) => {
    const patterns = [
      /v=([^&]+)/,              // normal videos
      /youtu\.be\/([^?]+)/,     // youtu.be short link
      /shorts\/([^?]+)/,        // shorts
      /embed\/([^?]+)/          // embedded links
    ];
    for (const p of patterns) {
      const match = url.match(p);
      if (match) return match[1];
    }
    return null;
  };

  return (
    <div className="yt-wrapper">
      <h2 className="yt-title">Real Stories. Real Money. Real Brands Transformed.</h2>

      {/* Video Track */}
      <div className="yt-track">
        <AnimatePresence mode="popLayout">
          {videos.slice(index, index + slidesToShow).map((url) => {
            const id = getId(url);
            if (!id) return null;

            return (
              <motion.div
                key={id}
                className="yt-card"
                initial={{ opacity: 1, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45 }}
                onClick={() => setModalVideo(id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  className="yt-thumb"
                  alt="video thumbnail"
                />
                <motion.div className="yt-play">▶</motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button className="yt-btn prev" onClick={prevSlide}>←</button>
      <button className="yt-btn next" onClick={nextSlide}>→</button>

      {/* Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            className="yt-modal"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              className="yt-modal-content"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1`}
                allow="autoplay; encrypted-media; picture-in-picture"
                title="Video Player"
                allowFullScreen
              ></iframe>

              <button className="close-btn" onClick={() => setModalVideo(null)}>
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default YouTubeVideos;
