import { useState } from "react";
import "./MeetTheHeads.css";

const heads = [
  {
    name: "Head Name Here",
    role: "Center Director",
    img: "/HEADS/head1.jpg",
    bio: "Placeholder bio for the Center Director. Update with actual information.",
  },
  {
    name: "Head Name Here",
    role: "Technical Manager",
    img: "/HEADS/MAAM_ANGELICA.jpg",
    bio: "Placeholder bio for the Technical Manager. Update with actual information.",
  },
  {
    name: "Head Name Here",
    role: "Quality Manager",
    img: "/HEADS/SIR_MIGUII.jpg",
    bio: "Placeholder bio for the Quality Manager. Update with actual information.",
  },
  {
    name: "Head Name Here",
    role: "Head Name Here",
    img: "/HEADS/MAAM_INDI.jpg",
    bio: "Placeholder bio. Update with actual information.",
  },
  {
    name: "Head Name Here",
    role: "Head Name Here",
    img: "/HEADS/SIR_NHEIL.jpg",
    bio: "Placeholder bio. Update with actual information.",
  },
];

export default function MeetTheHeads({ onClose }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="mh-overlay" onClick={onClose}>
        <div className="mh-card" onClick={(e) => e.stopPropagation()}>

          <button className="mh-close" onClick={onClose} aria-label="Close">✕</button>

          <div className="mh-header">
            <span className="mh-tag">Our Team</span>
            <h2 className="mh-title">Meet the <span className="mh-accent">Heads</span></h2>
            <p className="mh-subtitle">The people leading MTCC's mission for quality and precision.</p>
          </div>

          <div className="mh-divider" />

          <div className="mh-body">
            {heads.map((head, i) => (
              <div className="mh-person" key={i}>
                <div className="mh-avatar" onClick={() => setLightbox(i)}>
                  <img src={head.img} alt={head.name} />
                  <div className="mh-avatar-overlay">
                    <span>⤢</span>
                  </div>
                </div>
                <div className="mh-info">
                  <h3 className="mh-name">{head.name}</h3>
                  <span className="mh-role">{head.role}</span>
                  <p className="mh-bio">{head.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mh-footer">
            <button className="mh-close-btn" onClick={onClose}>Close</button>
          </div>

        </div>
      </div>

      {/* Lightbox — shows same crop as frame */}
      {lightbox !== null && (
        <div className="mh-lightbox" onClick={() => setLightbox(null)}>
          <button className="mh-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="mh-lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <img
              src={heads[lightbox].img}
              alt={heads[lightbox].name}
              className="mh-lightbox-img"
            />
          </div>
        </div>
      )}
    </>
  );
}