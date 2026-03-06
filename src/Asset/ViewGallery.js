import { useState } from "react";
import "./ViewGallery.css";

const images = [
  { id: 1, src: "/WED-I/FEATURE1.JPG", alt: "Event Photo 1" },
  { id: 2, src: "/WED-I/FEATURE2.JPG", alt: "Event Photo 2" },
  { id: 3, src: "/WED-I/FEATURE3.JPG", alt: "Event Photo 3" },
  { id: 4, src: "/WED-I/FEATURE4.JPG", alt: "Event Photo 4" },
  { id: 5, src: "/WED-I/FEATURE5.JPG", alt: "Event Photo 5" },
  { id: 6, src: "/WED-I/FEATURE6.JPG", alt: "Event Photo 6" },
  { id: 7, src: "/WED-I/FEATURE7.JPG", alt: "Event Photo 7" },
  { id: 8, src: "/WED-I/FEATURE8.JPG", alt: "Event Photo 8" },
  { id: 9, src: "/WED-I/FEATURE9.JPG", alt: "Event Photo 9" },
];

export default function ViewGallery({ onClose }) {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Gallery Modal */}
      <div className="vg-overlay" onClick={onClose}>
        <div className="vg-card" onClick={(e) => e.stopPropagation()}>

          <div className="vg-header">
            <div>
              <span className="vg-tag">Event Photos</span>
              <h2 className="vg-title">World Engineering Day — Open House</h2>
            </div>
            <button className="vg-close" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <div className="vg-grid">
            {images.map((img, i) => (
              <div
                key={img.id}
                className="vg-thumb"
                onClick={() => openLightbox(i)}
              >
                <img src={img.src} alt={img.alt} />
                <div className="vg-thumb-overlay">
                  <span className="vg-zoom-icon">⤢</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="vg-lightbox" onClick={closeLightbox}>
          <button className="vg-lightbox-close" onClick={closeLightbox}>✕</button>

          <button className="vg-lightbox-arrow vg-lightbox-prev" onClick={prevImage}>&#8592;</button>

          <div className="vg-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="vg-lightbox-img"
            />
            <p className="vg-lightbox-counter">{lightbox + 1} / {images.length}</p>
          </div>

          <button className="vg-lightbox-arrow vg-lightbox-next" onClick={nextImage}>&#8594;</button>
        </div>
      )}
    </>
  );
}