import { useState } from "react";
import "./MeetTheHeads.css";

const heads = [
  {
    name: "Dr. Bryan John A. Magoling, RCh",
    role: ["Center Head"],
    email: "bryanjohn.magoling@g.batstate-u.edu.ph",
    img: "/HEADS/DR_BRYAN.jpg",
  },
  {
    name: "Angelica A. Macalalad, MChem",
    role: ["Associate Professor", "Faculty Researcher"],
    email: "angelica.macalalad@g.batstate-u.edu.ph",
    img: "/HEADS/MAAM_ANGELICA.jpg",
  },
  {
    name: "John Michael G. Antenor",
    role: ["University Research Associate I"],
    email: "johnmichael.antenor@.batstate-u.edu.ph",
    img: "/HEADS/SIR_MIGUII.jpg",
  },
  {
    name: "Ms. Indira C. Beraña",
    role: ["University Research Associate I"],
    email: "Indira.berana@g.batstate-u.edu.ph",
    img: "/HEADS/MAAM_INDI.jpg",
  },
  {
    name: "Engr. Nheil Thomas D. Reyes",
    role: ["University Research Associate I", "URISNAP Project"],
    email: "nheilthomas.reyes@g.batstate-u.edu.ph",
    img: "/HEADS/SIR_NHEIL.jpg",
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
                  <div className="mh-roles">
                    {head.role.map((r, ri) => (
                      <span className="mh-role" key={ri}>{r}</span>
                    ))}
                  </div>
                  <a className="mh-email" href={`mailto:${head.email}`} title={head.email}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>{head.email}</span>
                  </a>
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