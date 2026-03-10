import { useState } from "react";
import "./Calibration.css";

const categories = {
  Pressure: [
    {
      category: "Pressure Gauge (Analog/Digital)",
      items: [
        { name: "≤ 500 psi", price: "250" },
        { name: "> 500 psi", price: "300" },
        { name: "> 1000 psi", price: "500" },
        { name: "> 2000 psi", price: "900" },
        { name: "> 5000 psi", price: "1,500" },
        { name: "Per additional calibration point/s", price: "+200", badge: "Add-on" },
      ],
    },
    {
      category: "Sphygmomanometer",
      items: [
        { name: "Sphygmomanometer", price: "840" },
      ],
    },
  ],
  Temperature: [
    {
      category: "Digital Thermometer",
      items: [
        { name: "-45°C to 150°C", sub: "1 to 5 points", price: "800" },
        { name: "Per additional point/s", price: "+150", badge: "Add-on" },
        { name: "Per additional probe", price: "+800", badge: "Add-on" },
      ],
    },
    {
      category: "RTD Probe / Wire Stand",
      items: [
        { name: "-45°C to 150°C", sub: "1 to 5 points", price: "1,300" },
        { name: "Per additional point/s", price: "+450", badge: "Add-on" },
      ],
    },
    {
      category: "Liquid Glass Thermometer",
      items: [
        { name: "-45°C to 150°C", sub: "1 to 5 points", price: "1,000" },
        { name: "Per additional point/s", price: "+350", badge: "Add-on" },
        { name: "Additional charge if any test temperature is below 20°C", price: "+180", badge: "Add-on" },
        { name: "Per additional glass thermometer", price: "+800", badge: "Add-on" },
      ],
    },
    {
      category: "Thermocouple Probe / Wire",
      items: [
        { name: "1 to 4 points", price: "800" },
        { name: "Per additional point/s", price: "+180", badge: "Add-on" },
      ],
    },
    {
      category: "Infrared Thermometer",
      items: [
        { name: "Low range", sub: "0, 35, 50, 100, 120 °C", price: "2,240" },
        { name: "High range", sub: "0, 100, 200, 350, 500 °C", price: "2,240" },
      ],
    },
  ],
  Electrical: [
    {
      category: "Ohmmeter",
      items: [
        { name: "First range", price: "550" },
        { name: "Per succeeding range", price: "+250", badge: "Add-on" },
      ],
    },
    {
      category: "Ammeter (AC, 20A)",
      items: [
        { name: "1 to 2 ranges", price: "500" },
        { name: "1 to 5 ranges", price: "840" },
      ],
    },
    {
      category: "DC Ammeter (2A and below)",
      items: [
        { name: "1 to 2 ranges", price: "500" },
        { name: "1 to 5 ranges", price: "840" },
      ],
    },
    {
      category: "DC Ammeter (above 2A)",
      items: [
        { name: "1 to 2 ranges", price: "700" },
        { name: "1 to 5 ranges", price: "1,150" },
      ],
    },
    {
      category: "Voltmeter (1000V AC/DC)",
      items: [
        { name: "First range", price: "460" },
        { name: "Per succeeding range", price: "+180", badge: "Add-on" },
      ],
    },
    {
      category: "Wattmeter (AC 240V, 5A)",
      items: [
        { name: "First range", price: "1,300" },
        { name: "Per succeeding range", price: "+600", badge: "Add-on" },
      ],
    },
    {
      category: "Oscilloscope Calibration",
      items: [
        { name: "Up to 100 MHz", price: "4,000" },
        { name: "100 MHz to 1 GHz", price: "8,000" },
      ],
    },
    {
      category: "Power Supply Calibration",
      items: [
        { name: "Up to 30V / 5A", price: "3,000" },
      ],
    },
    {
      category: "Function Generator Calibration",
      items: [
        { name: "Up to 10 MHz", price: "3,550" },
        { name: "10 Hz to 50 Hz", price: "4,800" },
      ],
    },
    {
      category: "AC Clamp Meter (Up to 500A)",
      items: [
        { name: "First range", price: "500" },
        { name: "Succeeding range", price: "+200", badge: "Add-on" },
      ],
    },
    {
      category: "DC Clamp Meter (Up to 500A)",
      items: [
        { name: "First range", price: "600" },
        { name: "Succeeding range", price: "+250", badge: "Add-on" },
      ],
    },
    {
      category: "Multimeter — Analog Type",
      items: [
        { name: "Analog Type", price: "1,500" },
      ],
    },
    {
      category: "Multimeter — Digital Type",
      items: [
        { name: "3 digits", price: "2,000" },
        { name: "4 digits", price: "3,700" },
        { name: "5 digits", price: "5,400" },
        { name: "6 digits", price: "7,200" },
        { name: "7 digits and above", price: "8,000" },
      ],
    },
  ],
};

const tabIcons = {
  Pressure: "🔵",
  Temperature: "🌡️",
  Electrical: "⚡",
};

export default function Calibration({ onClose }) {
  const [activeTab, setActiveTab] = useState("Pressure");

  return (
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-card" onClick={(e) => e.stopPropagation()}>

        <button className="cal-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="cal-header">
          <span className="cal-tag">Services & Pricing</span>
          <h2 className="cal-title"><span className="cal-accent">Calibration</span> Services</h2>
          <p className="cal-subtitle">Precision calibration for pressure, temperature, and electrical instruments.</p>
        </div>

        {/* Photo */}
        <div className="cal-photo">
          <img src="/CALIBRATE.jpg" alt="Calibration Lab" />
        </div>

        {/* Tabs */}
        <div className="cal-tabs">
          {Object.keys(categories).map((tab) => (
            <button
              key={tab}
              className={`cal-tab ${activeTab === tab ? "cal-tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tabIcons[tab]}</span> {tab}
            </button>
          ))}
        </div>

        {/* Services */}
        <div className="cal-body">
          {categories[activeTab].map((group, i) => (
            <div className="cal-group" key={i}>
              <h3 className="cal-group-title">{group.category}</h3>
              <div className="cal-items">
                {group.items.map((item, j) => (
                  <div className="cal-item" key={j}>
                    <div className="cal-item-left">
                      <span className="cal-item-name">{item.name}</span>
                      {item.sub && <span className="cal-item-sub">{item.sub}</span>}
                    </div>
                    <div className="cal-item-right">
                      {item.badge && <span className="cal-item-badge">{item.badge}</span>}
                      <span className="cal-item-price">
                        {String(item.price).startsWith('+') ? `+ ₱ ${item.price.slice(1)}` : `₱ ${item.price}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cal-footer">
          <p className="cal-footer-note">All prices are in Philippine Peso (PHP). Prices are subject to change.</p>
          <button className="cal-close-btn" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
}