import "./LearnMoreWed.css";

export default function LearnMoreWed({ onClose }) {
  return (
    <div className="lm-overlay" onClick={onClose}>
      <div className="lm-card" onClick={(e) => e.stopPropagation()}>

        <button className="lm-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="lm-header">
          <span className="lm-tag">Past Event</span>
          <h2 className="lm-title">
            MTCC Celebrates <br />
            <span className="lm-title-accent">World Engineering Day 2026 through Open House</span>
          </h2>
          <p className="lm-date">📅 March 4, 2026</p>
        </div>

        <div className="lm-divider" />

        <div className="lm-body">

          <div className="lm-block">
            <h3 className="lm-section-title">🌍 What is World Engineering Day?</h3>
            <p className="lm-text">
              World Engineering Day for Sustainable Development is celebrated every <strong>March 4</strong> as proclaimed by UNESCO. It recognizes the vital role engineers and engineering play in our modern world — from infrastructure and energy to health, communication, and beyond.
            </p>
          </div>

          <div className="lm-block">
            <h3 className="lm-section-title">🏛️ What MTCC Had in Store</h3>
            <p className="lm-text">
              The Material Testing and Calibration Center celebrated this occasion by opening its doors to engineering students, faculty, professionals, and the general public through a special <strong>Open House event</strong>.
            </p>
            <div className="lm-highlights">
              <div className="lm-highlight-item">
                <span className="lm-highlight-icon">🏢</span>
                <div>
                  <strong>Office Tour</strong>
                  <p>Visitors were welcomed into MTCC's offices, getting a firsthand look at how the center operates and the dedicated team behind its services.</p>
                </div>
              </div>
              <div className="lm-highlight-item">
                <span className="lm-highlight-icon">🔬</span>
                <div>
                  <strong>Laboratory Tour</strong>
                  <p>Guests explored MTCC's laboratories, viewing the testing equipment and facilities used in material testing and calibration work up close.</p>
                </div>
              </div>
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