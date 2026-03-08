import "./BioTech.css";

const services = [
  {
    category: "General Tests",
    items: [
      { name: "pH Measurement", price: "150" },
      { name: "Photoelectric Speed Measurement", price: "240" },
    ],
  },
  {
    category: "Centrifuge (Non-Refrigerated)",
    note: null,
    items: [
      { name: "Per use, up to the first hour", price: "150" },
      { name: "For every succeeding hour thereafter", price: "+75", badge: "Add-on" },
    ],
  },
  {
    category: "Centrifuge (Refrigerated)",
    items: [
      { name: "Per use, up to the first hour", price: "200" },
      { name: "For every succeeding hour thereafter", price: "+150", badge: "Add-on" },
    ],
  },
  {
    category: "Ultracentrifuge",
    items: [
      { name: "Per use, up to the first hour", price: "500" },
      { name: "For every succeeding hour thereafter", price: "+250", badge: "Add-on" },
    ],
  },
  {
    category: "Rotary Evaporator",
    items: [
      { name: "Per use, up to the first hour", price: "500" },
      { name: "For every succeeding hour thereafter", price: "+250", badge: "Add-on" },
    ],
  },
  {
    category: "Freeze Dryer",
    items: [
      { name: "Per use, up to the first hour", price: "400" },
      { name: "For every succeeding hour thereafter", price: "+200", badge: "Add-on" },
    ],
  },
  {
    category: "Other Equipment",
    items: [
      { name: "Nanoparticle Tracking Analyzer", sub: "per sample", price: "1,000" },
      { name: "Heating Plate and Magnetic Stirring", sub: "per hour", price: "240" },
    ],
  },
  {
    category: "UV-VIS Spectroscopy",
    items: [
      {
        name: "Direct reading of one 96-well plate",
        price: "1,000",
        note: "No sample preparation; consumables, standards and reagents to be provided by client.",
      },
      {
        name: "Reading of one 96-well plate",
        sub: "with service fee",
        price: "1,000+",
        badge: "Varies",
        note: "Consumables, standards, and reagents provided by biotechnology lab. Service fee varies depending on requested assay.",
      },
    ],
  },
];

export default function BioTech({ onClose }) {
  return (
    <div className="bt-overlay" onClick={onClose}>
      <div className="bt-card" onClick={(e) => e.stopPropagation()}>

        <button className="bt-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="bt-header">
          <span className="bt-tag">Services & Pricing</span>
          <h2 className="bt-title">Bio<span className="bt-accent">Tech</span></h2>
          <p className="bt-subtitle">Specialized biotechnology laboratory services for research and analysis.</p>
        </div>

        {/* Photo */}
        <div className="bt-photo">
          <img src="/WED-I/FEATURE2.JPG" alt="Biotech Lab" />
        </div>

        <div className="bt-divider" />

        {/* Services */}
        <div className="bt-body">
          {services.map((group, i) => (
            <div className="bt-group" key={i}>
              <h3 className="bt-group-title">{group.category}</h3>
              <div className="bt-items">
                {group.items.map((item, j) => (
                  <div className="bt-item" key={j}>
                    <div className="bt-item-row">
                      <div className="bt-item-left">
                        <span className="bt-item-name">{item.name}</span>
                      </div>
                      <div className="bt-item-right">
                        {item.sub && <span className="bt-item-sub">{item.sub}</span>}
                        {item.badge && <span className="bt-item-badge">{item.badge}</span>}
                        <span className="bt-item-price">{item.price.toString().startsWith('+') ? `+ ₱ ${item.price.slice(1)}` : `₱ ${item.price}`}</span>
                      </div>
                    </div>
                    {item.note && <p className="bt-item-note">{item.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bt-footer">
          <p className="bt-footer-note">All prices are in Philippine Peso (PHP). Prices are subject to change.</p>
          <button className="bt-close-btn" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
}