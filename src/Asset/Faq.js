import { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What is the MTCC?",
        a: "The Material Testing and Calibration Center (MTCC) is a specialized facility under Batangas State University — The National Engineering University (BatStateU-TNEU). We provide accredited testing and calibration services to industries, academic institutions, and government agencies.",
      },
      {
        q: "Where is MTCC located?",
        a: "MTCC is located at the BatStateU TNEU Alangilan Campus, Alangilan, Batangas City, Philippines. You may also reach us through our official Facebook page or via email for inquiries.",
      },
      {
        q: "Who can avail of MTCC's services?",
        a: "Our services are open to private companies, government agencies, academic institutions, researchers, and individual clients who require material testing, biotechnology analysis, or instrument calibration.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "What types of material testing do you offer?",
        a: "We offer a wide range of mechanical and physical testing including tensile strength, compression, bending, hardness, impact, and more — conducted using our Universal Testing Machine (UTM) and other specialized equipment.",
      },
      {
        q: "What instruments can be calibrated at MTCC?",
        a: "We calibrate a variety of measuring instruments including vernier calipers, micrometers, balances, thermometers, pressure gauges, and other precision tools in accordance with national and international standards.",
      },
      {
        q: "Do you offer biotech or laboratory analysis services?",
        a: "Yes. Our Biotechnology Laboratory provides microbial analysis, water quality testing, food safety testing, and other biological and chemical analyses for research and industrial applications.",
      },
    ],
  },
  {
    category: "Process & Pricing",
    items: [
      {
        q: "How do I request a service?",
        a: "You may submit a service request by visiting our office at BatStateU Alangilan Campus, sending an email, or filling out the contact form on this website. Our staff will get back to you with a quotation and schedule.",
      },
      {
        q: "How long does it take to receive results?",
        a: "Turnaround time varies depending on the type and volume of tests requested. Standard results are tentatively released within 10–15 working days. Rush requests may be accommodated subject to availability.",
      },
      {
        q: "How are service fees determined?",
        a: "Fees are based on the type of test or calibration, number of samples, and complexity of the procedure. A detailed quotation will be provided before any work begins. Academic and research discounts may apply.",
      },
    ],
  },
];

export default function FAQ({ onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (key) => setOpenIndex(openIndex === key ? null : key);

  return (
    <div className="faq-overlay" onClick={onClose}>
      <div className="faq-modal" onClick={(e) => e.stopPropagation()}>

        <button className="faq-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="faq-header">
          <span className="faq-tag">Help Center</span>
          <h2 className="faq-title">Frequently Asked <span className="faq-accent">Questions</span></h2>
          <p className="faq-sub">Everything you need to know about MTCC and our services.</p>
        </div>

        <div className="faq-body">
          {faqs.map((group, gi) => (
            <div className="faq-group" key={gi}>
              <div className="faq-category-label">{group.category}</div>
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                const isOpen = openIndex === key;
                return (
                  <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`} key={key}>
                    <button className="faq-question" onClick={() => toggle(key)}>
                      <span className="faq-q-text">{item.q}</span>
                      <span className="faq-chevron">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer-wrap">
                      <div className="faq-answer-inner">
                        <p className="faq-answer">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions?</p>
          <a href="mailto:mtcc@g.batstate-u.edu.ph" className="faq-contact-btn">📬 Contact Us</a>
        </div>

      </div>
    </div>
  );
}