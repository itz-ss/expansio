import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Achievements.css";

export default function AchievementGallery({ achievement }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container className="py-4">
      <h2 className="achievement-heading">{achievement.Name}</h2>

      {achievement.processed_pages?.map((pdf) => (
        <div key={pdf.pdfName} className="mb-5">
          <h4 className="pdf-title">{pdf.pdfName}</h4>

          {/* Pinterest Masonry Layout */}
          <motion.div
            className="masonry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {pdf.pages.map((page) => (
              <motion.div
                key={page.page}
                className="masonry-item"
                onClick={() => setSelectedImage(page.url)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={page.url}
                  alt={`Page ${page.page}`}
                  className="masonry-img"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Full-screen modal preview */}
      <AnimatePresence>
        {selectedImage && (
          <Modal
            show
            centered
            size="xl"
            onHide={() => setSelectedImage(null)}
            className="img-preview-modal"
          >
            <Modal.Body className="text-center p-0">
              <motion.img
                src={selectedImage}
                alt="Preview"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="modal-full-img"
              />
            </Modal.Body>
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
}
