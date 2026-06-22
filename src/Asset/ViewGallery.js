import { useState } from "react";
import "./ViewGallery.css";

const images = Array.from({ length: 84 }, (_, i) => ({
  id: i,
  src: `/MLS/${i}.JPG`,
  srcFallbacks: [`/MLS/${i}.jpg`, `/MLS/${i}.jpeg`, `/MLS/${i}.JPEG`],
  label: `MTCC Lecture Series Photo ${i}`,
}));

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
      <div className="vg-overlay" onClick={onClose}>
        <div className="vg-card" onClick={(e) => e.stopPropagation()}>

          <div className="vg-header">
            <div>
              <span className="vg-tag">Event Photos · March 30, 2026</span>
              <h2 className="vg-title">MTCC Lecture Series — Sample Purification and Concentration Techniques</h2>
            </div>
            <button className="vg-close" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <div className="vg-grid">
          {images.map((img, i) => (
            <div key={img.id} className="vg-thumb" onClick={() => openLightbox(i)}>
            <img
            src={img.src}
            alt={img.alt}
            onError={(e) => {
            const fallbacks = img.srcFallbacks;
            const currentSrc = e.target.src;
            const nextFallback = fallbacks.find(f => !currentSrc.endsWith(f.split("/MLS/")[1]));
            if (nextFallback) e.target.src = nextFallback;
          }}
        />
      <div className="vg-thumb-overlay">
        <span className="vg-zoom-icon">⤢</span>
      </div>
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
