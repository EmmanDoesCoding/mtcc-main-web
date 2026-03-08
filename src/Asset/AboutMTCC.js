import "./AboutMTCC.css";

export default function AboutMTCC({ onClose }) {
  return (
    <div className="am-overlay" onClick={onClose}>
      <div className="am-card" onClick={(e) => e.stopPropagation()}>

        <button className="am-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="am-header">
          <span className="am-tag">About Us</span>
          <h2 className="am-title">Material Testing and <span className="am-accent">Calibration Center</span></h2>
          <p className="am-subtitle">Precision. Accuracy. Excellence.</p>
        </div>

        <div className="am-divider" />

        <div className="am-body">

          <div className="am-block">
            <h3 className="am-section-title">🏛️ Who We Are</h3>
            <p className="am-text">
              The Material Testing and Calibration Center (MTCC) is a specialized facility under Batangas State University — The National Engineering University (BatStateU-TNEU). Established to serve the needs of industries, academic institutions, and government agencies, MTCC provides reliable and accredited testing and calibration services rooted in scientific rigor and engineering excellence.
            </p>
          </div>

          <div className="am-block">
            <h3 className="am-section-title">🎯 Our Mission</h3>
            <p className="am-text">
              To deliver accurate, timely, and cost-effective material testing and calibration services that support quality assurance, safety, and compliance for our clients across various industries.
            </p>
          </div>

          <div className="am-block">
            <h3 className="am-section-title">👁️ Our Vision</h3>
            <p className="am-text">
              To be the leading material testing and calibration center in the region, recognized for technical competence, integrity, and commitment to national development.
            </p>
          </div>

          <div className="am-services">
            <h3 className="am-section-title">🔧 What We Offer</h3>
            <div className="am-service-grid">
              <div className="am-service-item">
                <span>⚙️</span>
                <p>Material Testing</p>
              </div>
              <div className="am-service-item">
                <span>📏</span>
                <p>Calibration Services</p>
              </div>
              <div className="am-service-item">
                <span>📋</span>
                <p>Quality Assurance</p>
              </div>
              <div className="am-service-item">
                <span>🎓</span>
                <p>Technical Training</p>
              </div>
            </div>
          </div>

        </div>

        <div className="am-footer">
          <p className="am-footer-note">Located at BatStateU TNEU Alangilan Campus, Batangas City</p>
          <button className="am-close-btn" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
}