import { useState } from "react";
import "./ViewGallery.css";

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `/WED-I/FEATURE${i + 1}.JPG`,
  alt: `World Engineering Day Photo ${i + 1}`,
}));

export default function ViewGalleryWed({ onClose }) {
  const [lightbox, setLightbox] = useState(null);
  const closeLightbox = () => setLightbox(null);
  const prevImage = (e) => { e.stopPropagation(); setLightbox((p) => (p === 0 ? images.length - 1 : p - 1)); };
  const nextImage = (e) => { e.stopPropagation(); setLightbox((p) => (p === images.length - 1 ? 0 : p + 1)); };

  return (
    <>
      <div className="vg-overlay" onClick={onClose}>
        <div className="vg-card" onClick={(e) => e.stopPropagation()}>
          <div className="vg-header">
            <div>
              <span className="vg-tag">Past Event · March 4, 2026</span>
              <h2 className="vg-title">World Engineering Day — Open House</h2>
            </div>
            <button className="vg-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
          <div className="vg-grid">
            {images.map((img, i) => (
              <div key={img.id} className="vg-thumb" onClick={() => setLightbox(i)}>
                <img src={img.src} alt={img.alt} />
                <div className="vg-thumb-overlay"><span className="vg-zoom-icon">⤢</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {lightbox !== null && (
        <div className="vg-lightbox" onClick={closeLightbox}>
          <button className="vg-lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="vg-lightbox-arrow vg-lightbox-prev" onClick={prevImage}>&#8592;</button>
          <div className="vg-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightbox].src} alt={images[lightbox].alt} className="vg-lightbox-img" />
            <p className="vg-lightbox-counter">{lightbox + 1} / {images.length}</p>
          </div>
          <button className="vg-lightbox-arrow vg-lightbox-next" onClick={nextImage}>&#8594;</button>
        </div>
      )}
    </>
  );
}