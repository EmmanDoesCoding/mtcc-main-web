import "./LearnMore.css";

export default function LearnMore({ onClose }) {
  return (
    <div className="lm-overlay" onClick={onClose}>
      <div className="lm-card" onClick={(e) => e.stopPropagation()}>

        <button className="lm-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="lm-header">
          <span className="lm-tag">Featured Event</span>
          <h2 className="lm-title">
            MTCC Lecture Series: <br />
            <span className="lm-title-accent">Sample Purification and Concentration Techniques for Materials and Biotechnology Research</span>
          </h2>
          <p className="lm-date">📅 March 30, 2026</p>
        </div>

        <div className="lm-divider" />

        <div className="lm-body">

          <div className="lm-block">
            <h3 className="lm-section-title">🔬 About the Event</h3>
            <p className="lm-text">
              The MTCC Lecture Series is a seminar and hands-on demonstration focused on sample purification and concentration techniques essential for materials and biotechnology research. The event highlighted the use of three specialized instruments: the <strong>Freeze Dryer</strong>, the <strong>Ultracentrifuge</strong>, and the <strong>Rotary Evaporator</strong> — covering their principles, applications, and proper operation.
            </p>
          </div>

          <div className="lm-block">
            <h3 className="lm-section-title">🗓️ Program Flow</h3>
            <div className="lm-highlights">
              <div className="lm-highlight-item">
                <span className="lm-highlight-icon">🌅</span>
                <div>
                  <strong>Morning Session — Lecture</strong>
                  <p>Held at the <strong>Audio Visual Room, 4th Floor</strong>. Participants attended talks covering the science and practical usage of the Freeze Dryer, Ultracentrifuge, and Rotary Evaporator in research applications.</p>
                </div>
              </div>
              <div className="lm-highlight-item">
                <span className="lm-highlight-icon">🌆</span>
                <div>
                  <strong>Afternoon Session — Demonstration</strong>
                  <p>Conducted at the <strong>MTCC, 1st Floor</strong>. Participants observed and engaged in live equipment demonstrations, witnessing firsthand how the instruments work in an actual laboratory setting.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lm-block">
            <h3 className="lm-section-title">🎓 Participants</h3>
            <p className="lm-text">The event welcomed students and faculty members from the following programs:</p>
            <div className="lm-highlights">
              <div className="lm-highlight-item"><span className="lm-highlight-icon">🧪</span><div><strong>BS Chemistry</strong></div></div>
              <div className="lm-highlight-item"><span className="lm-highlight-icon">🧬</span><div><strong>BS Biology</strong></div></div>
              <div className="lm-highlight-item"><span className="lm-highlight-icon">⛽</span><div><strong>BS Petroleum Engineering</strong></div></div>
              <div className="lm-highlight-item"><span className="lm-highlight-icon">🏥</span><div><strong>BS Biomedical Engineering</strong></div></div>
              <div className="lm-highlight-item"><span className="lm-highlight-icon">⚗️</span><div><strong>BS Chemical Engineering</strong></div></div>
              <div className="lm-highlight-item"><span className="lm-highlight-icon">🍱</span><div><strong>BS Food Engineering</strong></div></div>
            </div>
          </div>

        </div>

        <div className="lm-footer">
          <p className="lm-footer-note">For inquiries, reach us through the Contact Us section of this page.</p>
          <button className="lm-close-btn" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
}