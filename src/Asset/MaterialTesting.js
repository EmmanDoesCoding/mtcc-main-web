import "./MaterialTesting.css";

const services = [
  {
    category: "General Tests",
    items: [
      { name: "Coating Thickness Test", price: 280 },
      { name: "Hardness Test", price: 300 },
      { name: "Moisture Test", price: 250 },
      { name: "UV Light Test", price: 300 },
    ],
  },
  {
    category: "UTM Compression Test",
    items: [
      { name: "Cement and Concrete", price: 250 },
      { name: "Wood, Steel, and other related materials", price: 250 },
    ],
  },
  {
    category: "UTM Tensile Strength Test",
    items: [
      { name: "Steel, general", price: 250 },
      { name: "Steel, >20mm diameter and above", price: 350 },
      { name: "Angle bars, plates, sheets", price: 450 },
    ],
  },
  {
    category: "UTM Flexural Test",
    items: [
      { name: "Steel, general", price: 250 },
      { name: "Steel, >20mm diameter and above", price: 350 },
      { name: "Angle bars, plates, sheets", price: 450 },
    ],
  },
  {
    category: "UTM Bending Test",
    items: [
      { name: "Steel, general", price: 250 },
      { name: "Steel, >20mm diameter and above", price: 350 },
      { name: "Angle bars, plates, sheets", price: 450 },
    ],
  },
  {
    category: "FTIR Spectrometer",
    items: [
      { name: "With library searching and ID", price: 500 },
      { name: "With raw data exporting and/or post processing (e.g., manual peak labeling)", price: "+300", note: "Add-on" },
    ],
  },
];

export default function MaterialTesting({ onClose }) {
  return (
    <div className="mt-overlay" onClick={onClose}>
      <div className="mt-card" onClick={(e) => e.stopPropagation()}>

        <button className="mt-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="mt-header">
          <span className="mt-tag">Services & Pricing</span>
          <h2 className="mt-title">Material <span className="mt-accent">Testing</span></h2>
          <p className="mt-subtitle">Certified testing services for construction materials, metals, and specimens.</p>
        </div>

        {/* Photo */}
        <div className="mt-photo">
          <img src="/WED-I/FEATURE1.JPG" alt="Material Testing" />
        </div>

        <div className="mt-divider" />

        {/* Services */}
        <div className="mt-body">
          {services.map((group, i) => (
            <div className="mt-group" key={i}>
              <h3 className="mt-group-title">{group.category}</h3>
              <div className="mt-items">
                {group.items.map((item, j) => (
                  <div className="mt-item" key={j}>
                    <span className="mt-item-name">
                      {item.name}
                      {item.note && <span className="mt-item-badge">{item.note}</span>}
                    </span>
                    <span className="mt-item-price">₱ {item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-footer">
          <p className="mt-footer-note">All prices are in Philippine Peso (PHP). Prices are subject to change.</p>
          <button className="mt-close-btn" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
}